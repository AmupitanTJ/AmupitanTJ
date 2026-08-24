import { cn } from "@/lib/utils";
import { StackIcon } from "@/components/stack-icon";

type TagProps = {
  children: string;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "border-border bg-surface-raised text-muted-foreground inline-flex items-center gap-1.5 rounded-sm border px-2 py-1 font-mono text-[0.6875rem] leading-none tracking-[0.04em]",
        className,
      )}
    >
      <StackIcon label={children} />
      {children}
    </span>
  );
}
