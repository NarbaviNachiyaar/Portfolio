import { ArrowUpRight, Check, Github, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import medicalImg from "@/assets/project-medical.jpg";
import moodImg from "@/assets/project-mood.jpg";
import agentImg from "@/assets/project-agent.jpg";
import { projects } from "@/data/portfolio";
import { Magnetic, Reveal, SectionHeading, Tilt } from "./Reveal";

const images = [medicalImg, moodImg, agentImg];

export function Projects() {
  return (
    <section id="projects" className="relative px-5 py-28 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Applied AI, shipped end to end"
          description="Each project starts with a real problem and ends with an interface someone can actually use."
        />

        <div className="mt-20 space-y-24">
          {projects.map((p, i) => {
            const flipped = i % 2 === 1;
            return (
              <Reveal key={p.title} delay={0.04}>
                <article
                  className={`grid items-center gap-10 lg:grid-cols-2 ${flipped ? "lg:[&>*:first-child]:order-2" : ""}`}
                >
                  <Tilt className="relative">
                    <div className="glass glow-border group relative overflow-hidden rounded-2xl p-2 shadow-[var(--shadow-premium)]">
                      <div className="relative overflow-hidden rounded-xl">
                        <img
                          src={images[i]}
                          alt={`${p.title} interface preview`}
                          loading="lazy"
                          width={1200}
                          height={750}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
                      </div>
                    </div>
                  </Tilt>

                  <div className="min-w-0">
                    {p.upcoming ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-medium uppercase tracking-wider text-accent">
                        <Sparkles size={12} /> In progress
                      </span>
                    ) : null}
                    <h3 className="mt-4 text-balance font-display text-2xl font-bold sm:text-3xl">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-accent">{p.tagline}</p>

                    <dl className="mt-7 space-y-5 text-sm leading-relaxed">
                      {[
                        ["Problem", p.problem],
                        ["Solution", p.solution],
                        ["Challenges", p.challenges],
                        ["Results", p.results],
                      ].map(([label, body]) => (
                        <div key={label} className="grid gap-1">
                          <dt className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                            {label}
                          </dt>
                          <dd className="text-pretty text-foreground/85">{body}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                      <Magnetic strength={0.25}>
                        <motion.a
                          href={p.demo}
                          target="_blank"
                          rel="noreferrer"
                          whileHover={{ scale: 1.04 }}
                          className="inline-flex items-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)]"
                        >
                          Live Demo <ArrowUpRight size={15} />
                        </motion.a>
                      </Magnetic>
                      <Magnetic strength={0.25}>
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noreferrer"
                          className="glass inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-medium transition-colors hover:text-accent"
                        >
                          <Github size={15} /> GitHub
                        </a>
                      </Magnetic>
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        <Check size={14} className="text-accent" />
                        <span className="relative after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 group-hover:after:origin-left group-hover:after:scale-x-100">
                          Project details
                        </span>
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
