"use client";

import dynamic from "next/dynamic";

const ContactForm = dynamic(
  () =>
    import("@/components/contact/contact-form").then(
      (module) => module.ContactForm,
    ),
  {
    ssr: false,
    loading: () => (
      <div
        role="status"
        className="border-border bg-card flex min-h-[32rem] items-start rounded-lg border p-5"
      >
        <p className="text-muted-foreground text-sm">Loading contact form…</p>
      </div>
    ),
  },
);

export function LazyContactForm({ to }: { to?: string }) {
  return <ContactForm to={to} />;
}
