import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { Tag } from "@/components/tag";
import { TimelineItem } from "@/components/timeline-item";
import { about } from "@/content/about";
import { padIndex } from "@/lib/utils";

export function HomeAbout({ standalone = false }: { standalone?: boolean }) {
  const subsectionHeading = standalone ? "h2" : "h3";

  return (
    <Container
      as="section"
      id="about"
      tabIndex={-1}
      className="py-section scroll-mt-20 focus:outline-none"
      aria-labelledby="about-title"
    >
      <SectionReveal>
        <SectionHeading
          eyebrow="About"
          title={about.title}
          as={standalone ? "h1" : "h2"}
          id="about-title"
          description={about.intro[0]}
        />
      </SectionReveal>
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
            title="How I approach product work"
            as={subsectionHeading}
            id="approach-title"
          />
        </SectionReveal>
        <ol className="mt-10 space-y-10">
          {about.approach.map((item, index) => (
            <li key={item.title}>
              <SectionReveal delay={index * 0.04}>
                <TimelineItem
                  marker={padIndex(index)}
                  title={item.title}
                  headingAs={standalone ? "h3" : "h4"}
                >
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
            as={subsectionHeading}
            id="tools-title"
          />
        </SectionReveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {about.skills.map((group) => (
            <SectionReveal key={group.heading}>
              <p className="meta text-muted-foreground">{group.heading}</p>
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
