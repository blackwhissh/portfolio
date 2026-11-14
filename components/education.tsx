import { education } from "@/data/content";
import { Section } from "./section";

export function Education() {
  return (
    <Section id="education" index="05" title="Education">
      <ol>
        {education.map((item) => (
          <li key={item.school} className="grid gap-2 border-t border-line py-8 md:grid-cols-[16rem_1fr] md:gap-10">
            <div>
              <h3 className="text-lg">{item.school}</h3>
              <p className="mt-1 text-sm text-muted">{item.place}</p>
            </div>
            <div>
              <p>{item.program}</p>
              <p className="mt-2 text-sm text-muted">{item.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
