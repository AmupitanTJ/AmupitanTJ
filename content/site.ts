import type { SiteContent } from "@/types";

export const site: SiteContent = {
  name: "Tosin Joseph",
  shortName: "TJ",
  role: "Frontend Developer",
  location: "Nigeria",
  headline: "Interfaces that hold their shape.",
  description:
    "I build responsive, readable user interfaces with React, TypeScript, and Tailwind CSS. The work is practical: clear structure, careful layout, and code that another developer can pick up without a briefing.",
  locale: "en_GB",
  focus:
    "Currently tightening this site into a durable public record of selected frontend work, and practicing production patterns in Next.js.",
  url:
    process.env.SITE_URL ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  resumeHref: "/resume",
  nav: [
    { href: "/projects", label: "Projects", code: "01" },
    { href: "/about", label: "About", code: "02" },
    { href: "/notes", label: "Notes", code: "03" },
    { href: "/contact", label: "Contact", code: "04" },
  ],
  social: [
    {
      label: "GitHub",
      href: "https://github.com/Tosinjoseph",
      handle: "Tosinjoseph",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tosinjoseph",
      handle: "tosinjoseph",
    },
  ],
};
