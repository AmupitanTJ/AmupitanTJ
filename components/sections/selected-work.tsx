import Link from "next/link";
import { DrawRule, Reveal } from "@/components/motion/reveal";
import { WorkIndex } from "@/components/work/work-index";
import type { Project } from "@/types";

export function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <section aria-labelledby="selected-work-title" className="pt-6">
      <DrawRule />
      <Reveal className="flex items-end justify-between gap-6 pt-10">
        <div>
          <p className="folio">02 / Selected work</p>
          <h2
            id="selected-work-title"
            className="font-display mt-3 text-4xl tracking-tight md:text-5xl"
          >
            On the desk
          </h2>
        </div>
        <Link href="/work" className="folio hover:text-mark">
          Full register →
        </Link>
      </Reveal>
      <div className="mt-8">
        <WorkIndex projects={projects} />
      </div>
    </section>
  );
}
