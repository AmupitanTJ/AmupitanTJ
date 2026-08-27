export function hashTarget(href: string): string | null {
  if (href.startsWith("#") && href.length > 1) {
    return href.slice(1);
  }
  if (href.startsWith("/#") && href.length > 2) {
    return href.slice(2);
  }
  return null;
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") {
    return true;
  }
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToHash(href: string): boolean {
  const id = hashTarget(href);
  if (!id || typeof document === "undefined") {
    return false;
  }

  const node = document.getElementById(id);
  if (!node) {
    return false;
  }

  node.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });
  node.focus({ preventScroll: true });
  return true;
}

export function isNavActive(
  href: string,
  pathname: string,
  hash: string,
): boolean {
  if (href.startsWith("/#")) {
    const target = href.slice(1);
    if (pathname === "/") {
      return hash === target;
    }
    if (href === "/#work") {
      return pathname.startsWith("/projects");
    }
    if (href === "/#about") {
      return pathname.startsWith("/about");
    }
    if (href === "/#experience") {
      return pathname.startsWith("/resume");
    }
    if (href === "/#contact") {
      return pathname.startsWith("/contact");
    }
    return false;
  }

  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}
