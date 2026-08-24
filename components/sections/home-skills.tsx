import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { Tag } from "@/components/tag";
import { skills } from "@/content/skills";

export function HomeSkills() {
  return (
    <Container
      as="section"
      className="pb-section"
      aria-labelledby="skills-title"
    >
      <SectionReveal>
        <SectionHeading
          eyebrow="Skills"
          title="In regular use"
          id="skills-title"
        />
      </SectionReveal>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
    </Container>
  );
}
