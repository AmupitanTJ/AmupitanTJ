import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SocialLinkProps = {
  href: string;
  label: string;
  handle?: string;
  className?: string;
  analyticsEvent?: string;
};

export function SocialLink({
  href,
  label,
  handle,
  className,
  analyticsEvent,
}: SocialLinkProps) {
  const external = href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-analytics-event={analyticsEvent}
      className={cn(
        "text-foreground duration-base hover:text-signal focus-visible:outline-signal inline-flex items-center gap-1.5 text-sm transition-colors ease-out focus-visible:outline-2 focus-visible:outline-offset-3",
        className,
      )}
    >
      <span>{handle ? `${label} / ${handle}` : label}</span>
      {external ? (
        <ArrowUpRight className="size-3.5" aria-hidden="true" />
      ) : null}
    </a>
  );
}
