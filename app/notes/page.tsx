import Link from "next/link";
import { Container } from "@/components/container";
import { PageIntro } from "@/components/sections/page-intro";
import { createMetadata } from "@/lib/metadata";
import { getNotes } from "@/lib/notes";

export const metadata = createMetadata({
  title: "Notes",
  description:
    "Short notes on frontend engineering and interface design by Tosin Joseph.",
  path: "/notes",
});

export default function NotesPage() {
  const published = getNotes();

  return (
    <Container className="py-section">
      <PageIntro code="04" kicker="Notes" title="Desk notes">
        Short observations on frontend engineering, interface design, and the
        lessons that emerge while building.
      </PageIntro>

      {published.length === 0 ? (
        <div className="border-border bg-card mt-12 max-w-xl rounded-lg border p-6">
          <p className="text-foreground text-lg">Writing is on the way.</p>
          <p className="text-muted-foreground mt-2 text-sm leading-6">
            I am preparing practical notes worth returning to. In the meantime,
            the project case studies show how I approach interface work.
          </p>
          <Link
            href="/projects"
            className="text-signal hover:text-signal-strong mt-5 inline-flex text-sm"
          >
            Explore projects
          </Link>
        </div>
      ) : (
        <ul className="mt-12 space-y-8">
          {published.map((note) => (
            <li key={note.slug}>
              <Link
                href={`/notes/${note.slug}`}
                className="group focus-visible:outline-signal block focus-visible:outline-2 focus-visible:outline-offset-3"
              >
                <p className="meta text-muted-foreground">{note.date}</p>
                <h2 className="group-hover:text-signal mt-2 text-2xl tracking-tight">
                  {note.title}
                </h2>
                <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-6">
                  {note.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}
