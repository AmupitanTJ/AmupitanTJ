import type { ReactNode } from "react";
import { SectionHeading } from "@/components/section-heading";
import { SectionReveal } from "@/components/section-reveal";
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
    <SectionReveal className={cn(className)}>
      <SectionHeading
        as="h1"
        eyebrow={`${code} / ${kicker}`}
        title={title}
        description={children}
      />
    </SectionReveal>
  );
}
