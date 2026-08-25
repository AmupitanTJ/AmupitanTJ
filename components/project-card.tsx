import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ProjectCover } from "@/components/project-cover";
import { Tag } from "@/components/tag";
import { statusLabel } from "@/lib/projects";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const inProgress = project.status === "in-progress";

  return (
    <article className="group border-foreground bg-card shadow-card duration-base flex h-full min-w-0 flex-col overflow-hidden rounded-lg border transition-[transform,box-shadow] ease-out hover:shadow-[8px_8px_0_rgb(10_10_10/0.12)] motion-safe:hover:-translate-y-1">
      <ProjectCover title={project.title} image={project.coverImage} />
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p
            className={cn(
              "meta",
              inProgress ? "text-signal" : "text-muted-foreground",
            )}
          >
            {statusLabel(project.status)}
          </p>
          <p className="meta text-muted-foreground">{project.year}</p>
        </div>
        <h3 className="mt-3 text-xl tracking-tight sm:text-2xl">
          <Link
            href={`/projects/${project.slug}`}
            className="text-foreground duration-base decoration-foreground focus-visible:outline-signal transition-colors ease-out hover:underline focus-visible:outline-2 focus-visible:outline-offset-3"
          >
            {project.title}
          </Link>
        </h3>
        <p className="text-muted-foreground mt-2 flex-1 text-sm leading-6">
          {project.shortDescription}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 4).map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
        <Link
          href={`/projects/${project.slug}`}
          className="text-foreground duration-base hover:text-signal focus-visible:outline-signal mt-5 inline-flex items-center gap-1.5 text-sm transition-colors ease-out focus-visible:outline-2 focus-visible:outline-offset-3"
        >
          View case study
          <ArrowUpRight
            className="motion-safe:duration-base size-3.5 motion-safe:transition-transform motion-safe:ease-out motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </Link>
      </div>
    </article>
  );
}
