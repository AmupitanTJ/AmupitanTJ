import type { ReactNode } from "react";
import { CropMarks } from "@/components/layout/crop-marks";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { SkipLink } from "@/components/layout/skip-link";

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-dvh bg-background text-foreground">
      <SkipLink />
      <CropMarks />
      <div className="mx-auto flex min-h-dvh w-full max-w-[1440px]">
        <SiteHeader />
        <div className="flex min-w-0 flex-1 flex-col">
          <main
            id="main"
            className="flex-1 px-5 pt-10 pb-20 md:px-10 lg:px-16 lg:pt-14"
          >
            {children}
          </main>
          <SiteFooter />
        </div>
      </div>
    </div>
  );
}
