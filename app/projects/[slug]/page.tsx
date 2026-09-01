import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/projects/project-article";
import { createMetadata } from "@/lib/metadata";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

type ProjectSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectSlugPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Project not found",
      description: "That project is not in the public index.",
      path: "/projects",
    });
  }

  return createMetadata({
    title: project.title,
    description: project.shortDescription,
    path: `/projects/${project.slug}`,
    image:
      (project.gallery[0] ?? project.coverImage)
        ? {
            url: (project.gallery[0] ?? project.coverImage)!.src,
            alt: (project.gallery[0] ?? project.coverImage)!.alt,
          }
        : undefined,
  });
}

export default async function ProjectSlugPage({
  params,
}: ProjectSlugPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return <ProjectArticle project={project} previous={previous} next={next} />;
}
