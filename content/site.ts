import type { SiteContent } from "@/types";

export const site: SiteContent = {
  name: "Tosin Joseph Amupitan",
  shortName: "TJ",
  role: "Web Developer",
  location: "Abuja, Nigeria",
  headline: "Building reliable digital products.",
  description:
    "I design and build responsive web products with React and TypeScript. My work includes Clarita, The Judge, and the ongoing VantraClip platform.",
  locale: "en_GB",
  focus:
    "Building production-minded interfaces and full-stack products with React, TypeScript, Next.js, Node.js, and PostgreSQL.",
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
