import { site } from "@/content/site";

export function PersonJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    address: {
      "@type": "PostalAddress",
      addressCountry: site.location,
    },
    url: site.url,
    sameAs: site.social.map((item) => item.href),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
