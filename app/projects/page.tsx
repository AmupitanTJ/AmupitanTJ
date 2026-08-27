import { SelectedWork } from "@/components/sections/selected-work";
import { createMetadata } from "@/lib/metadata";
import { getProjects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Web products by Tosin Joseph Amupitan, including Clarita, The Judge, and VantraClip.",
  path: "/projects",
});

export default function ProjectsPage() {
  return <SelectedWork projects={getProjects()} standalone />;
}
