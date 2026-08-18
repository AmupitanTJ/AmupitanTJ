import type { ContactFieldErrors, ContactPayload } from "@/types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(payload: ContactPayload): ContactFieldErrors {
  const errors: ContactFieldErrors = {};
  const name = payload.name.trim();
  const email = payload.email.trim();
  const message = payload.message.trim();

  if (name.length < 2) {
    errors.name = "Name needs at least two characters.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (message.length < 20) {
    errors.message = "Message needs at least twenty characters.";
  }

  return errors;
}

export function hasContactErrors(errors: ContactFieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

export function buildMailto(to: string, payload: ContactPayload): string {
  const subject = `Portfolio inquiry from ${payload.name.trim()}`;
  const body = [
    payload.message.trim(),
    "",
    `— ${payload.name.trim()}`,
    payload.email.trim(),
  ].join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
