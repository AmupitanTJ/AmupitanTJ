import { PersonJsonLd } from "@/components/layout/json-ld";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeContact } from "@/components/sections/home-contact";
import { HomeExperience } from "@/components/sections/home-experience";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeSkills } from "@/components/sections/home-skills";
import { HomeStack } from "@/components/sections/home-stack";
import { SelectedWork } from "@/components/sections/selected-work";
import { getExperience } from "@/lib/experience";
import { getFeaturedProjects } from "@/lib/projects";

export default function HomePage() {
  const featured = getFeaturedProjects();
  const roles = getExperience();

  return (
    <>
      <PersonJsonLd />
      <HomeHero />
      <HomeStack />
      <SelectedWork projects={featured} />
      <HomeAbout />
      <HomeSkills />
      <HomeExperience roles={roles} />
      <HomeContact />
    </>
  );
}
