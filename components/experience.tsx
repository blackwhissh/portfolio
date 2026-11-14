import { experience } from "@/data/content";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" index="04" title="Experience">
      <ol>
        {experience.map((job) => (
          <li key={job.org} className="grid gap-3 border-t border-line py-8 md:grid-cols-[16rem_1fr] md:gap-10">
            <div>
              <h3 className="text-lg">{job.org}</h3>
              {job.place ? <p className="mt-1 text-sm text-muted">{job.place}</p> : null}
            </div>
            <div>
              <p>{job.role}</p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
