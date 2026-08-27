import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  marker: string;
  title: string;
  children: ReactNode;
  className?: string;
  headingAs?: "h3" | "h4";
};

export function TimelineItem({
  marker,
  title,
  children,
  className,
  headingAs: Heading = "h3",
}: TimelineItemProps) {
  return (
    <article
      className={cn(
        "border-border relative grid gap-3 border-l pl-5 sm:grid-cols-[7rem_1fr] sm:gap-8 sm:border-l-0 sm:pl-0",
        className,
      )}
    >
      <p className="meta text-muted-foreground pt-1">{marker}</p>
      <div>
        <Heading className="text-foreground text-xl tracking-tight">
          {title}
        </Heading>
        <div className="text-muted-foreground mt-2 text-sm leading-6">
          {children}
        </div>
      </div>
    </article>
  );
}
