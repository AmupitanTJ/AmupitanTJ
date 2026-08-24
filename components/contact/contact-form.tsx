"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type UseFormRegisterReturn } from "react-hook-form";
import { Button } from "@/components/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactFormValues } from "@/lib/contact";

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
  website: "",
};

type ContactFormProps = {
  to?: string;
};

type SubmissionState =
  | { kind: "idle" }
  | { kind: "success"; message: string }
  | { kind: "error"; message: string };

export function ContactForm({ to }: ContactFormProps) {
  const [submission, setSubmission] = useState<SubmissionState>({
    kind: "idle",
  });
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (values) => {
    setSubmission({ kind: "idle" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = (await response.json()) as {
        ok?: boolean;
        message?: string;
        fieldErrors?: Partial<Record<keyof ContactFormValues, string[]>>;
      };

      if (!response.ok || !result.ok) {
        for (const [field, messages] of Object.entries(
          result.fieldErrors ?? {},
        )) {
          const message = messages?.[0];
          if (message && field in defaultValues) {
            setError(field as keyof ContactFormValues, {
              type: "server",
              message,
            });
          }
        }

        setSubmission({
          kind: "error",
          message:
            result.message ??
            "Your message could not be sent. Please try again.",
        });
        return;
      }

      reset(defaultValues);
      setSubmission({
        kind: "success",
        message: "Thanks—your message has been sent successfully.",
      });
    } catch {
      setSubmission({
        kind: "error",
        message:
          "A network error stopped the message from sending. Please try again.",
      });
    }
  });

  return (
    <div>
      <form onSubmit={onSubmit} className="space-y-5" noValidate>
        <TextField
          id="name"
          label="Name"
          autoComplete="name"
          error={errors.name?.message}
          disabled={isSubmitting}
          registration={register("name")}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          autoComplete="email"
          error={errors.email?.message}
          disabled={isSubmitting}
          registration={register("email")}
        />
        <TextField
          id="subject"
          label="Subject"
          autoComplete="off"
          error={errors.subject?.message}
          disabled={isSubmitting}
          registration={register("subject")}
        />

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            rows={7}
            disabled={isSubmitting}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : undefined}
            className="border-border-strong bg-surface min-h-40 rounded-md"
            {...register("message")}
          />
          <FieldError id="message-error" message={errors.message?.message} />
        </div>

        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-auto -left-[10000px] h-px w-px overflow-hidden"
        >
          <Label htmlFor="website">Website</Label>
          <Input
            id="website"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </div>

        <Button type="submit" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? "Sending…" : "Send message"}
        </Button>

        <div aria-live="polite" aria-atomic="true">
          {submission.kind === "success" ? (
            <p role="status" className="text-signal-strong text-sm">
              {submission.message}
            </p>
          ) : null}
          {submission.kind === "error" ? (
            <p role="alert" className="text-destructive text-sm">
              {submission.message}
            </p>
          ) : null}
        </div>
      </form>

      {to ? (
        <p className="text-muted-foreground mt-5 text-sm">
          Prefer email? Contact me at{" "}
          <a
            href={`mailto:${to}`}
            className="text-foreground decoration-border-strong hover:text-signal underline transition-colors"
          >
            {to}
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}

type TextFieldProps = {
  id: string;
  label: string;
  type?: string;
  autoComplete?: string;
  error?: string;
  disabled?: boolean;
  registration: UseFormRegisterReturn;
};

function TextField({
  id,
  label,
  type = "text",
  autoComplete,
  error,
  disabled,
  registration,
}: TextFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className="border-border-strong bg-surface rounded-md"
        {...registration}
      />
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p id={id} role="alert" className="text-destructive text-sm">
      {message}
    </p>
  ) : null;
}
