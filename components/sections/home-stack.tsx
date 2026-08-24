import { Container } from "@/components/container";
import { Tag } from "@/components/tag";
import { home } from "@/content/home";

export function HomeStack() {
  return (
    <section aria-label="Stack and focus" className="border-border border-y">
      <Container className="py-5 sm:py-6">
        <p className="meta text-muted-foreground">Stack / focus</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {home.stack.map((item) => (
            <li key={item}>
              <Tag>{item}</Tag>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
