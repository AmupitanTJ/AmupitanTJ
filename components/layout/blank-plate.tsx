import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";

export function BlankPlate() {
  return (
    <Container className="py-section">
      <SectionHeading
        as="h1"
        eyebrow="404"
        title="This plate is blank."
        description="That address is not part of this site. The project index and the home page are still here."
      />
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Index</Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href="/projects">Projects</Link>
        </Button>
      </div>
    </Container>
  );
}
