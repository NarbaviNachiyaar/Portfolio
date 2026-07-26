import { useState, type FormEvent } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { profile } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
  { icon: Github, label: "GitHub", href: profile.github },
  { icon: Mail, label: "Gmail", href: `mailto:${profile.email}` },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(String(data.get("subject") ?? "Portfolio enquiry"));
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full rounded-2xl border border-border/70 bg-secondary/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/70 focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contact" className="relative px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Internships, research collaborations or just a good AI conversation — my inbox is open."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_0.7fr]">
          <Reveal>
            <form onSubmit={onSubmit} className="glass glow-border rounded-3xl p-7 sm:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs text-muted-foreground">
                    Name
                  </label>
                  <input id="name" name="name" required placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs text-muted-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className={field}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="subject" className="mb-2 block text-xs text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  placeholder="What's this about?"
                  className={field}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="mb-2 block text-xs text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a little more…"
                  className={`${field} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-brand)] px-6 py-3 text-sm font-semibold text-background shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-[1.03]"
              >
                <Send size={16} /> Send Message
              </button>
              <p aria-live="polite" className="mt-3 text-xs text-primary">
                {sent ? "Opening your mail app — thanks for reaching out!" : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="glass flex h-full flex-col justify-between gap-8 rounded-3xl p-7 sm:p-8">
              <div>
                <h3 className="font-display text-lg font-semibold">Find me online</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  I usually reply within a day. Prefer email? Reach me directly at{" "}
                  <a href={`mailto:${profile.email}`} className="text-primary underline-offset-4 hover:underline">
                    {profile.email}
                  </a>
                  .
                </p>
              </div>
              <ul className="grid gap-3">
                {socials.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/40 px-4 py-3 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/60 hover:text-primary"
                    >
                      <Icon size={17} className="shrink-0" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
