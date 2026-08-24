import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  as?: "h1" | "h2" | "h3";
  id?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Heading = "h2",
  id,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <p className="meta text-muted-foreground">{eyebrow}</p> : null}
      <Heading
        id={id}
        className={cn(
          "display text-foreground text-[1.75rem] leading-[1.05] sm:text-5xl md:text-6xl",
          eyebrow && "mt-3",
        )}
      >
        {title}
      </Heading>
      {description ? (
        <div className="text-muted-foreground mt-5 max-w-xl text-base leading-7 sm:text-lg">
          {description}
        </div>
      ) : null}
    </div>
  );
}
