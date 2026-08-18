import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { padIndex } from "@/lib/utils";

type ProjectRowProps = {
  project: Project;
  index: number;
};

export function ProjectRow({ project, index }: ProjectRowProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group border-rule grid gap-3 border-t py-6 transition-colors last:border-b md:grid-cols-[4rem_1fr_auto] md:items-end md:gap-8"
    >
      <span className="folio text-mark">{padIndex(index)}</span>
      <div>
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            {project.title}
          </h2>
          <span className="folio">{project.status}</span>
        </div>
        <p className="mt-2 max-w-xl text-sm leading-6 text-ink-soft md:text-base">
          {project.summary}
        </p>
        <p className="folio mt-3 normal-case tracking-[0.08em]">
          {project.stack.slice(0, 4).join(" · ")}
        </p>
      </div>
      <div className="flex items-center justify-between gap-6 md:flex-col md:items-end">
        <span className="folio">{project.year}</span>
        <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}
