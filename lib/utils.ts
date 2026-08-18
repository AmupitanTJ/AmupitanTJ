import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function padIndex(index: number, size = 2): string {
  return String(index + 1).padStart(size, "0");
}

export function siteUrl(path = "/"): string {
  const base = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(
    /\/$/,
    "",
  );
  if (path === "/") {
    return base;
  }
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
