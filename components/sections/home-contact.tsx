import { LazyContactForm } from "@/components/contact/lazy-contact-form";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { SocialLink } from "@/components/social-link";
import { home } from "@/content/home";
import { site } from "@/content/site";

export function HomeContact() {
  return (
    <Container
      as="section"
      id="contact"
      className="pb-section scroll-mt-20"
      aria-labelledby="contact-title"
    >
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)]">
        <div className="min-w-0">
          <SectionReveal>
            <SectionHeading
              eyebrow="Contact"
              title={home.contactHeading}
              id="contact-title"
              description={home.contactBody}
            />
          </SectionReveal>
          <SectionReveal className="mt-8 max-w-lg" delay={0.04}>
            <LazyContactForm to={site.email} />
          </SectionReveal>
        </div>
        <aside className="border-border-strong bg-card shadow-card h-fit min-w-0 space-y-8 rounded-lg border p-5 sm:p-6">
          <div>
            <p className="meta text-muted-foreground">Direct</p>
            <ul className="mt-4 space-y-4">
              <li>
                <p className="meta text-muted-foreground">Email</p>
                {site.email ? (
                  <SocialLink
                    href={`mailto:${site.email}`}
                    label={site.email}
                    className="mt-2"
                  />
                ) : (
                  <p className="text-muted-foreground mt-2 text-sm">
                    Use the form or reach me through GitHub or LinkedIn.
                  </p>
                )}
              </li>
              {site.social.map((item) => (
                <li key={item.href}>
                  <p className="meta text-muted-foreground">{item.label}</p>
                  <SocialLink
                    href={item.href}
                    label={item.handle}
                    className="mt-2"
                  />
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="meta text-muted-foreground">Location</p>
            <p className="text-foreground mt-2 text-sm">
              {site.location} / Remote
            </p>
          </div>
        </aside>
      </div>
    </Container>
  );
}
