import Link from "next/link";
import { DrawRule, Reveal } from "@/components/motion/reveal";
import { site } from "@/content/site";

export function CurrentFocus() {
  return (
    <section aria-labelledby="now-title" className="pt-4">
      <DrawRule />
      <div className="grid gap-10 pt-10 lg:grid-cols-2">
        <Reveal>
          <p className="folio">03 / Now</p>
          <h2
            id="now-title"
            className="font-display mt-3 text-4xl tracking-tight md:text-5xl"
          >
            Current focus
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
            {site.focus}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="folio">04 / Desk</p>
          <h2 className="font-display mt-3 text-4xl tracking-tight md:text-5xl">
            Write
          </h2>
          <p className="mt-5 max-w-md text-base leading-7 text-ink-soft">
            For a frontend conversation, use the contact page or reach me on
            GitHub or LinkedIn. I do not list invented availability metrics
            here.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex border border-ink px-4 py-2 text-sm tracking-[0.12em] uppercase transition-colors hover:border-mark hover:bg-mark hover:text-paper-bright"
          >
            Open the desk
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
