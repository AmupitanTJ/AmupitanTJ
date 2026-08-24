"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";
import { hashTarget, scrollToHash } from "@/lib/nav";

type NavLinkProps = ComponentProps<typeof Link>;

export function NavLink({ href, onClick, ...props }: NavLinkProps) {
  const pathname = usePathname();
  const target = typeof href === "string" ? href : (href.pathname ?? "/");
  const resolved =
    pathname === "/" && target.startsWith("/#") ? target.slice(1) : target;

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }

    if (typeof resolved !== "string" || !hashTarget(resolved)) {
      return;
    }

    if (pathname === "/" && scrollToHash(resolved)) {
      event.preventDefault();
      history.replaceState(
        null,
        "",
        resolved.startsWith("#") ? resolved : `#${hashTarget(resolved)}`,
      );
      window.dispatchEvent(new Event("hashchange"));
    }
  }

  return <Link href={resolved} onClick={handleClick} {...props} />;
}
