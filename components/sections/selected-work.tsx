import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import type { Project } from "@/types";

export function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <Container
      as="section"
      id="work"
      className="py-section scroll-mt-20"
      aria-labelledby="selected-work-title"
    >
      <SectionReveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have built"
          id="selected-work-title"
          description="Real projects from my public GitHub repositories, with their current status and my role stated clearly."
        />
      </SectionReveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <SectionReveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} />
          </SectionReveal>
        ))}
      </div>
    </Container>
  );
}
