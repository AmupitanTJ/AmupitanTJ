import { projects } from "@/content/projects";
import { isTodo } from "@/lib/todo";
import type { Project, ProjectStatus } from "@/types";

function isPublished(project: Project): boolean {
  return !isTodo(project.challenge) && !isTodo(project.solution);
}

export function statusLabel(status: ProjectStatus): string {
  if (status === "in-progress") {
    return "In progress";
  }
  return status;
}

export function getProjects(): Project[] {
  return projects.filter(isPublished);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured && isPublished(project));
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(
    (project) => project.slug === slug && isPublished(project),
  );
}

export function getProjectSlugs(): string[] {
  return getProjects().map((project) => project.slug);
}

export function getAdjacentProjects(slug: string): {
  previous?: Project;
  next?: Project;
} {
  const published = getProjects();
  const index = published.findIndex((project) => project.slug === slug);
  if (index === -1) {
    return {};
  }

  return {
    previous: index > 0 ? published[index - 1] : undefined,
    next: index < published.length - 1 ? published[index + 1] : undefined,
  };
}
