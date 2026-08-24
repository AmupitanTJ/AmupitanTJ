import { z } from "zod";

const required = (field: string) => `${field} is required.`;

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Enter your name using at least two characters.")
    .max(80, "Name must be 80 characters or fewer."),
  email: z
    .string()
    .trim()
    .min(1, required("Email"))
    .email("Enter a valid email address.")
    .max(254, "Email must be 254 characters or fewer."),
  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least three characters.")
    .max(120, "Subject must be 120 characters or fewer.")
    .refine((value) => !/[\r\n]/.test(value), "Subject must be one line."),
  message: z
    .string()
    .trim()
    .min(20, "Tell me a little more—use at least 20 characters.")
    .max(5000, "Message must be 5,000 characters or fewer."),
  website: z.string().max(200, "Website value is too long."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export function buildMailto(
  to: string,
  payload: Pick<ContactFormValues, "name" | "email" | "subject" | "message">,
): string {
  const body = [
    payload.message.trim(),
    "",
    `— ${payload.name.trim()}`,
    payload.email.trim(),
  ].join("\n");

  return `mailto:${to}?subject=${encodeURIComponent(payload.subject.trim())}&body=${encodeURIComponent(body)}`;
}
