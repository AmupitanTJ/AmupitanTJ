"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { MobileNav } from "@/components/layout/mobile-nav";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <>
      <header className="border-rule bg-paper/85 sticky top-0 z-30 flex items-center justify-between border-b px-5 py-3 backdrop-blur-sm lg:hidden">
        <Link href="/" className="font-display text-xl tracking-tight">
          {site.shortName}
          <span className="sr-only"> — {site.name} home</span>
        </Link>
        <MobileNav />
      </header>

      <aside className="border-rule sticky top-0 hidden h-dvh w-56 shrink-0 flex-col justify-between border-r px-6 py-8 lg:flex">
        <div>
          <Link href="/" className="group block">
            <span className="font-display text-3xl leading-none tracking-tight">
              {site.shortName}
            </span>
            <span className="mt-2 block text-xs tracking-[0.18em] text-ink-soft uppercase">
              {site.role}
            </span>
          </Link>
          <nav aria-label="Primary" className="mt-12 flex flex-col gap-3">
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
                    "group flex items-baseline gap-3 text-sm",
                    active ? "text-ink" : "text-ink-soft hover:text-ink",
                  )}
                >
                  <span
                    className={cn(
                      "folio w-6",
                      active ? "text-mark" : "text-ink-soft",
                    )}
                  >
                    {item.code}
                  </span>
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "bg-mark absolute -bottom-1 left-0 h-px w-full origin-left transition-transform duration-300",
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </span>
                </Link>
              );
            })}
          </nav>
        </div>
        <p className="folio max-w-[10rem] leading-5 normal-case">
          {site.location}
        </p>
      </aside>
    </>
  );
}
