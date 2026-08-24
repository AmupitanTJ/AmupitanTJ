import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "trove-calculator",
    title: "TROVE Calc",
    shortDescription:
      "An installable standard and scientific calculator built with vanilla web technologies.",
    longDescription:
      "TROVE Calc is a standard and scientific calculator Progressive Web App built with HTML, CSS, and vanilla JavaScript. It includes calculation history, memory controls, themes, keyboard support, and offline use.",
    year: "2025",
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
    slug: "gsap-text-animation",
    title: "GSAP Text Animation",
    shortDescription:
      "A focused typography animation study using GSAP and SplitText.",
    longDescription:
      "A small frontend motion study that reveals a headline character by character and supporting copy word by word. The public demo includes a reset control for replaying the sequence.",
    year: "2026",
    role: "Frontend motion study",
    status: "study",
    featured: true,
    stack: ["HTML", "CSS", "JavaScript", "GSAP", "SplitText"],
    coverImage: null,
    gallery: [],
    liveUrl: "https://gsaptextanimation.vercel.app",
    githubUrl: "https://github.com/AmupitanTJ/GSAPTEXTANIMATION",
    challenge:
      "Explore how staggered character and word animation can introduce a simple page without adding a large interface or complex application state.",
    solution:
      "GSAP timelines and SplitText animate headline characters with vertical movement, rotation, opacity, and a colour transition. Supporting words enter with movement and blur, while a reset button reloads the sequence.",
    keyDecisions: [
      "Keep the exercise to one HTML page and one animation timeline.",
      "Use responsive type sizes so the headline remains readable on smaller screens.",
    ],
    outcomes: [
      "A public animation demo and source repository.",
      "A compact study of stagger, transform origin, easing, and text splitting.",
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
