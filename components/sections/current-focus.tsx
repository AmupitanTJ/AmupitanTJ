import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
import { site } from "@/content/site";

export function CurrentFocus() {
  return (
    <Container as="section" className="pb-section" aria-labelledby="now-title">
      <div className="grid gap-10 md:grid-cols-2">
        <SectionReveal>
          <SectionHeading
            eyebrow="Now"
            title="Current focus"
            id="now-title"
            description={site.focus}
          />
        </SectionReveal>
        <SectionReveal delay={0.06}>
          <SectionHeading
            eyebrow="Contact"
            title="Write"
            description="For a frontend conversation, use the contact page or reach me on GitHub or LinkedIn."
          />
          <Button asChild className="mt-6">
            <Link href="/contact">Open contact</Link>
          </Button>
        </SectionReveal>
      </div>
    </Container>
  );
}
