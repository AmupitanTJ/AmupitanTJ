import { Container } from "@/components/container";
import { PageIntro } from "@/components/sections/page-intro";
import { WorkIndex } from "@/components/work/work-index";
import { createMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Web products by Tosin Joseph Amupitan, including Clarita, The Judge, and VantraClip.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Container className="py-section">
      <PageIntro code="01" kicker="Projects" title="My work">
        Selected product work built around React, TypeScript, thoughtful
        interfaces, and dependable full-stack foundations.
      </PageIntro>
      <div className="mt-12">
        <WorkIndex projects={projects} />
      </div>
    </Container>
  );
}
