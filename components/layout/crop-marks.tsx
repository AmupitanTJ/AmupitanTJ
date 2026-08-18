function Mark({ className }: { className: string }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute size-5 text-mark ${className}`}
    >
      <span className="absolute top-1/2 left-0 h-px w-full bg-current" />
      <span className="absolute top-0 left-1/2 h-full w-px bg-current" />
    </span>
  );
}

export function CropMarks() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-3 z-40 hidden md:block"
    >
      <Mark className="-top-px -left-px" />
      <Mark className="-top-px -right-px" />
      <Mark className="-bottom-px -left-px" />
      <Mark className="-right-px -bottom-px" />
    </div>
  );
}
