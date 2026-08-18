import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { site } from "@/content/site";

export function HomeHero() {
  return (
    <section aria-labelledby="home-title" className="pb-6">
      <Reveal>
        <div className="flex items-start justify-between gap-6">
          <p className="folio">01 / Index</p>
          <p className="folio hidden sm:block">Folio {new Date().getFullYear()}</p>
        </div>
      </Reveal>

      <RevealGroup className="mt-8 grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
        <RevealItem>
          <h1
            id="home-title"
            className="font-display text-[clamp(4.4rem,16vw,10.5rem)] leading-[0.78] font-medium tracking-[-0.04em]"
          >
            <span className="block">Tosin</span>
            <span className="block italic">Joseph</span>
          </h1>
        </RevealItem>
        <RevealItem className="space-y-3 pb-2">
          <p className="folio">{site.role}</p>
          <p className="text-sm leading-6 text-ink-soft">
            React · TypeScript · Tailwind CSS
          </p>
          <p className="folio">{site.location}</p>
        </RevealItem>
      </RevealGroup>

      <Reveal className="mt-10 max-w-2xl" delay={0.12}>
        <p className="font-display text-2xl leading-snug text-ink sm:text-3xl">
          {site.headline}
        </p>
        <p className="mt-5 text-base leading-7 text-ink-soft sm:text-lg">
          {site.lede}
        </p>
      </Reveal>
    </section>
  );
}
