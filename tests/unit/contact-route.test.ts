import { beforeEach, describe, expect, it, vi } from "vitest";

const sendContactEmail = vi.hoisted(() => vi.fn());

vi.mock("@/lib/email", () => ({
  contactEmailIsConfigured: () => true,
  sendContactEmail,
}));

import { POST } from "@/app/api/contact/route";

const validMessage = {
  name: "Ada Lovelace",
  email: "ada@example.com",
  subject: "Frontend collaboration",
  message: "I would like to talk about a frontend interface.",
  website: "",
};

describe("POST /api/contact", () => {
  beforeEach(() => {
    sendContactEmail.mockReset();
    sendContactEmail.mockResolvedValue({ id: "email_123" });
  });

  it("validates incoming JSON on the server", async () => {
    const response = await POST(makeRequest({ ...validMessage, subject: "x" }));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body.fieldErrors.subject).toBeDefined();
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("silently accepts honeypot submissions without sending", async () => {
    const response = await POST(
      makeRequest({ ...validMessage, website: "https://spam.example" }),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("sends only validated fields through the server email module", async () => {
    const response = await POST(makeRequest(validMessage));

    expect(response.status).toBe(200);
    expect(sendContactEmail).toHaveBeenCalledWith(validMessage);
  });

  it("returns a generic failure when the provider rejects the email", async () => {
    sendContactEmail.mockRejectedValue(new Error("provider detail"));

    const response = await POST(makeRequest(validMessage));
    const body = await response.json();

    expect(response.status).toBe(502);
    expect(body.message).not.toContain("provider detail");
  });
});

function makeRequest(body: unknown) {
  return new Request("http://localhost:3000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Origin: "http://localhost:3000",
      Host: "localhost:3000",
    },
    body: JSON.stringify(body),
  });
}
