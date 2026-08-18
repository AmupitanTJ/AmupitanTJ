"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { buildMailto, hasContactErrors, validateContact } from "@/lib/contact";
import type { ContactFieldErrors, ContactPayload } from "@/types";

const empty: ContactPayload = {
  name: "",
  email: "",
  message: "",
};

type ContactFormProps = {
  to?: string;
};

export function ContactForm({ to }: ContactFormProps) {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<ContactFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "ready" | "copied">("idle");

  function update<K extends keyof ContactPayload>(key: K, value: string) {
    setValues((current) => ({ ...current, [key]: value }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateContact(values);
    setErrors(nextErrors);

    if (hasContactErrors(nextErrors)) {
      setStatus("idle");
      return;
    }

    if (to) {
      window.location.href = buildMailto(to, values);
      setStatus("ready");
      return;
    }

    const text = [
      `From: ${values.name.trim()} <${values.email.trim()}>`,
      "",
      values.message.trim(),
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
      setStatus("copied");
    } catch {
      setStatus("ready");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <Field
        id="name"
        label="Name"
        error={errors.name}
        value={values.name}
        onChange={(value) => update("name", value)}
        autoComplete="name"
      />
      <Field
        id="email"
        label="Email"
        type="email"
        error={errors.email}
        value={values.email}
        onChange={(value) => update("email", value)}
        autoComplete="email"
      />
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(event) => update("message", event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="rounded-none border-rule bg-paper-bright"
        />
        {errors.message ? (
          <p id="message-error" className="text-sm text-mark">
            {errors.message}
          </p>
        ) : null}
      </div>
      <Button
        type="submit"
        className="rounded-none px-6 tracking-[0.14em] uppercase"
      >
        {to ? "Open mail draft" : "Prepare message"}
      </Button>
      <StatusMessage status={status} hasEmail={Boolean(to)} />
    </form>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  autoComplete,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  autoComplete?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="rounded-none border-rule bg-paper-bright"
      />
      {error ? (
        <p id={`${id}-error`} className="text-sm text-mark">
          {error}
        </p>
      ) : null}
    </div>
  );
}

function StatusMessage({
  status,
  hasEmail,
}: {
  status: "idle" | "ready" | "copied";
  hasEmail: boolean;
}) {
  if (status === "idle") {
    return null;
  }

  if (status === "copied") {
    return (
      <p role="status" className="text-sm text-forest">
        Message copied. Paste it into GitHub or LinkedIn if your mail app did
        not open.
      </p>
    );
  }

  return (
    <p role="status" className="text-sm text-forest">
      {hasEmail
        ? "Your mail app should open with the draft. If it does not, use the social links."
        : "No public email is configured yet. Use GitHub or LinkedIn, or set NEXT_PUBLIC_CONTACT_EMAIL."}
    </p>
  );
}
