import { HomeContact } from "@/components/sections/home-contact";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description:
    "Start a web product conversation with Tosin Joseph Amupitan, a React and TypeScript developer based in Abuja.",
  path: "/contact",
});

export default function ContactPage() {
  return <HomeContact standalone />;
}
