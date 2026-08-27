import { PersonJsonLd } from "@/components/layout/json-ld";
import { HomeAbout } from "@/components/sections/home-about";
import { HomeContact } from "@/components/sections/home-contact";
import { HomeExperience } from "@/components/sections/home-experience";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeStack } from "@/components/sections/home-stack";
import { SelectedWork } from "@/components/sections/selected-work";
import { getExperience } from "@/lib/experience";
import { getProjects } from "@/lib/projects";

export default function HomePage() {
  const projects = getProjects();
  const roles = getExperience();

  return (
    <>
      <PersonJsonLd />
      <HomeHero />
      <HomeStack />
      <SelectedWork projects={projects} />
      <HomeAbout />
      <HomeExperience roles={roles} />
      <HomeContact />
    </>
  );
}
