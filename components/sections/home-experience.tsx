import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { TimelineItem } from "@/components/timeline-item";
import type { Experience } from "@/types";

export function HomeExperience({ roles }: { roles: Experience[] }) {
  return (
    <Container
      as="section"
      id="experience"
      className="pb-section scroll-mt-20"
      aria-labelledby="experience-title"
    >
      <SectionReveal>
        <SectionHeading
          eyebrow="Product work"
          title="Products and platforms"
          id="experience-title"
          description="Completed product work alongside the platform I am actively building now."
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
    </Container>
  );
}
