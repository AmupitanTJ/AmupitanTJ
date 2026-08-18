import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "registration",
    title: "This site",
    summary: "A production Next.js portfolio treated as a typesetting desk, not a template.",
    description:
      "The public record of my frontend work. Built as a typed, tested Next.js application with content separated from presentation so copy and projects can change without rewriting the interface.",
    year: "2026",
    role: "Design and engineering",
    status: "production",
    featured: true,
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    sections: [
      {
        heading: "What it is",
        body: "A small editorial site with four surfaces: an index, a work register, an about page, and a contact desk. The visual system borrows from print registration marks and compositor sheets instead of the usual centered-hero developer template.",
      },
      {
        heading: "How it is built",
        body: "App Router pages read from typed content modules. Components are grouped by layout, section, and work. Motion is isolated behind client components and honors reduced-motion. shadcn/ui supplies a few primitives; the rest of the chrome is custom.",
      },
      {
        heading: "What I was practicing",
        body: "Strict TypeScript, content modeling, accessible navigation, and a design that can survive being filled with real work later. No invented metrics, testimonials, or client lists.",
      },
    ],
    notes:
      "Edit copy in content/. Add a project by appending to content/projects.ts.",
  },
  {
    slug: "newecommerce",
    title: "Moreecom",
    summary: "A React commerce interface using Redux Toolkit for cart and catalog state.",
    description:
      "A personal commerce UI study. The repository is public and uses React, React Router, Redux Toolkit, Tailwind CSS, and Swiper. It is a practice surface for product listing, navigation, and client state — not a live store and not a client commission.",
    year: "2025",
    role: "Interface study",
    status: "study",
    featured: true,
    stack: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "Vite"],
    repo: {
      label: "GitHub",
      href: "https://github.com/Tosinjoseph/Newecommerce",
    },
    sections: [
      {
        heading: "What it is",
        body: "An ecommerce front end I built to practice catalog and cart flows. The npm package name in the repo is moreecom. There is no claim here about sales, users, or a launched brand.",
      },
      {
        heading: "What I was practicing",
        body: "Wiring Redux Toolkit into a multi-route React app, composing product UI with Tailwind, and handling carousel and list layouts with Swiper.",
      },
    ],
  },
  {
    slug: "magazine",
    title: "Magazine study",
    summary: "An editorial layout exercise in React and Vite.",
    description:
      "A magazine-style website study focused on hierarchy, columns, and how a content-heavy page reads. Built as a personal React + Vite project. It is a layout study, not a published magazine.",
    year: "2025",
    role: "Interface study",
    status: "study",
    featured: true,
    stack: ["React", "JavaScript", "Vite"],
    repo: {
      label: "GitHub",
      href: "https://github.com/Tosinjoseph/magazine-website",
    },
    sections: [
      {
        heading: "What it is",
        body: "A public repository where I practiced the kind of dense, typographic layout magazines use: strong headlines, supporting decks, and stacked stories rather than a marketing landing page.",
      },
      {
        heading: "What I was practicing",
        body: "Visual hierarchy and page rhythm in React. This later informed the compositor treatment on the portfolio you are reading now.",
      },
    ],
  },
  {
    slug: "estatel",
    title: "EstateL",
    summary: "An early real-estate listing interface in React and Tailwind CSS v4.",
    description:
      "A property-listing study started in 2026. The public repo is an early React + Vite + Tailwind v4 surface with a header and navigation for an estate listing page. It is unfinished work and is listed as such.",
    year: "2026",
    role: "Interface study",
    status: "study",
    featured: false,
    stack: ["React", "Tailwind CSS", "Vite"],
    repo: {
      label: "GitHub",
      href: "https://github.com/Tosinjoseph/EstateL",
    },
    sections: [
      {
        heading: "What it is",
        body: "The beginning of a real-estate interface: brand mark, navigation, and a header frame for listings. I am not presenting it as a complete product.",
      },
      {
        heading: "What I was practicing",
        body: "Setting up a Tailwind v4 Vite project and blocking in the chrome for a listing site before adding property data and filters.",
      },
    ],
    notes: "Early-stage. Source of record is the public GitHub repository.",
  },
  {
    slug: "clipboard",
    title: "Clipboard interface",
    summary: "A product-page interface study for a clipboard utility.",
    description:
      "A public interface study for a clipboard product page. Built to practice marketing-page composition: hero, supporting sections, and a clear download or action path. It is a UI study, not a shipped product.",
    year: "2025",
    role: "Interface study",
    status: "study",
    featured: false,
    stack: ["JavaScript", "HTML", "CSS"],
    repo: {
      label: "GitHub",
      href: "https://github.com/Tosinjoseph/A-clipboard-website-interface",
    },
    sections: [
      {
        heading: "What it is",
        body: "A single-purpose landing interface I built while studying how product pages introduce a tool, explain it, and ask for an action.",
      },
      {
        heading: "What I was practicing",
        body: "Section sequencing and visual emphasis without hiding the page behind a framework.",
      },
    ],
  },
];
