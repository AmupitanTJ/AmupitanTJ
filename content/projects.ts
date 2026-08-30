import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "clarita",
    title: "Clarita",
    shortDescription:
      "A completed React product shaped around a clear, responsive user experience.",
    longDescription:
      "Clarita is a completed web product built with React and TypeScript. The work focused on translating a product direction into a polished responsive interface, reusable components, predictable states, and a coherent end-to-end experience.",
    year: "2026",
    role: "Product engineering",
    status: "production",
    featured: true,
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    coverImage: {
      src: "/projects/clarita-app-icon.svg",
      alt: "Clarita app icon showing an open book with a small spark",
    },
    gallery: [],
    liveUrl: "https://clarita-pi.vercel.app/",
    githubUrl: "https://github.com/AmupitanTJ/clarita",
    challenge:
      "Turn a product concept into a dependable interface that stays clear across screen sizes, interaction states, and repeated user workflows.",
    solution:
      "I structured the product around reusable React components and typed TypeScript models, then used responsive layout rules and consistent interface patterns to keep the experience focused and maintainable.",
    keyDecisions: [
      "Use TypeScript to make component contracts and product states explicit.",
      "Build reusable React primitives instead of repeating page-level interface logic.",
      "Treat responsive behaviour and accessible feedback as core product requirements.",
    ],
    outcomes: [
      "Delivered a complete, responsive product experience.",
      "Established a component structure that supports consistent iteration and maintenance.",
    ],
    nextSteps: [],
  },
  {
    slug: "the-judge",
    title: "The Judge",
    shortDescription:
      "A source-led Nigerian legal research product designed for clear, authoritative answers.",
    longDescription:
      "The Judge is a completed legal research product for navigating Nigerian law. It brings questions, source-backed answers, research history, documents, matters, and a reference library into one focused workspace.",
    year: "2026",
    role: "Frontend and product engineering",
    status: "production",
    featured: true,
    stack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    coverImage: {
      src: "/projects/the-judge-app-icon.png",
      alt: "The Judge app icon showing white barrister tabs on black fabric",
    },
    gallery: [],
    liveUrl: null,
    githubUrl: "https://github.com/AmupitanTJ/the-judge",
    challenge:
      "Present a dense legal research workflow in a way that feels calm, direct, and trustworthy while keeping source material close to every conclusion.",
    solution:
      "I developed a structured React interface that separates asking, researching, reviewing sources, and organising documents without losing context. TypeScript keeps the product states and reusable interface contracts explicit.",
    keyDecisions: [
      "Prioritise source visibility and readable hierarchy throughout the research experience.",
      "Separate research, library, documents, and matters into distinct but connected workflows.",
      "Use restrained interaction patterns to support focus in an information-dense product.",
    ],
    outcomes: [
      "Delivered a cohesive legal research workspace with a clear question-to-source flow.",
      "Created a reusable interface system for research, documents, and matter organisation.",
    ],
    nextSteps: [],
  },
  {
    slug: "vantraclip",
    title: "VantraClip",
    shortDescription:
      "An AI-assisted platform for turning long videos into captioned, social-ready clips.",
    longDescription:
      "VantraClip is an AI-assisted video clipping platform in active development. It processes long videos into shorter clips with highlight detection, captions, face-aware reframing, branding, and multiple export formats.",
    year: "2026",
    role: "Full-stack product development",
    status: "in-progress",
    featured: true,
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "FFmpeg",
    ],
    coverImage: {
      src: "/projects/vantraclip-logo.png",
      alt: "VantraClip green logo mark",
    },
    gallery: [],
    liveUrl: "https://vantraclip.com/",
    githubUrl: "https://github.com/AmupitanTJ/Vantraclip",
    challenge:
      "Coordinate a long-running media workflow that can accept a source video, identify useful moments, create readable captions, reframe footage, and export clips without blocking the main application.",
    solution:
      "The product combines a React and TypeScript client with Express services, PostgreSQL, S3-compatible storage, and FFmpeg processing. API and worker responsibilities remain separable while sharing the same data and storage layer.",
    keyDecisions: [
      "Keep API and processing-worker roles separable for long-running video jobs.",
      "Snap clip boundaries to complete spoken thoughts instead of forcing fixed cuts.",
      "Use signed browser uploads so storage credentials remain server-side.",
    ],
    outcomes: [
      "Built the core workflow for uploads, transcription, highlight selection, captions, reframing, and multi-format exports.",
      "Established the full-stack foundation for authentication, projects, storage, processing jobs, and delivery.",
    ],
    nextSteps: [
      "Continue refining processing reliability, output quality, and the end-to-end product experience.",
    ],
  },
];
