import { ContactForm } from "@/components/contact/contact-form";

export function LazyContactForm({ to }: { to?: string }) {
  return <ContactForm to={to} />;
}
