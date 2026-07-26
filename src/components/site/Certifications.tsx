import { Award } from "lucide-react";
import { motion } from "motion/react";
import { certifications } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-5 py-28 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Certifications"
          title="Workshops & programs"
          description="Structured learning that backs the projects — from AI foundations to security labs."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
                className="glass glow-border group h-full rounded-2xl p-7"
              >
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-secondary/60 text-accent transition-transform duration-500 group-hover:rotate-12">
                  <Award size={19} />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold">{c.title}</h3>
                <p className="mt-1 text-xs uppercase tracking-wider text-accent">{c.issuer}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
