"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { Button } from "@/components/button";
import { NavLink } from "@/components/layout/nav-link";
import { site } from "@/content/site";
import { isNavActive } from "@/lib/nav";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-haspopup="dialog"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="border-border bg-background w-[min(100%,20rem)] px-6"
      >
        <SheetHeader className="px-0 text-left">
          <SheetTitle className="text-lg font-medium">
            {site.shortName}.
          </SheetTitle>
          <p className="meta text-muted-foreground">{site.name}</p>
        </SheetHeader>
        <nav
          id="mobile-navigation"
          aria-label="Mobile"
          className="mt-8 flex flex-col gap-1"
        >
          {site.nav.map((item) => {
            const active = isNavActive(item.href, pathname, "");

            return (
              <SheetClose asChild key={item.href}>
                <NavLink
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border-border focus-visible:outline-signal flex items-baseline justify-between border-b py-3 text-base focus-visible:outline-2 focus-visible:outline-offset-3",
                    active
                      ? "text-signal"
                      : "text-foreground hover:text-signal",
                  )}
                >
                  <span>{item.label}</span>
                  <span className="meta text-muted-foreground">
                    {item.code}
                  </span>
                </NavLink>
              </SheetClose>
            );
          })}
        </nav>
        <Button asChild className="mt-8 w-full">
          <Link href={site.resumeHref} onClick={() => setOpen(false)}>
            Resume
          </Link>
        </Button>
      </SheetContent>
    </Sheet>
  );
}
