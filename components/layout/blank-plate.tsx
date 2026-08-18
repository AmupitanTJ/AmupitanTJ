import Link from "next/link";

export function BlankPlate() {
  return (
    <div className="max-w-xl py-10">
      <p className="folio">404 / Off register</p>
      <h1 className="font-display mt-4 text-6xl tracking-tight">
        This plate is blank.
      </h1>
      <p className="mt-5 text-base leading-7 text-ink-soft">
        That address is not part of this site. The work register and the index
        are still here.
      </p>
      <div className="mt-8 flex gap-6 text-sm">
        <Link href="/" className="hover:text-mark">
          Index
        </Link>
        <Link href="/work" className="hover:text-mark">
          Work
        </Link>
      </div>
    </div>
  );
}
