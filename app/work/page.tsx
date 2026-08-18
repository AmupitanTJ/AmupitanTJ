import { RevealGroup } from "@/components/motion/reveal";
import { PageIntro } from "@/components/sections/page-intro";
import { WorkIndex } from "@/components/work/work-index";
import { createMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Work",
  description:
    "Selected frontend work and interface studies by Tosin Joseph. Studies are labeled as studies.",
  path: "/work",
});

export default function WorkPage() {
  const projects = getProjects();

  return (
    <>
      <PageIntro code="02" kicker="Work" title="Register">
        Public work only. Production pieces and personal studies share a
        register; the status label tells you which is which.
      </PageIntro>
      <RevealGroup className="mt-12">
        <WorkIndex projects={projects} />
      </RevealGroup>
    </>
  );
}
