import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { NavLink } from "@/components/layout/nav-link";
import { SectionReveal } from "@/components/section-reveal";
import { home } from "@/content/home";

export function HomeHero() {
  return (
    <Container
      as="section"
      className="pt-12 pb-10 sm:pt-20 sm:pb-12"
      aria-labelledby="home-title"
    >
      <SectionReveal>
        <p className="meta text-muted-foreground">{home.eyebrow}</p>
        <h1
          id="home-title"
          className="display text-foreground mt-4 max-w-3xl text-[1.85rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {home.heading}
        </h1>
        <p className="text-muted-foreground mt-6 max-w-xl text-base leading-7 sm:text-lg sm:leading-8">
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
        <p className="meta text-muted-foreground mt-6">{home.availability}</p>
      </SectionReveal>
    </Container>
  );
}
