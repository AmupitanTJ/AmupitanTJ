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
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      (props.target && props.target !== "_self")
    ) {
      return;
    }

    if (typeof resolved !== "string" || !hashTarget(resolved)) {
      return;
    }

    if (pathname === "/" && scrollToHash(resolved)) {
      event.preventDefault();
      const hash = `#${hashTarget(resolved)}`;
      if (window.location.hash !== hash) {
        history.pushState(history.state, "", hash);
      }
      window.dispatchEvent(new Event("hashchange"));
    }
  }

  return <Link href={resolved} onClick={handleClick} {...props} />;
}
