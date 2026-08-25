import type { Experience } from "@/types";

export const experience: Experience[] = [
  {
    title: "VantraClip",
    organization: "Independent product",
    location: "Web platform",
    start: "2026",
    end: null,
    current: true,
    summary:
      "Building an AI-assisted video clipping platform with React, TypeScript, Node.js, PostgreSQL, FFmpeg, and external integrations.",
    highlights: [
      "Built the workflow for uploads, transcription, highlight selection, captions, reframing, and multi-format exports.",
      "Developed authentication, background jobs, object storage, and a project-led dashboard architecture.",
    ],
  },
  {
    title: "The Judge",
    organization: "Product engineering",
    location: "Legal research product",
    start: "2026",
    end: "2026",
    current: false,
    summary:
      "Delivered a React and TypeScript legal research experience centred on source-backed answers and organised professional workflows.",
    highlights: [
      "Created a focused question-to-source interface for Nigerian legal research.",
      "Structured connected workflows for research, library materials, documents, and matters.",
    ],
  },
  {
    title: "Clarita",
    organization: "Product engineering",
    location: "Web product",
    start: "2026",
    end: "2026",
    current: false,
    summary:
      "Delivered a responsive React and TypeScript product with reusable interface patterns and clear end-to-end states.",
    highlights: [
      "Translated the product direction into a polished, responsive interface.",
      "Built reusable typed components to support consistency and maintainability.",
    ],
  },
];
