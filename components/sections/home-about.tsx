import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { home } from "@/content/home";

export function HomeAbout() {
  return (
    <Container
      as="section"
      id="about"
      className="py-section scroll-mt-20"
      aria-labelledby="about-title"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <SectionReveal>
          <SectionHeading
            eyebrow="About"
            title="From foundations to full-stack projects"
            id="about-title"
          />
        </SectionReveal>
        <SectionReveal delay={0.05}>
          <div className="text-muted-foreground max-w-xl space-y-5 text-base leading-7">
            {home.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </SectionReveal>
      </div>
    </Container>
  );
}
