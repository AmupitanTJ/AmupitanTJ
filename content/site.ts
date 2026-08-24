import type { SiteContent } from "@/types";

export const site: SiteContent = {
  name: "Tosin Joseph Amupitan",
  shortName: "TJA",
  role: "Web Developer",
  location: "Nigeria",
  headline: "Learning by building real products.",
  description:
    "I build web applications across the frontend and backend. My public work includes VantraClip, TROVE Calc, and the projects that document my progress as a developer.",
  locale: "en_GB",
  focus:
    "Currently developing VantraClip, an AI-assisted video clipping platform, while continuing to strengthen my full-stack web development skills.",
  url:
    process.env.SITE_URL?.trim() ||
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  resumeHref: "/resume",
  nav: [
    { href: "/projects", label: "Projects", code: "01" },
    { href: "/about", label: "About", code: "02" },
    { href: "/contact", label: "Contact", code: "03" },
  ],
  social: [
    {
      label: "GitHub",
      href: "https://github.com/AmupitanTJ/",
      handle: "AmupitanTJ",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tosin-joseph-amupitan-051814260/",
      handle: "tosin-joseph-amupitan",
    },
  ],
};
