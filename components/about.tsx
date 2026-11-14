import { about } from "@/data/content";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" index="01" title="About">
      <p className="max-w-3xl text-2xl leading-snug md:text-3xl">{about.lead}</p>
      <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted">{about.rest}</p>
    </Section>
  );
}
