import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type PageIntroProps = {
  code: string;
  kicker: string;
  title: string;
  children?: ReactNode;
  className?: string;
};

export function PageIntro({
  code,
  kicker,
  title,
  children,
  className,
}: PageIntroProps) {
  return (
    <Reveal className={cn("max-w-3xl", className)}>
      <p className="folio">
        {code} / {kicker}
      </p>
      <h1 className="font-display mt-4 text-5xl leading-[0.92] font-medium tracking-tight text-ink sm:text-6xl md:text-7xl">
        {title}
      </h1>
      {children ? (
        <div className="mt-6 max-w-xl text-base leading-7 text-ink-soft sm:text-lg">
          {children}
        </div>
      ) : null}
    </Reveal>
  );
}
