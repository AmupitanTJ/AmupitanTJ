import "server-only";

import { Resend } from "resend";
import type { ContactFormValues } from "@/lib/contact";

type ContactMessage = Pick<
  ContactFormValues,
  "name" | "email" | "subject" | "message"
>;

export function contactEmailIsConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
    process.env.CONTACT_TO_EMAIL &&
    process.env.CONTACT_FROM_EMAIL,
  );
}

export async function sendContactEmail(message: ContactMessage) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    throw new Error("Contact email is not configured.");
  }

  const resend = new Resend(apiKey);
  const { data, error } = await resend.emails.send({
    from,
    to,
    replyTo: message.email,
    subject: `[Portfolio] ${message.subject}`,
    text: [
      `From: ${message.name} <${message.email}>`,
      "",
      message.message,
    ].join("\n"),
  });

  if (error) {
    throw new Error("Resend rejected the contact email.");
  }

  return data;
}
