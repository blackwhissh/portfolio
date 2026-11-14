import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="work" index="03" title="Work">
      <div className="space-y-20">
        {projects.map((project, index) => {
          const flip = index % 2 === 1;
          return (
            <article key={project.title} className="grid items-start gap-10 border-t border-line pt-10 md:grid-cols-2">
              <div className={flip ? "md:order-2" : ""}>
                <p className="font-mono text-xs text-muted">{project.year}</p>
                <h3 className="mt-3 text-3xl tracking-tight md:text-4xl">{project.title}</h3>
                <p className="mt-4 max-w-xl leading-relaxed text-muted">{project.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li key={item} className="border border-line px-2 py-1 text-xs text-muted">
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex gap-4 text-sm">
                  {project.repo ? (
                    <a className="inline-flex items-center gap-1 underline decoration-line underline-offset-4" href={project.repo}>
                      Repository <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a className="inline-flex items-center gap-1 underline decoration-line underline-offset-4" href={project.demo}>
                      Live <ArrowUpRight size={14} />
                    </a>
                  ) : null}
                </p>
              </div>
              <div className={flip ? "md:order-1" : ""}>
                <details className="border border-line">
                  <summary className="cursor-pointer px-4 py-3 text-sm text-muted">How it&apos;s put together</summary>
                  <ol>
                    {project.parts.map((part, partIndex) => (
                      <li key={part.name} className="grid grid-cols-[auto_1fr] gap-4 border-t border-line px-4 py-3">
                        <span className="font-mono text-xs text-muted">0{partIndex + 1}</span>
                        <span>
                          <span className="block text-sm">{part.name}</span>
                          <span className="mt-1 block text-sm text-muted">{part.note}</span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </details>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
