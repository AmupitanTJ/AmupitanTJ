import { PersonJsonLd } from "@/components/layout/json-ld";
import { CurrentFocus } from "@/components/sections/current-focus";
import { HomeHero } from "@/components/sections/home-hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <PersonJsonLd />
      <HomeHero />
      <SelectedWork projects={featured} />
      <CurrentFocus />
    </>
  );
}
