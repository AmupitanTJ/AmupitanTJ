"use client";

import { NavLink } from "@/components/layout/nav-link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { isNavActive } from "@/lib/nav";
import { useLocationHash } from "@/lib/use-location-hash";
import { cn } from "@/lib/utils";

export function PrimaryNav() {
  const pathname = usePathname();
  const hash = useLocationHash();

  return (
    <nav
      aria-label="Primary"
      className="ml-auto hidden items-center gap-5 md:flex lg:gap-7"
    >
      {site.nav.map((item) => {
        const active = isNavActive(item.href, pathname, hash);

        return (
          <NavLink
            key={item.href}
            href={item.href}
            aria-current={
              active ? (pathname === "/" ? "location" : "page") : undefined
            }
            className={cn(
              "meta duration-base focus-visible:outline-signal relative pb-0.5 transition-colors ease-out focus-visible:outline-2 focus-visible:outline-offset-3",
              "after:bg-signal after:duration-base after:pointer-events-none after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:ease-out",
              active
                ? "text-signal after:scale-x-100"
                : "text-muted-foreground hover:text-foreground hover:after:scale-x-100 hover:after:opacity-50",
            )}
          >
            {item.label}
          </NavLink>
        );
      })}
    </nav>
  );
}
