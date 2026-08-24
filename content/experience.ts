import type { Experience } from "@/types";

/**
 * Keep this record focused on verifiable project work.
 */
export const experience: Experience[] = [
  {
    title: "VantraClip",
    organization: "Independent project",
    location: "Web application",
    start: "2026",
    end: null,
    current: true,
    summary:
      "Building an AI-assisted video clipping platform with a React interface, Node.js and Express services, PostgreSQL, FFmpeg, and external API integrations.",
    highlights: [
      "Implemented a workflow for uploads, transcription, highlight selection, captions, reframing, and multi-format exports.",
      "Worked on authentication, background jobs, object storage, payments, notifications, and a project dashboard.",
    ],
  },
];
