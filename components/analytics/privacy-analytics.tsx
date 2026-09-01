"use client";

import Script from "next/script";
import { useEffect } from "react";

declare global {
  interface Window {
    plausible?: (eventName: string) => void;
  }
}

export function PrivacyAnalytics() {
  const scriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC;

  useEffect(() => {
    if (!scriptSrc) return;

    const track = (name: string) => window.plausible?.(name);
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null;
      const link = target?.closest<HTMLElement>("[data-analytics-event]");
      const name = link?.dataset.analyticsEvent;
      if (name) track(name);
    };
    const handleCustomEvent = (event: Event) => {
      const name = (event as CustomEvent<{ name?: string }>).detail?.name;
      if (name) track(name);
    };

    document.addEventListener("click", handleClick);
    window.addEventListener("portfolio:analytics", handleCustomEvent);
    return () => {
      document.removeEventListener("click", handleClick);
      window.removeEventListener("portfolio:analytics", handleCustomEvent);
    };
  }, [scriptSrc]);

  if (!scriptSrc) {
    return null;
  }

  return (
    <Script
      id="plausible-analytics"
      src={scriptSrc}
      strategy="afterInteractive"
    />
  );
}
