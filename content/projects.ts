import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "vantraclip",
    title: "VantraClip",
    shortDescription:
      "A full-stack platform for turning long videos into captioned, social-ready clips.",
    longDescription:
      "VantraClip is an AI-assisted video clipping platform that processes long videos into shorter clips with highlight detection, captions, face-aware reframing, branding, and multiple export formats.",
    year: "2026",
    role: "Full-stack development",
    status: "in-progress",
    featured: true,
    stack: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "FFmpeg",
      "OpenAI API",
    ],
    coverImage: {
      src: "/projects/vantraclip-logo.png",
      alt: "VantraClip logo in black and purple on a white background",
    },
    gallery: [],
    liveUrl: "https://vantraclip.com/",
    githubUrl: "https://github.com/AmupitanTJ/Vantraclip",
    challenge:
      "Coordinate a long-running media workflow that can accept a source video, find useful moments, create readable captions, reframe footage, and export clips without blocking the main web application.",
    solution:
      "The project combines a React and Vite client with an Express API, PostgreSQL, S3-compatible storage, and FFmpeg processing. OpenAI supports transcription and highlight selection, while TensorFlow.js and BlazeFace support face-aware framing. API and worker roles can run separately while sharing the same database and storage.",
    keyDecisions: [
      "Keep API and processing-worker roles separable for long-running video jobs.",
      "Snap clip boundaries to complete spoken thoughts instead of forcing a fixed number of clips.",
      "Use signed browser uploads so storage credentials remain on the server.",
    ],
    outcomes: [
      "A public full-stack codebase and a live web application at vantraclip.com.",
      "A workflow covering projects, authentication, job controls, captions, branding, and multiple aspect ratios.",
    ],
    nextSteps: [],
  },
  {
    slug: "trove-calculator",
    title: "TROVE Calc",
    shortDescription:
      "An installable standard and scientific calculator built with vanilla web technologies.",
    longDescription:
      "TROVE Calc is a standard and scientific calculator Progressive Web App built with HTML, CSS, and vanilla JavaScript. It includes calculation history, memory controls, themes, keyboard support, and offline use.",
    year: "2026",
    role: "Frontend development",
    status: "production",
    featured: true,
    stack: ["HTML", "CSS", "JavaScript", "Progressive Web App"],
    coverImage: null,
    gallery: [],
    liveUrl: "https://trove-calc-ojatrx05d-amupitantjs-projects.vercel.app/",
    githubUrl: "https://github.com/AmupitanTJ/Trove-calculator",
    challenge:
      "Build one calculator that supports standard and scientific operations, works from the keyboard, and remains usable after the first visit without a network connection.",
    solution:
      "The application uses a custom expression engine instead of eval(), a service worker for offline caching, and a web manifest for installation. Its interface also provides memory controls, timestamped history, and light and dark themes.",
    keyDecisions: [
      "Use HTML, CSS, and vanilla JavaScript without a framework.",
      "Avoid eval() in the expression engine.",
      "Cache the core application files for offline use.",
    ],
    outcomes: [
      "A public calculator application that can be installed as a PWA.",
      "A public source repository with setup and offline-use documentation.",
    ],
    nextSteps: [],
  },
  {
    slug: "wdd130-coursework",
    title: "WDD 130 Coursework",
    shortDescription:
      "A repository of HTML and CSS coursework, including a multi-page rafting website.",
    longDescription:
      "A public collection of WDD 130 learning exercises. It contains a personal course homepage, weekly HTML and CSS exercises, and a multi-page rafting website with home, about, trips, and contact pages.",
    year: "2025",
    role: "Student frontend work",
    status: "study",
    featured: false,
    stack: ["HTML", "CSS"],
    coverImage: null,
    gallery: [],
    liveUrl: null,
    githubUrl: "https://github.com/AmupitanTJ/wdd130",
    challenge:
      "Practice the foundations of page structure, styling, layout, forms, tables, responsive design, and multi-page navigation through weekly coursework.",
    solution:
      "The repository separates weekly exercises into folders and develops a larger rafting website across four linked pages using semantic HTML and shared CSS.",
    keyDecisions: [
      "Keep individual exercises available as a record of the learning process.",
      "Use a shared stylesheet and consistent navigation across the rafting pages.",
    ],
    outcomes: [
      "A public record of foundational HTML and CSS coursework.",
      "A multi-page rafting website alongside smaller layout exercises.",
    ],
    nextSteps: [],
  },
];
