import type { Metadata } from "next";
import { BlankPlate } from "@/components/layout/blank-plate";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page is not part of this portfolio.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <BlankPlate />;
}
