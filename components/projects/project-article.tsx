import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/container";
import { SectionReveal } from "@/components/section-reveal";
import { SocialLink } from "@/components/social-link";
import { Tag } from "@/components/tag";
import { statusLabel } from "@/lib/projects";
import { isTodo } from "@/lib/todo";
import type { MediaAsset, Project } from "@/types";

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
    <Container className="py-section">
      <article>
        <SectionReveal>
          <p className="meta text-muted-foreground">
            Projects / {statusLabel(project.status)}
          </p>
          <h1 className="display text-foreground mt-4 max-w-4xl text-5xl sm:text-6xl md:text-7xl">
            {project.title}
          </h1>
          <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-8">
            {project.longDescription}
          </p>
        </SectionReveal>

        <Cover image={project.coverImage} title={project.title} />

        <div className="mt-12 grid gap-12 lg:grid-cols-[14rem_1fr]">
          <aside className="space-y-6">
            <Meta label="Year" value={project.year} />
            <Meta label="Role" value={project.role} />
            <Meta label="Status" value={statusLabel(project.status)} />
            <div>
              <p className="meta text-muted-foreground">Stack</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </div>
            {project.liveUrl || project.githubUrl ? (
              <div className="border-border border-t pt-5">
                <p className="meta text-muted-foreground">Project links</p>
                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
                  {project.liveUrl ? (
                    <SocialLink href={project.liveUrl} label="Live site" />
                  ) : null}
                  {project.githubUrl ? (
                    <SocialLink href={project.githubUrl} label="GitHub" />
                  ) : null}
                </div>
              </div>
            ) : null}
          </aside>

          <div className="space-y-10">
            {!isTodo(project.challenge) ? (
              <CopyBlock heading="Challenge" body={project.challenge} />
            ) : null}
            {!isTodo(project.solution) ? (
              <CopyBlock heading="Solution" body={project.solution} />
            ) : null}
            <ListBlock
              heading="Key decisions"
              items={project.keyDecisions.filter((item) => !isTodo(item))}
            />
            <ListBlock
              heading="Outcomes"
              items={project.outcomes.filter((item) => !isTodo(item))}
            />
            <ListBlock
              heading="Next steps"
              items={project.nextSteps.filter((item) => !isTodo(item))}
            />
            <Gallery images={project.gallery} />
          </div>
        </div>

        <nav
          aria-label="Adjacent projects"
          className="border-border mt-20 grid gap-6 border-t pt-8 sm:grid-cols-2"
        >
          {previous ? (
            <Link
              href={`/projects/${previous.slug}`}
              className="group focus-visible:outline-signal focus-visible:outline-2 focus-visible:outline-offset-3"
            >
              <p className="meta text-muted-foreground">Previous</p>
              <p className="group-hover:text-signal mt-2 text-2xl tracking-tight">
                {previous.title}
              </p>
            </Link>
          ) : (
            <Link
              href="/projects"
              className="focus-visible:outline-signal inline-flex items-center gap-2 text-sm focus-visible:outline-2 focus-visible:outline-offset-3"
            >
              <ArrowLeft className="size-4" />
              <span>Back to projects</span>
            </Link>
          )}
          {next ? (
            <Link
              href={`/projects/${next.slug}`}
              className="group focus-visible:outline-signal focus-visible:outline-2 focus-visible:outline-offset-3 sm:text-right"
            >
              <p className="meta text-muted-foreground">Next</p>
              <p className="group-hover:text-signal mt-2 text-2xl tracking-tight">
                {next.title}
              </p>
            </Link>
          ) : null}
        </nav>
      </article>
    </Container>
  );
}

function Cover({ image, title }: { image: MediaAsset | null; title: string }) {
  if (!image) {
    return (
      <div className="border-border-strong mt-10 flex min-h-64 items-end overflow-hidden rounded-lg border bg-[linear-gradient(135deg,rgba(245,245,242,0.09),transparent_55%)] p-6 sm:min-h-80 sm:p-8">
        <p className="display text-foreground/80 max-w-[12ch] text-4xl sm:text-6xl">
          {title}
        </p>
      </div>
    );
  }

  return (
    <figure className="border-border-strong bg-surface-raised relative mt-10 aspect-[16/9] overflow-hidden rounded-lg border">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        unoptimized={image.src.endsWith(".svg")}
        sizes="(min-width: 1280px) 1152px, (min-width: 768px) 90vw, 100vw"
        className="object-contain p-10 sm:p-16"
      />
    </figure>
  );
}

function Gallery({ images }: { images: MediaAsset[] }) {
  if (images.length === 0) {
    return null;
  }

  return (
    <SectionReveal>
      <h2 className="text-foreground text-2xl tracking-tight md:text-3xl">
        Gallery
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <li
            key={image.src}
            className="border-border-strong bg-surface overflow-hidden rounded-lg border"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={800}
              height={600}
              className="h-auto w-full"
            />
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}

function CopyBlock({ heading, body }: { heading: string; body: string }) {
  return (
    <SectionReveal>
      <h2 className="text-foreground text-2xl tracking-tight md:text-3xl">
        {heading}
      </h2>
      <PendingText className="text-muted-foreground mt-3 max-w-2xl text-base leading-7">
        {body}
      </PendingText>
    </SectionReveal>
  );
}

function ListBlock({ heading, items }: { heading: string; items: string[] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <SectionReveal>
      <h2 className="text-foreground text-2xl tracking-tight md:text-3xl">
        {heading}
      </h2>
      <ul className="text-muted-foreground mt-3 max-w-2xl list-disc space-y-2 pl-5 text-base leading-7">
        {items.map((item) => (
          <li key={item}>
            <PendingText>{item}</PendingText>
          </li>
        ))}
      </ul>
    </SectionReveal>
  );
}

function PendingText({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return <p className={className}>{children}</p>;
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="meta text-muted-foreground">{label}</p>
      <p className="mt-1 text-sm">{value}</p>
    </div>
  );
}
