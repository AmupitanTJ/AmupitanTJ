import { notFound } from "next/navigation";
import { ProjectArticle } from "@/components/work/project-article";
import { createMetadata } from "@/lib/metadata";
import {
  getAdjacentProjects,
  getProjectBySlug,
  getProjectSlugs,
} from "@/lib/projects";

type WorkSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: WorkSlugPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return createMetadata({
      title: "Off register",
      description: "That work plate is not in the register.",
      path: "/work",
    });
  }

  return createMetadata({
    title: project.title,
    description: project.summary,
    path: `/work/${project.slug}`,
  });
}

export default async function WorkSlugPage({ params }: WorkSlugPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { previous, next } = getAdjacentProjects(project.slug);

  return (
    <ProjectArticle project={project} previous={previous} next={next} />
  );
}
