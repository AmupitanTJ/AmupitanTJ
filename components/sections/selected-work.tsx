import { Container } from "@/components/container";
import { WorkIndex } from "@/components/work/work-index";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import type { Project } from "@/types";

export function SelectedWork({
  projects,
  standalone = false,
}: {
  projects: Project[];
  standalone?: boolean;
}) {
  return (
    <Container
      as="section"
      id="work"
      tabIndex={-1}
      className="py-section scroll-mt-20 focus:outline-none"
      aria-labelledby="selected-work-title"
    >
      <SectionReveal>
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I have built"
          as={standalone ? "h1" : "h2"}
          id="selected-work-title"
          description="Selected products shaped through responsive interface design, reusable React systems, and practical engineering decisions."
        />
      </SectionReveal>
      <div className="mt-10">
        <WorkIndex projects={projects} />
      </div>
    </Container>
  );
}
