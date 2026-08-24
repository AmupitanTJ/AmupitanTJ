import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TimelineItemProps = {
  marker: string;
  title: string;
  children: ReactNode;
  className?: string;
};

export function TimelineItem({
  marker,
  title,
  children,
  className,
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
        <h3 className="text-foreground text-xl tracking-tight">{title}</h3>
        <div className="text-muted-foreground mt-2 text-sm leading-6">
          {children}
        </div>
      </div>
    </article>
  );
}
