import { hero, profile } from "@/data/content";
import { publicHref } from "@/lib/links";
import { SystemField } from "./system-field";

export function Hero() {
  const cv = profile.cvUrl
    ? publicHref(profile.cvUrl)
    : `mailto:${profile.email}?subject=${encodeURIComponent("CV")}`;

  return (
    <section id="top" className="px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="mx-auto grid max-w-page items-end gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="text-sm text-muted">
            {profile.role}
            <span className="px-2">·</span>
            {profile.focus}
          </p>
          <h1 className="mt-5 max-w-xl text-5xl leading-[1.02] tracking-tight md:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-xl text-2xl leading-snug text-paper md:text-3xl">
            {hero.line}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">{hero.intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-md bg-paper px-4 py-2 text-sm text-ink hover:bg-white">
              View my work
            </a>
            <a href="#contact" className="rounded-md border border-line px-4 py-2 text-sm hover:border-paper/40">
              Get in touch
            </a>
            <a href={cv} className="rounded-md border border-line px-4 py-2 text-sm hover:border-paper/40">
              {profile.cvUrl ? "Download CV" : "Request CV"}
            </a>
          </div>
          <p className="mt-8 text-sm text-muted">
            Based in {profile.location}
            <span className="px-2">·</span>
            {profile.schoolLine}
          </p>
          <p className="mt-3 flex flex-wrap gap-4 text-sm">
            <a className="underline decoration-line underline-offset-4 hover:decoration-paper" href={profile.github}>
              GitHub
            </a>
            {profile.linkedin ? (
              <a className="underline decoration-line underline-offset-4 hover:decoration-paper" href={profile.linkedin}>
                LinkedIn
              </a>
            ) : null}
          </p>
        </div>
        <div className="md:col-span-5">
          <div className="h-64 border border-line md:h-[26rem]">
            <SystemField />
          </div>
        </div>
      </div>
    </section>
  );
}
