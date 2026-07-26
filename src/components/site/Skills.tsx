import { motion } from "motion/react";
import { skillCategories } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="relative px-5 py-28 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="The stack I build with"
          description="From model experiments in Python to production interfaces in React — the full path from idea to shipped product."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.06}>
              <div className="glass glow-border h-full rounded-2xl p-7">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {group.title}
                </h3>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item, i) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      whileHover={{ scale: 1.08, rotate: -1.5 }}
                      className="cursor-default rounded-xl border border-border bg-secondary/40 px-3.5 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/70 hover:text-accent hover:shadow-[0_0_28px_-6px_var(--electric)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
