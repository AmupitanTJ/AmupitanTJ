import { ArrowUpRight, Clock3, Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/contact/contact-form";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/sections/page-intro";
import { SectionReveal } from "@/components/section-reveal";
import { site } from "@/content/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a web product conversation with Tosin Joseph Amupitan, a React and TypeScript developer based in Abuja.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Container className="py-section">
      <PageIntro
        code="03"
        kicker="Start a conversation"
        title="Let's build something useful."
        className="max-w-4xl"
      >
        Share the product goal, the problem you are solving, and where you need
        engineering support. I will reply with a clear next step.
      </PageIntro>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <SectionReveal>
          <aside className="border-foreground border-t pt-6">
            <p className="meta text-muted-foreground uppercase">
              Useful details
            </p>
            <ol className="mt-6 space-y-5">
              {[
                "What the product should achieve",
                "The scope or features you have in mind",
                "Your preferred timeline and current stage",
              ].map((item, index) => (
                <li key={item} className="flex gap-4 text-sm leading-6">
                  <span className="meta text-muted-foreground">
                    0{index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ol>

            <div className="border-border mt-10 space-y-5 border-t pt-6">
              {site.email ? (
                <a
                  href={`mailto:${site.email}`}
                  className="group focus-visible:outline-signal flex items-start gap-3 focus-visible:outline-2 focus-visible:outline-offset-3"
                >
                  <Mail className="mt-0.5 size-4" aria-hidden="true" />
                  <span>
                    <span className="meta text-muted-foreground block uppercase">
                      Email
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1.5 text-sm group-hover:underline">
                      {site.email}
                      <ArrowUpRight className="size-3.5" aria-hidden="true" />
                    </span>
                  </span>
                </a>
              ) : null}
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4" aria-hidden="true" />
                <span>
                  <span className="meta text-muted-foreground block uppercase">
                    Based in
                  </span>
                  <span className="mt-1 block text-sm">{site.location}</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock3 className="mt-0.5 size-4" aria-hidden="true" />
                <span>
                  <span className="meta text-muted-foreground block uppercase">
                    Working style
                  </span>
                  <span className="mt-1 block text-sm">
                    Remote collaboration
                  </span>
                </span>
              </div>
            </div>

            <ul className="border-border mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t pt-6">
              {site.social.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground hover:text-foreground focus-visible:outline-signal inline-flex items-center gap-1 text-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-3"
                  >
                    {item.label}
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </SectionReveal>

        <SectionReveal delay={0.06}>
          <section
            className="border-border-strong bg-card shadow-card rounded-xl border p-5 sm:p-8 lg:p-10"
            aria-labelledby="contact-form-title"
          >
            <p className="meta text-muted-foreground uppercase">
              Project enquiry
            </p>
            <h2
              id="contact-form-title"
              className="mt-3 text-2xl tracking-tight sm:text-3xl"
            >
              Tell me about the work.
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl text-sm leading-6">
              A short outline is enough to begin. The form is secure and your
              contact details are only used to respond to this enquiry.
            </p>
            <div className="mt-8">
              <ContactForm to={site.email} />
            </div>
          </section>
        </SectionReveal>
      </div>
    </Container>
  );
}
