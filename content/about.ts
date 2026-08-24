import type { AboutContent } from "@/types";
import { skills } from "@/content/skills";

export const about: AboutContent = {
  title: "About me",
  intro: [
    "I am Tosin Joseph Amupitan, a web developer based in Nigeria. I build projects to understand how the different parts of a web product work together, from the interface people use to the services running behind it.",
    "My WDD 130 coursework records my foundations in HTML and CSS. TROVE Calc helped me practise application logic with vanilla JavaScript. My current project, VantraClip, has taken me into React, Express, PostgreSQL, media processing with FFmpeg, authentication, storage, and API integrations.",
    "This portfolio is a record of work I have actually built. I keep project status and descriptions direct so it is clear what is finished, what is still being improved, and what I learned along the way.",
  ],
  approach: [
    {
      title: "Learn by building",
      body: "I understand tools best when I use them in a real project, solve the problems that appear, and document the result.",
    },
    {
      title: "Work across the stack",
      body: "I am growing beyond interface work by building APIs, database-backed features, authentication, file processing, and deployment workflows.",
    },
    {
      title: "Keep the interface clear",
      body: "Responsive layouts, understandable controls, keyboard support, and useful feedback are part of the build, not finishing touches.",
    },
    {
      title: "Describe the work honestly",
      body: "I do not present coursework as client work or an unfinished project as a finished product. Each case study reflects its real status and scope.",
    },
  ],
  skills,
  now: "Developing and refining VantraClip while using this portfolio to document my real projects and progress.",
};
