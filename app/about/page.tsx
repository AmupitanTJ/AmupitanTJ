import { DrawRule, Reveal } from "@/components/motion/reveal";
import { PageIntro } from "@/components/sections/page-intro";
import { about } from "@/content/about";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "Tosin Joseph is a frontend developer in Nigeria working with React, TypeScript, and Tailwind CSS.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro code="03" kicker="About" title={about.title}>
        {about.intro[0]}
      </PageIntro>

      <div className="mt-10 max-w-2xl space-y-5 text-base leading-7 text-ink-soft">
        {about.intro.slice(1).map((paragraph) => (
          <Reveal key={paragraph}>
            <p>{paragraph}</p>
          </Reveal>
        ))}
      </div>

      <DrawRule className="mt-16" />

      <section className="mt-10" aria-labelledby="approach-title">
        <Reveal>
          <p className="folio">Approach</p>
          <h2
            id="approach-title"
            className="font-display mt-3 text-4xl tracking-tight"
          >
            How the work is made
          </h2>
        </Reveal>
        <ol className="mt-10 grid gap-10 md:grid-cols-2">
          {about.approach.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <li>
                <p className="folio text-mark">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-2 text-2xl tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-ink-soft">
                  {item.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </section>

      <DrawRule className="mt-16" />

      <section className="mt-10" aria-labelledby="tools-title">
        <Reveal>
          <p className="folio">Tools</p>
          <h2
            id="tools-title"
            className="font-display mt-3 text-4xl tracking-tight"
          >
            In regular use
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {about.skills.map((group) => (
            <Reveal key={group.heading}>
              <h3 className="folio">{group.heading}</h3>
              <ul className="mt-3 space-y-1 text-sm">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <DrawRule className="mt-16" />

      <Reveal className="mt-10 max-w-xl">
        <p className="folio">Now</p>
        <p className="font-display mt-3 text-2xl leading-snug">{about.now}</p>
      </Reveal>
    </>
  );
}
