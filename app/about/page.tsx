import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { PageIntro } from "@/components/sections/page-intro";
import { Tag } from "@/components/tag";
import { TimelineItem } from "@/components/timeline-item";
import { about } from "@/content/about";
import { createMetadata } from "@/lib/metadata";
import { padIndex } from "@/lib/utils";

export const metadata = createMetadata({
  title: "About",
  description:
    "Tosin Joseph is a frontend developer in Nigeria working with React, TypeScript, and Tailwind CSS.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <Container className="py-section">
      <PageIntro code="05" kicker="About" title={about.title}>
        {about.intro[0]}
      </PageIntro>

      <div className="text-muted-foreground mt-10 max-w-2xl space-y-5 text-base leading-7">
        {about.intro.slice(1).map((paragraph) => (
          <SectionReveal key={paragraph}>
            <p>{paragraph}</p>
          </SectionReveal>
        ))}
      </div>

      <section className="mt-20" aria-labelledby="approach-title">
        <SectionReveal>
          <SectionHeading
            eyebrow="Approach"
            title="How the work is made"
            id="approach-title"
          />
        </SectionReveal>
        <ol className="mt-10 space-y-10">
          {about.approach.map((item, index) => (
            <li key={item.title}>
              <SectionReveal delay={index * 0.04}>
                <TimelineItem marker={padIndex(index)} title={item.title}>
                  {item.body}
                </TimelineItem>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="tools-title">
        <SectionReveal>
          <SectionHeading
            eyebrow="Tools"
            title="In regular use"
            id="tools-title"
          />
        </SectionReveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {about.skills.map((group) => (
            <SectionReveal key={group.heading}>
              <h3 className="meta text-muted-foreground">{group.heading}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </SectionReveal>
          ))}
        </div>
      </section>

      <SectionReveal className="mt-20 max-w-xl">
        <p className="meta text-muted-foreground">Now</p>
        <p className="mt-3 text-2xl leading-snug tracking-tight">{about.now}</p>
      </SectionReveal>
    </Container>
  );
}
