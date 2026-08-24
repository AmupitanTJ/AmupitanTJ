import { site } from "@/content/site";
import { siteUrl } from "@/lib/utils";

export function PersonJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": `${siteUrl()}/#person`,
        name: site.name,
        jobTitle: site.role,
        description: site.description,
        address: {
          "@type": "PostalAddress",
          addressCountry: site.location,
        },
        url: siteUrl(),
        sameAs: site.social.map((item) => item.href),
        knowsAbout: [
          "Frontend development",
          "React",
          "TypeScript",
          "Next.js",
          "Accessible web interfaces",
        ],
      }}
    />
  );
}

export function WebsiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${siteUrl()}/#website`,
        url: siteUrl(),
        name: `${site.name} — Portfolio`,
        description: site.description,
        inLanguage: "en-GB",
        author: { "@id": `${siteUrl()}/#person` },
      }}
    />
  );
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  const json = JSON.stringify(data).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
