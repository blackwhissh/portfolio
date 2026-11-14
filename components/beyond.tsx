import { beyond } from "@/data/content";
import { Section } from "./section";

export function Beyond() {
  return (
    <Section id="beyond" index="06" title="Beyond the job">
      <p className="max-w-2xl text-2xl leading-snug">{beyond}</p>
    </Section>
  );
}
