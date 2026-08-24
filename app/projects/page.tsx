import { Container } from "@/components/container";
import { PageIntro } from "@/components/sections/page-intro";
import { WorkIndex } from "@/components/work/work-index";
import { createMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Web development projects by Tosin Joseph Amupitan, including VantraClip, TROVE Calc, and WDD 130 coursework.",
  path: "/projects",
});

export default function ProjectsPage() {
  const projects = getProjects();

  return (
    <Container className="py-section">
      <PageIntro code="01" kicker="Projects" title="My work">
        Public projects that show my progress from HTML and CSS foundations to
        JavaScript applications and full-stack development.
      </PageIntro>
      <div className="mt-12">
        <WorkIndex projects={projects} />
      </div>
    </Container>
  );
}
