import type { AboutContent } from "@/types";
import { skills } from "@/content/skills";

export const about: AboutContent = {
  title: "About",
  intro: [
    "I am a frontend developer based in Nigeria. I care about interfaces that stay clear under real use: small screens, slow connections, and the next person who has to change the code.",
    "My public work combines self-directed product studies with production-minded engineering. I use each project to sharpen layout, component architecture, state management, accessibility, and the details that make an interface feel dependable.",
    "I value direct communication, readable code, and honest case studies that make the work—and my role in it—easy to understand.",
  ],
  approach: [
    {
      title: "Structure before decoration",
      body: "Hierarchy, spacing, and reading order come first. Color and motion arrive after the page already makes sense in grayscale.",
    },
    {
      title: "Responsive as a default",
      body: "Layouts are designed from a narrow viewport up. Breakpoints should recompose the page, not just shrink it.",
    },
    {
      title: "Readable TypeScript",
      body: "Types live next to the data they describe. Content is typed, helpers are small, and the app should fail loudly in development rather than silently in production.",
    },
    {
      title: "Motion with a job",
      body: "Animation is for orientation: revealing a section, confirming a state, or keeping a relationship between two elements. It should respect reduced-motion preferences.",
    },
  ],
  skills,
  now: "Building this portfolio, revising older React studies, and getting more comfortable with typed Next.js application structure.",
};
