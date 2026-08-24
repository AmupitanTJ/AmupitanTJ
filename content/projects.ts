import { todo } from "@/lib/todo";
import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "vantraclip",
    title: "VantraClip",
    shortDescription:
      "A React interface study for capturing and organising clips.",
    longDescription:
      "VantraClip is a self-directed interface study focused on capturing and organising clips. It remains in the private workbench until the implementation and case study are ready to share.",
    year: "2026",
    role: "Frontend",
    status: "study",
    featured: false,
    stack: ["React", "TypeScript", "Tailwind CSS"],
    coverImage: {
      src: "/projects/vantraclip.svg",
      alt: "VantraClip cover",
    },
    gallery: [],
    liveUrl: null,
    githubUrl: null,
    challenge: todo("describe the interface problem VantraClip is solving."),
    solution: todo(
      "describe the React/TypeScript approach used in VantraClip.",
    ),
    keyDecisions: [
      todo(
        "add the real technical decisions once the public repo or write-up exists.",
      ),
    ],
    outcomes: [
      todo(
        "add outcomes that can be pointed to — a repo, a demo, or a page on this site.",
      ),
    ],
    nextSteps: [
      todo("add a cover image captured from the running interface."),
      todo("publish GitHub and live URLs only when they are public."),
    ],
  },
  {
    slug: "trove-calc",
    title: "TROVE Calc",
    shortDescription:
      "A product-shaped calculator interface built as a React study.",
    longDescription:
      "TROVE Calc is a self-directed calculator interface study focused on clear inputs, outputs, and product-style interaction.",
    year: "2026",
    role: "Frontend",
    status: "study",
    featured: false,
    stack: ["React", "TypeScript", "JavaScript"],
    coverImage: {
      src: "/projects/trove-calc.svg",
      alt: "TROVE Calc cover",
    },
    gallery: [],
    liveUrl: null,
    githubUrl: null,
    challenge: todo(
      "describe the calculation or interface problem TROVE Calc addresses.",
    ),
    solution: todo("describe how the React interface is structured."),
    keyDecisions: [
      todo(
        "add the real technical decisions once the public repo or write-up exists.",
      ),
    ],
    outcomes: [
      todo(
        "add outcomes that can be pointed to — a repo, a demo, or a page on this site.",
      ),
    ],
    nextSteps: [
      todo("add a cover image captured from the running interface."),
      todo("publish GitHub and live URLs only when they are public."),
    ],
  },
  {
    slug: "registration",
    title: "This site",
    shortDescription:
      "A production Next.js portfolio with a typed content model and a dark design system.",
    longDescription:
      "The public record of my frontend work. Built as a typed, tested Next.js application with content separated from presentation so copy and projects can change without rewriting the interface.",
    year: "2026",
    role: "Design and engineering",
    status: "production",
    featured: true,
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "shadcn/ui",
    ],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    githubUrl: null,
    challenge:
      "I needed a durable public surface for selected frontend work. The previous sketches did not separate content from UI, and I would not invent clients, testimonials, or traffic numbers to fill the gaps.",
    solution:
      "A Next.js App Router site that reads from typed content modules. Pages, metadata, and JSON-LD consume the same records. Studies are labeled as studies. The visual system is a dark navy field, off-white type, and one electric-blue accent.",
    keyDecisions: [
      "Keep everyday copy in content/ instead of inside components.",
      "Label each project production or study so the status is part of the record.",
      "Refuse testimonials, logos, and metrics that cannot be pointed at.",
    ],
    outcomes: [
      "A public, typed Next.js site I can keep adding real work to.",
      todo("add a production URL and repository link when they are public."),
    ],
    nextSteps: [
      todo("add a cover image and gallery stills."),
      todo("publish the GitHub URL for this repository."),
      "Add production pieces only when they exist.",
    ],
  },
  {
    slug: "newecommerce",
    title: "Moreecom",
    shortDescription:
      "A React commerce interface using Redux Toolkit for cart and catalog state.",
    longDescription:
      "A personal commerce UI study. The repository is public and uses React, React Router, Redux Toolkit, Tailwind CSS, and Swiper. It is a practice surface for product listing, navigation, and client state — not a live store and not a client commission.",
    year: "2025",
    role: "Interface study",
    status: "study",
    featured: true,
    stack: ["React", "Redux Toolkit", "React Router", "Tailwind CSS", "Vite"],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    githubUrl: "https://github.com/Tosinjoseph/Newecommerce",
    challenge:
      "I wanted to practice catalog and cart flows in a multi-route React app without pretending it was a launched store.",
    solution:
      "A Vite React app with React Router for pages, Redux Toolkit for cart and catalog state, Tailwind for layout, and Swiper for carousels. The npm package name in the repo is moreecom.",
    keyDecisions: [
      "Keep it a study: no claim about sales, users, or a brand.",
      "Use Redux Toolkit so cart and catalog state stay explicit.",
    ],
    outcomes: [
      "A public repository that shows how I wire client state into a product list and cart.",
      todo("do not add traffic, conversion, or revenue numbers."),
    ],
    nextSteps: [
      todo("add a cover image from the running interface."),
      todo("add a live URL only if a public demo is actually hosted."),
    ],
  },
  {
    slug: "magazine",
    title: "Magazine study",
    shortDescription: "An editorial layout exercise in React and Vite.",
    longDescription:
      "A magazine-style website study focused on hierarchy, columns, and how a content-heavy page reads. Built as a personal React + Vite project. It is a layout study, not a published magazine.",
    year: "2025",
    role: "Interface study",
    status: "study",
    featured: false,
    stack: ["React", "JavaScript", "Vite"],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    githubUrl: "https://github.com/Tosinjoseph/magazine-website",
    challenge:
      "I wanted to practice dense, typographic layout — strong headlines, supporting decks, and stacked stories — instead of a marketing landing page.",
    solution:
      "A public React + Vite repository used as a layout exercise. Hierarchy and page rhythm were the point of the work.",
    keyDecisions: [
      "Treat it as a study of reading order, not as a magazine product.",
    ],
    outcomes: [
      "Practice that carries into the spacing and type scale on this site.",
      todo("add screenshots only when captured from the running study."),
    ],
    nextSteps: [
      todo("add a cover image."),
      todo("add a live URL only if a public demo is actually hosted."),
    ],
  },
  {
    slug: "estatel",
    title: "EstateL",
    shortDescription:
      "An early real-estate listing interface in React and Tailwind CSS v4.",
    longDescription:
      "A property-listing study started in 2026. The public repo is an early React + Vite + Tailwind v4 surface with a header and navigation for an estate listing page. It is unfinished work and is listed as such.",
    year: "2026",
    role: "Interface study",
    status: "in-progress",
    featured: true,
    stack: ["React", "Tailwind CSS", "Vite"],
    coverImage: {
      src: "/projects/estatel.svg",
      alt: "EstateL cover",
    },
    gallery: [],
    liveUrl: null,
    githubUrl: "https://github.com/Tosinjoseph/EstateL",
    challenge:
      "Start a listing interface without presenting an unfinished file as a complete product.",
    solution:
      "Block in brand mark, navigation, and a header frame for listings in a Tailwind v4 Vite project before adding property data and filters.",
    keyDecisions: [
      "Leave it marked as a study and early-stage.",
      "Source of record is the public GitHub repository.",
    ],
    outcomes: [
      "An honest, unfinished listing chrome I can keep building.",
      todo(
        "do not describe filters, listings, or results that are not in the repo.",
      ),
    ],
    nextSteps: [
      todo("add a cover image when the listing frame is worth photographing."),
      "Continue the listing body and filters in the public repo.",
    ],
  },
  {
    slug: "clipboard",
    title: "Clipboard interface",
    shortDescription: "A product-page interface study for a clipboard utility.",
    longDescription:
      "A public interface study for a clipboard product page. Built to practice marketing-page composition: hero, supporting sections, and a clear download or action path. It is a UI study, not a shipped product.",
    year: "2025",
    role: "Interface study",
    status: "study",
    featured: false,
    stack: ["JavaScript", "HTML", "CSS"],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    githubUrl: "https://github.com/Tosinjoseph/A-clipboard-website-interface",
    challenge:
      "Practice how a product page introduces a tool, explains it, and asks for an action — without a framework hiding the page.",
    solution:
      "A single-purpose landing interface in HTML, CSS, and JavaScript, sequenced as hero, supporting sections, and an action.",
    keyDecisions: [
      "Keep the study in plain HTML, CSS, and JavaScript.",
      "Do not present it as a shipped clipboard product.",
    ],
    outcomes: [
      "A public study of section sequencing and visual emphasis.",
      todo("do not add download or user counts."),
    ],
    nextSteps: [
      todo("add a cover image."),
      todo("add a live URL only if a public demo is actually hosted."),
    ],
  },
];
