import type { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="bg-background text-foreground flex min-h-dvh min-w-0 flex-col">
      <SkipLink />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="min-w-0 flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}
