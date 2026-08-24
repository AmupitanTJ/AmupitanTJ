import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps<T extends ElementType = "div"> = {
  as?: T;
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Container<T extends ElementType = "div">({
  children,
  className,
  as,
  ...props
}: ContainerProps<T>) {
  const Comp = as ?? "div";

  return (
    <Comp
      className={cn(
        "max-w-site mx-auto w-full min-w-0 px-4 sm:px-8 lg:px-10",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
