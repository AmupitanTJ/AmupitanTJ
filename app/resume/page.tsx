import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { PageIntro } from "@/components/sections/page-intro";
import { Tag } from "@/components/tag";
import { TimelineItem } from "@/components/timeline-item";
import { skills } from "@/content/skills";
import { createMetadata } from "@/lib/metadata";
import { getExperience } from "@/lib/experience";

export const metadata = createMetadata({
  title: "Resume",
  description:
    "Current frontend practice, technical strengths, and tools used by Tosin Joseph.",
  path: "/resume",
});

export default function ResumePage() {
  const roles = getExperience();

  return (
    <Container className="py-section">
      <PageIntro code="03" kicker="Resume" title="Record">
        A concise view of my current frontend practice, technical strengths, and
        the tools I use to build dependable interfaces.
      </PageIntro>

      <section className="mt-16" aria-labelledby="experience-title">
        <SectionReveal>
          <SectionHeading
            eyebrow="Experience"
            title="Current practice"
            id="experience-title"
          />
        </SectionReveal>
        <ol className="mt-10 space-y-10">
          {roles.map((role) => (
            <li key={`${role.organization}-${role.title}`}>
              <SectionReveal>
                <TimelineItem
                  marker={role.current ? "Now" : (role.end ?? role.start)}
                  title={role.title}
                >
                  <p className="text-foreground">
                    {role.organization} — {role.location}
                  </p>
                  <p className="mt-1">{role.start}</p>
                  <p className="mt-3">{role.summary}</p>
                  <ul className="mt-3 list-disc space-y-1 pl-5">
                    {role.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </TimelineItem>
              </SectionReveal>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-20" aria-labelledby="skills-title">
        <SectionReveal>
          <SectionHeading
            eyebrow="Tools"
            title="In regular use"
            id="skills-title"
          />
        </SectionReveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {skills.map((group) => (
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
    </Container>
  );
}
