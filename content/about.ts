import type { AboutContent } from "@/types";
import { skills } from "@/content/skills";

export const about: AboutContent = {
  title: "About me",
  intro: [
    "I am Tosin Joseph Amupitan, a full-stack product engineer based in Abuja. I design and build modern web products with a strong focus on clarity, responsive behaviour, and dependable implementation.",
    "React and TypeScript are central to most of my work. I use them to create reusable interface systems, model product behaviour clearly, and connect polished frontends to reliable services and data.",
    "My completed product work includes Clarita and The Judge. I am currently building VantraClip, which extends that experience into media processing, background jobs, storage, PostgreSQL, FFmpeg, and external API integrations.",
  ],
  approach: [
    {
      title: "Start with the outcome",
      body: "I define what the product needs to achieve, then shape the interface and technical decisions around that goal.",
    },
    {
      title: "Engineer for change",
      body: "Typed data, reusable React components, and clear boundaries keep products easier to extend and maintain.",
    },
    {
      title: "Keep the interface clear",
      body: "Responsive layouts, understandable controls, keyboard support, and useful feedback are part of the build, not finishing touches.",
    },
    {
      title: "Deliver with transparency",
      body: "I communicate scope and status clearly, test the important paths, and keep the work grounded in real product requirements.",
    },
  ],
  skills,
  now: "Currently developing VantraClip while remaining open to thoughtful web product and frontend engineering work.",
};
