import { skillGroups, skillLegend } from "@/data/content";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="expertise" index="02" title="Expertise">
      <p className="mb-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-paper" />
          {skillLegend.work}
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full border border-muted" />
          {skillLegend.elsewhere}
        </span>
      </p>
      <div className="grid gap-12 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-lg">{group.title}</h3>
            <ul className="mt-4 grid grid-cols-1 gap-y-2 sm:grid-cols-2 sm:gap-x-6">
              {group.items.map((item) => (
                <li key={item.name} className="flex items-center gap-2 text-sm text-paper/90">
                  <span
                    className={
                      item.use === "work"
                        ? "h-1.5 w-1.5 shrink-0 rounded-full bg-paper"
                        : "h-1.5 w-1.5 shrink-0 rounded-full border border-muted"
                    }
                  />
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
