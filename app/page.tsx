import { About } from "@/components/about";
import { Beyond } from "@/components/beyond";
import { Contact } from "@/components/contact";
import { Education } from "@/components/education";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Reveal } from "@/components/reveal";
import { Skills } from "@/components/skills";
import { profile } from "@/data/content";

export default function Page() {
  return (
    <>
      <Header />
      <main id="content">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Experience />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Beyond />
        </Reveal>
        <Contact />
      </main>
      <footer className="border-t border-line px-6 py-8 text-sm text-muted">
        <div className="mx-auto flex max-w-page justify-between gap-4">
          <span>{profile.name}</span>
          <a href={profile.github}>GitHub</a>
        </div>
      </footer>
    </>
  );
}
