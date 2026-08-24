import { Container } from "@/components/container";
import { PageIntro } from "@/components/sections/page-intro";
import { WorkIndex } from "@/components/work/work-index";
import { createMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected frontend work and interface studies by Tosin Joseph. Studies are labeled as studies.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Container className="py-section">
      <PageIntro code="02" kicker="Projects" title="Selected work">
        Product studies and production-minded builds focused on responsive
        layout, accessible interaction, and maintainable frontend code.
      </PageIntro>
      <div className="mt-12">
        <WorkIndex projects={projects} />
      </div>
    </Container>
  );
}
