import { HomeAbout } from "@/components/sections/home-about";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About",
  description:
    "About Tosin Joseph Amupitan, a React and TypeScript web developer based in Abuja, Nigeria.",
  path: "/about",
});

export default function AboutPage() {
  return <HomeAbout standalone />;
}
