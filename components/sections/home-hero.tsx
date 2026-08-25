import Image from "next/image";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { NavLink } from "@/components/layout/nav-link";
import { SectionReveal } from "@/components/section-reveal";
import { home } from "@/content/home";

export function HomeHero() {
  return (
    <Container
      as="section"
      className="pt-8 pb-14 sm:pt-14 sm:pb-20"
      aria-labelledby="home-title"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.72fr] lg:gap-16">
        <SectionReveal>
          <p className="meta text-muted-foreground flex items-center gap-3 uppercase">
            <span className="bg-foreground h-px w-8" aria-hidden="true" />
            {home.eyebrow}
          </p>
          <h1
            id="home-title"
            className="display text-foreground mt-6 max-w-4xl text-[3.7rem] sm:text-7xl md:text-8xl lg:text-[7.25rem]"
          >
            {home.heading}
          </h1>
          <p className="text-muted-foreground mt-7 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
            {home.lede}
          </p>
          <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild className="w-full sm:w-auto">
              <NavLink href={home.primaryCta.href}>
                {home.primaryCta.label}
              </NavLink>
            </Button>
            <Button asChild variant="secondary" className="w-full sm:w-auto">
              <NavLink href={home.secondaryCta.href}>
                {home.secondaryCta.label}
              </NavLink>
            </Button>
          </div>
          <p className="meta text-muted-foreground mt-7 uppercase">
            {home.availability}
          </p>
        </SectionReveal>

        <SectionReveal
          delay={0.08}
          className="relative mx-auto w-full max-w-md lg:mx-0"
        >
          <div className="border-foreground bg-surface-raised relative aspect-[4/5] overflow-hidden border">
            <Image
              src="/images/tosin-portrait-monochrome.webp"
              alt="Tosin Joseph Amupitan in a monochrome studio portrait"
              fill
              priority
              sizes="(min-width: 1024px) 34vw, (min-width: 640px) 60vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="bg-foreground text-background absolute -right-2 -bottom-3 px-4 py-2 sm:-right-4">
            <span className="meta uppercase">Web developer · Lagos</span>
          </div>
        </SectionReveal>
      </div>
    </Container>
  );
}
