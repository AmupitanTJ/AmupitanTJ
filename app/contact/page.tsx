import { ContactForm } from "@/components/contact/contact-form";
import { PageIntro } from "@/components/sections/page-intro";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Write to Tosin Joseph about frontend work via the contact form, GitHub, or LinkedIn.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="grid gap-12 lg:grid-cols-[1fr_24rem]">
      <div>
        <PageIntro code="04" kicker="Contact" title="The desk">
          Use the form if you want to write about frontend work. If no email is
          configured, the form still validates and prepares a message you can
          send through GitHub or LinkedIn.
        </PageIntro>
        <div className="mt-10 max-w-lg">
          <ContactForm to={site.email} />
        </div>
      </div>
      <aside className="border-rule h-fit space-y-6 border-t pt-6 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
        <div>
          <p className="folio">Direct</p>
          <ul className="mt-3 space-y-2 text-sm">
            {site.social.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-mark"
                >
                  {item.label} / {item.handle}
                </a>
              </li>
            ))}
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-mark">
                  {site.email}
                </a>
              </li>
            ) : (
              <li className="text-ink-soft">
                Email is not published yet. Set{" "}
                <code className="font-mono text-xs">
                  NEXT_PUBLIC_CONTACT_EMAIL
                </code>{" "}
                when you want the form to open a mail draft.
              </li>
            )}
          </ul>
        </div>
        <div>
          <p className="folio">Location</p>
          <p className="mt-2 text-sm">{site.location}</p>
        </div>
      </aside>
    </div>
  );
}
