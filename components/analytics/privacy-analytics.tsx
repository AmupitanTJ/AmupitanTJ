import Script from "next/script";

export function PrivacyAnalytics() {
  const scriptSrc = process.env.NEXT_PUBLIC_PLAUSIBLE_SCRIPT_SRC;

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
