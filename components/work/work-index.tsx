import { RevealItem } from "@/components/motion/reveal";
import { ProjectRow } from "@/components/work/project-row";
import type { Project } from "@/types";

export function WorkIndex({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map((project, index) => (
        <RevealItem key={project.slug}>
          <ProjectRow project={project} index={index} />
        </RevealItem>
      ))}
    </div>
  );
}
