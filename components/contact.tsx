"use client";

import { FormEvent } from "react";
import { contactCopy, profile } from "@/data/content";
import { Section } from "./section";

export function Contact() {
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const message = String(data.get("message") || "");
    const body = `From: ${name} <${email}>\n\n${message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Hello from the site")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <Section id="contact" index="07" title="Contact">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="max-w-md text-3xl leading-snug tracking-tight md:text-4xl">{contactCopy.title}</h3>
          <p className="mt-5 max-w-md leading-relaxed text-muted">{contactCopy.text}</p>
          <p className="mt-6 flex flex-col gap-2 text-sm">
            <a className="underline decoration-line underline-offset-4" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <a className="underline decoration-line underline-offset-4" href={profile.github}>
              GitHub
            </a>
            {profile.linkedin ? (
              <a className="underline decoration-line underline-offset-4" href={profile.linkedin}>
                LinkedIn
              </a>
            ) : null}
          </p>
        </div>
        <form onSubmit={onSubmit} className="space-y-6">
          <label className="block text-sm">
            Name
            <input
              name="name"
              required
              autoComplete="name"
              className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none"
            />
          </label>
          <label className="block text-sm">
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="mt-2 w-full border-b border-line bg-transparent py-2 outline-none"
            />
          </label>
          <label className="block text-sm">
            Message
            <textarea
              name="message"
              required
              rows={5}
              className="mt-2 w-full resize-y border-b border-line bg-transparent py-2 outline-none"
            />
          </label>
          <button type="submit" className="rounded-md bg-paper px-4 py-2 text-sm text-ink hover:bg-white">
            Send email
          </button>
          <p className="text-sm text-muted">Opens your email app. Nothing is stored on the site.</p>
        </form>
      </div>
    </Section>
  );
}
