"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { site } from "@/content/site";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="border-rule h-10 w-10 rounded-none bg-transparent lg:hidden"
          aria-label="Open menu"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="w-[min(100%,20rem)] border-rule bg-paper px-6"
      >
        <SheetHeader className="px-0 text-left">
          <SheetTitle className="font-display text-2xl font-medium">
            {site.name}
          </SheetTitle>
          <p className="folio">{site.role}</p>
        </SheetHeader>
        <nav aria-label="Mobile" className="mt-8 flex flex-col gap-1">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-baseline justify-between border-b border-rule/70 py-3 text-lg",
                  active ? "text-mark" : "text-ink hover:text-mark",
                )}
              >
                <span>{item.label}</span>
                <span className="folio">{item.code}</span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
