import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/sections/page-intro";
import { createMetadata } from "@/lib/metadata";
import { getNoteBySlug, getNoteSlugs } from "@/lib/notes";

type NoteSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = true;

export function generateStaticParams() {
  return getNoteSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: NoteSlugPageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return createMetadata({
      title: "Note not found",
      description: "That note is not published.",
      path: "/notes",
    });
  }

  return createMetadata({
    title: note.title,
    description: note.summary,
    path: `/notes/${note.slug}`,
  });
}

export default async function NoteSlugPage({ params }: NoteSlugPageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <Container className="py-section">
      <PageIntro code="04" kicker="Notes" title={note.title}>
        {note.summary}
      </PageIntro>
      <p className="meta text-muted-foreground mt-8">{note.date}</p>
    </Container>
  );
}
