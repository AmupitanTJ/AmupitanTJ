import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact";
import { contactEmailIsConfigured, sendContactEmail } from "@/lib/email";

const MAX_REQUEST_BYTES = 16_000;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1_000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestLog = new Map<string, number[]>();

export async function POST(request: Request) {
  if (!isSameOrigin(request)) {
    return NextResponse.json(
      { ok: false, message: "This request could not be accepted." },
      { status: 403 },
    );
  }

  const rateLimit = checkRateLimit(request);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many messages were sent. Please wait before trying again.",
      },
      {
        status: 429,
        headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
      },
    );
  }

  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_REQUEST_BYTES) {
    return NextResponse.json(
      { ok: false, message: "That message is too large to send." },
      { status: 413 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "The submitted form was not valid." },
      { status: 400 },
    );
  }

  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please review the highlighted fields and try again.",
        fieldErrors: result.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot submissions receive a normal response so bots get no feedback.
  if (result.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (!contactEmailIsConfigured()) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "The contact form is temporarily unavailable. Please use the email link instead.",
      },
      { status: 503 },
    );
  }

  try {
    await sendContactEmail(result.data);
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Your message could not be sent. Please try again or use the email link.",
      },
      { status: 502 },
    );
  }
}

function checkRateLimit(request: Request) {
  const now = Date.now();
  const forwardedFor = request.headers.get("x-forwarded-for");
  const key = forwardedFor?.split(",")[0]?.trim() || "unknown";
  const recent = (requestLog.get(key) ?? []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS,
  );

  if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
    const retryAfterSeconds = Math.max(
      1,
      Math.ceil((RATE_LIMIT_WINDOW_MS - (now - recent[0]!)) / 1_000),
    );
    requestLog.set(key, recent);
    return { allowed: false, retryAfterSeconds };
  }

  recent.push(now);
  requestLog.set(key, recent);
  return { allowed: true, retryAfterSeconds: 0 };
}

export function resetContactRateLimitForTests() {
  requestLog.clear();
}

function isSameOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");

  if (!origin || !host) {
    return true;
  }

  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}
