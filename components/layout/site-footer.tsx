import { site } from "@/content/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-rule mt-auto border-t px-5 py-6 md:px-10 lg:px-16">
      <div className="flex flex-col gap-4 text-sm text-ink-soft sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg text-ink">{site.name}</p>
          <p className="folio mt-1">
            {site.role} — {site.location}
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {site.social.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-mark"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <p className="folio">© {year}</p>
      </div>
    </footer>
  );
}
