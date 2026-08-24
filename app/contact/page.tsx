import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/sections/page-intro";
import { SocialLink } from "@/components/social-link";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Contact Tosin Joseph Amupitan through the portfolio form, GitHub, or LinkedIn.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-section">
      <div className="grid gap-12 lg:grid-cols-[1fr_20rem]">
        <div>
          <PageIntro code="03" kicker="Contact" title="Get in touch">
            Send a message about a project, collaboration, or web development
            opportunity. I will reply to the email address you provide.
          </PageIntro>
          <div className="mt-10 max-w-lg">
            <ContactForm to={site.email} />
          </div>
        </div>
        <aside className="border-border bg-card shadow-card h-fit space-y-8 rounded-lg border p-6">
          <div>
            <p className="meta text-muted-foreground">Direct</p>
            <ul className="mt-4 space-y-3">
              {site.social.map((item) => (
                <li key={item.href}>
                  <SocialLink
                    href={item.href}
                    label={item.label}
                    handle={item.handle}
                  />
                </li>
              ))}
              {site.email ? (
                <li>
                  <SocialLink
                    href={`mailto:${site.email}`}
                    label={site.email}
                  />
                </li>
              ) : (
                <li className="text-muted-foreground text-sm leading-6">
                  Prefer social? Send a message through GitHub or LinkedIn.
                </li>
              )}
            </ul>
          </div>
          <div>
            <p className="meta text-muted-foreground">Location</p>
            <p className="text-foreground mt-2 text-sm">{site.location}</p>
          </div>
        </aside>
      </div>
    </Container>
  );
}
