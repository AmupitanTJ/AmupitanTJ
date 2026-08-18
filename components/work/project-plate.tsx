import { cn } from "@/lib/utils";

type ProjectPlateProps = {
  slug: string;
  className?: string;
};

export function ProjectPlate({ slug, className }: ProjectPlateProps) {
  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden border border-rule bg-panel",
        className,
      )}
    >
      <PlateArt slug={slug} />
      <span className="folio absolute right-3 bottom-3 text-ink-soft">
        plate / {slug}
      </span>
    </div>
  );
}

function PlateArt({ slug }: { slug: string }) {
  switch (slug) {
    case "registration":
      return (
        <div className="absolute inset-0 p-6">
          <div className="relative h-full border border-mark/70">
            <span className="absolute top-3 left-3 font-display text-4xl leading-none">
              TJ
            </span>
            <span className="absolute right-3 bottom-3 font-display text-5xl italic">
              01
            </span>
            <span className="absolute top-1/2 left-6 h-px w-1/2 bg-ink/70" />
          </div>
        </div>
      );
    case "newecommerce":
      return (
        <div className="absolute inset-0 grid grid-cols-3 gap-2 p-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="border border-rule bg-paper-bright"
              style={{ opacity: 1 - index * 0.1 }}
            />
          ))}
          <div className="absolute right-8 bottom-8 h-16 w-28 border border-ink bg-mark/90" />
        </div>
      );
    case "magazine":
      return (
        <div className="absolute inset-0 grid grid-cols-[2fr_1fr] gap-4 p-6">
          <div>
            <p className="font-display text-6xl leading-none">Aa</p>
            <div className="mt-4 space-y-2">
              <div className="h-px w-full bg-ink/50" />
              <div className="h-px w-5/6 bg-ink/40" />
              <div className="h-px w-4/6 bg-ink/30" />
              <div className="h-px w-5/6 bg-ink/40" />
            </div>
          </div>
          <div className="space-y-2 border-l border-rule pl-4">
            <div className="h-16 bg-forest/80" />
            <div className="h-px w-full bg-ink/40" />
            <div className="h-px w-4/5 bg-ink/30" />
          </div>
        </div>
      );
    case "estatel":
      return (
        <div className="absolute inset-0 p-6">
          <div className="h-full border border-ink/70">
            <div className="h-1/2 border-b border-ink/70" />
            <div className="grid h-1/2 grid-cols-3">
              <div className="border-r border-ink/70" />
              <div className="border-r border-ink/70" />
              <div />
            </div>
          </div>
        </div>
      );
    case "clipboard":
      return (
        <div className="absolute inset-0 p-8">
          <div className="absolute top-10 left-10 h-3/4 w-2/3 rotate-[-4deg] border border-rule bg-paper" />
          <div className="absolute top-14 left-16 h-3/4 w-2/3 border border-ink bg-paper-bright">
            <div className="m-5 space-y-2">
              <div className="h-2 w-1/3 bg-mark" />
              <div className="h-px w-full bg-ink/30" />
              <div className="h-px w-4/5 bg-ink/30" />
              <div className="h-px w-2/3 bg-ink/30" />
            </div>
          </div>
        </div>
      );
    default:
      return <div className="absolute inset-6 border border-dashed border-rule" />;
  }
}
