import type { AboutContent } from "@/types";

export const about: AboutContent = {
  title: "About",
  intro: [
    "I am a frontend developer based in Nigeria. I care about interfaces that stay clear under real use: small screens, slow connections, and the next person who has to change the code.",
    "Most of my public work is self-directed. I use those studies to practice layout, component structure, and state in React. This site is the first piece I am treating as a production surface rather than a sketch.",
    "I am not listing titles I do not hold, clients I have not shipped for, or numbers I cannot stand behind. If a project is a study, it is labeled as one.",
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
  skills: [
    {
      heading: "Interface",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
    },
    {
      heading: "State and style",
      items: ["Redux Toolkit", "Tailwind CSS", "Framer Motion"],
    },
    {
      heading: "Practice",
      items: ["Vite", "Git", "ESLint", "Prettier", "Vitest", "Playwright"],
    },
  ],
  now: "Building this portfolio, revising older React studies, and getting more comfortable with typed Next.js application structure.",
};
