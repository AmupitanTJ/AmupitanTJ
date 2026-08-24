import { notes } from "@/content/notes";
import type { Note } from "@/types";

export function getNotes(): Note[] {
  return notes.filter((note) => !note.draft);
}

export function getNoteBySlug(slug: string): Note | undefined {
  return getNotes().find((note) => note.slug === slug);
}

export function getNoteSlugs(): string[] {
  return getNotes().map((note) => note.slug);
}
