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
    gallery: [
      {
        src: "/projects/clarita-live.png",
        alt: "Clarita home screen with Scripture-focused prompts and navigation",
      },
    ],
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
      "An evidence-first Nigerian legal research workspace with verified authorities and persistent matters.",
    longDescription:
      "The Judge is an authenticated legal intelligence workspace for researching Nigerian law. It searches a verified legal corpus, links every supported answer to exact source passages, preserves research history and citations, and keeps practitioner matters tied to the signed-in user.",
    year: "2026",
    role: "Full-stack product engineering",
    status: "production",
    featured: true,
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Tailwind CSS",
    ],
    coverImage: {
      src: "/projects/the-judge-app-icon.png",
      alt: "The Judge app icon showing white scales of justice in a laurel wreath with a gold star",
    },
    gallery: [
      {
        src: "/projects/the-judge-live.png",
        alt: "The Judge legal research workspace with research, library, documents, and matters navigation",
      },
    ],
    liveUrl: "https://the-judge-flax.vercel.app/",
    githubUrl: "https://github.com/AmupitanTJ/the-judge",
    challenge:
      "Make Nigerian legal research useful without presenting unsupported conclusions, while keeping authorities, research history, and private matter work organised around each authenticated user.",
    solution:
      "I built a Next.js workspace with account-scoped API routes, a searchable verified corpus, evidence-ranked research responses, and persistent Neon PostgreSQL records for users, matters, research sessions, and citations. When verified coverage is insufficient, the product returns a clear limitation instead of inventing an answer.",
    keyDecisions: [
      "Require source-verified passages for every supported answer and expose the exact authority beside the response.",
      "Keep matters, saved research, and citations account-scoped through authenticated server routes.",
      "Use a typed relational model for users, legal documents, passages, matters, research sessions, and citations.",
    ],
    outcomes: [
      "Delivered working professional and plain-language research modes with explicit coverage limits.",
      "Added searchable authorities, persistent research history, citation trails, and private matter creation.",
    ],
    nextSteps: [
      "Expand the reviewed Nigerian legal corpus beyond the current federal constitutional coverage.",
      "Continue expanding authority coverage and refining collaborative research workflows.",
    ],
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
    liveUrl: null,
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
