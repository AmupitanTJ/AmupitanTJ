import { ProjectCard } from "@/components/project-card";
import { SectionReveal } from "@/components/section-reveal";
import type { Project } from "@/types";

export function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {projects.map((project, index) => (
        <SectionReveal key={project.slug} delay={index * 0.04}>
          <ProjectCard project={project} />
        </SectionReveal>
      ))}
    </div>
  );
}
