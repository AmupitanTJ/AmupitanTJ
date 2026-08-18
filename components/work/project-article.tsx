import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { ProjectPlate } from "@/components/work/project-plate";
import { Reveal } from "@/components/motion/reveal";
import type { Project } from "@/types";

type ProjectArticleProps = {
  project: Project;
  previous?: Project;
  next?: Project;
};

export function ProjectArticle({
  project,
  previous,
  next,
}: ProjectArticleProps) {
  return (
    <article>
      <Reveal>
        <p className="folio">
          02 / Work / {project.status}
        </p>
        <h1 className="font-display mt-4 max-w-4xl text-5xl leading-[0.92] font-medium tracking-tight sm:text-6xl md:text-7xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
          {project.description}
        </p>
      </Reveal>

      <Reveal className="mt-10" delay={0.08}>
        <ProjectPlate slug={project.slug} />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-[16rem_1fr]">
        <aside className="space-y-6">
          <Meta label="Year" value={project.year} />
          <Meta label="Role" value={project.role} />
          <Meta label="Status" value={project.status} />
          <div>
            <p className="folio">Stack</p>
            <ul className="mt-2 space-y-1 text-sm">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          {project.repo ? (
            <a
              href={project.repo.href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-mark inline-flex items-center gap-1 text-sm"
            >
              {project.repo.label}
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </aside>

        <div className="space-y-10">
          {project.sections.map((section) => (
            <Reveal key={section.heading}>
              <h2 className="font-display text-3xl tracking-tight">
                {section.heading}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-ink-soft">
                {section.body}
              </p>
            </Reveal>
          ))}
          {project.notes ? (
            <p className="max-w-2xl border-l-2 border-mark pl-4 text-sm leading-6 text-ink-soft">
              {project.notes}
            </p>
          ) : null}
        </div>
      </div>

      <nav
        aria-label="Adjacent work"
        className="border-rule mt-20 grid gap-6 border-t pt-8 sm:grid-cols-2"
      >
        {previous ? (
          <Link href={`/work/${previous.slug}`} className="group">
            <p className="folio">Previous</p>
            <p className="font-display mt-2 text-2xl group-hover:text-mark">
              {previous.title}
            </p>
          </Link>
        ) : (
          <Link href="/work" className="group inline-flex items-center gap-2">
            <ArrowLeft className="size-4" />
            <span>Back to work</span>
          </Link>
        )}
        {next ? (
          <Link href={`/work/${next.slug}`} className="group sm:text-right">
            <p className="folio">Next</p>
            <p className="font-display mt-2 text-2xl group-hover:text-mark">
              {next.title}
            </p>
          </Link>
        ) : null}
      </nav>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="folio">{label}</p>
      <p className="mt-1 text-sm capitalize">{value}</p>
    </div>
  );
}
