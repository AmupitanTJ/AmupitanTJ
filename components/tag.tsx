import { cn } from "@/lib/utils";

type TagProps = {
  children: string;
  className?: string;
};

export function Tag({ children, className }: TagProps) {
  return (
    <span
      className={cn(
        "border-border bg-surface-raised text-muted-foreground inline-flex items-center rounded-sm border px-2 py-1 font-mono text-[0.6875rem] leading-none tracking-[0.04em]",
        className,
      )}
    >
      {children}
    </span>
  );
}
