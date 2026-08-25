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
      <div className="border-border-strong bg-card shadow-card grid overflow-hidden rounded-xl border lg:grid-cols-[0.78fr_1.22fr]">
        <div className="border-border min-w-0 p-6 sm:p-8 lg:border-r lg:p-10">
          <SectionReveal>
            <SectionHeading
              eyebrow="Contact"
              title={home.contactHeading}
              id="contact-title"
              description={home.contactBody}
            />
          </SectionReveal>
          <SectionReveal className="mt-10" delay={0.04}>
            <p className="meta text-muted-foreground uppercase">Direct</p>
            <ul className="mt-4 space-y-5">
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
            <p className="meta text-muted-foreground mt-8 uppercase">
              Location
            </p>
            <p className="text-foreground mt-2 text-sm">
              {site.location} / Remote
            </p>
          </SectionReveal>
        </div>
        <SectionReveal className="min-w-0 p-6 sm:p-8 lg:p-10" delay={0.06}>
          <p className="meta text-muted-foreground uppercase">
            Project enquiry
          </p>
          <h3 className="mt-3 text-2xl tracking-tight">
            Start the conversation
          </h3>
          <div className="mt-7">
            <LazyContactForm to={site.email} />
          </div>
        </SectionReveal>
      </div>
    </Container>
  );
}
