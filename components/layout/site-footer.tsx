import { Container } from "@/components/container";
import { SocialLink } from "@/components/social-link";
import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border mt-auto border-t">
      <Container className="flex flex-col gap-6 py-8 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0">
          <p className="text-foreground text-sm">
            © {year} {site.name}
          </p>
          <p className="meta text-muted-foreground mt-2">
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="text-foreground duration-base hover:text-signal focus-visible:outline-signal transition-colors ease-out focus-visible:outline-2 focus-visible:outline-offset-3"
            >
              Next.js
            </a>
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {site.social.map((item) => (
            <li key={item.href}>
              <SocialLink href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
