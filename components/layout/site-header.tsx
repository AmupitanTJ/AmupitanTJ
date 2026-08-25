import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/button";
import { Container } from "@/components/container";
import { MobileNav } from "@/components/layout/mobile-nav";
import { PrimaryNav } from "@/components/layout/primary-nav";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-border bg-background/92 sticky top-0 z-30 border-b backdrop-blur-md">
      <Container className="flex h-16 min-w-0 items-center gap-2 sm:gap-3">
        <Link
          href="/"
          className="text-foreground focus-visible:outline-signal flex shrink-0 items-center gap-2 text-sm font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-3"
        >
          <Image
            src="/images/brand-mark.png"
            alt=""
            width={30}
            height={30}
            priority
            className="invert"
          />
          <span className="font-display text-xl font-semibold tracking-[-0.08em] italic">
            TJ
          </span>
          <span className="sr-only"> {site.name} home</span>
        </Link>
        <PrimaryNav />
        <div className="ml-auto flex min-w-0 items-center gap-2 md:ml-0">
          <Button asChild size="sm">
            <Link href={site.resumeHref}>Profile</Link>
          </Button>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
