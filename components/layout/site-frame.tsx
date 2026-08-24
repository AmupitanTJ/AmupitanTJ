import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";
import { LazyCursor } from "@/components/motion/lazy-cursor";
import { PageTransition } from "@/components/motion/page-transition";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground flex min-h-dvh min-w-0 flex-col">
      <SkipLink />
      <SiteHeader />
      <PageTransition>{children}</PageTransition>
      <SiteFooter />
      <LazyCursor />
    </div>
  );
}
