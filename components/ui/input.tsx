import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-border-strong bg-surface text-foreground duration-base selection:bg-signal selection:text-navy placeholder:text-muted-foreground h-10 w-full min-w-0 rounded-md border px-3 py-2 text-base transition-colors ease-out outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-signal focus-visible:outline-signal focus-visible:outline-2 focus-visible:outline-offset-3",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
