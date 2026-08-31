import Image from "next/image";
import { cn } from "@/lib/utils";
import type { MediaAsset } from "@/types";

type ProjectCoverProps = {
  title: string;
  image: MediaAsset | null;
  className?: string;
  imageClassName?: string;
};

export function ProjectCover({
  title,
  image,
  className,
  imageClassName,
}: ProjectCoverProps) {
  return (
    <div
      className={cn(
        "bg-surface-raised relative aspect-[16/10] overflow-hidden",
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          unoptimized={
            image.src.endsWith(".svg") || image.src.endsWith(".png")
          }
          sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "motion-safe:duration-slow object-contain p-8 motion-safe:transition-transform motion-safe:ease-out motion-safe:group-hover:scale-[1.035] sm:p-10",
            imageClassName,
          )}
        />
      ) : (
        <div className="absolute inset-0 flex items-end bg-[linear-gradient(135deg,rgba(10,10,10,0.08),transparent_55%)] p-4 sm:p-5">
          <p className="display text-foreground/80 max-w-[12ch] text-3xl sm:text-4xl">
            {title}
          </p>
        </div>
      )}
    </div>
  );
}
