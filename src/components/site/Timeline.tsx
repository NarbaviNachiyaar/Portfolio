import { timeline } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

export function Timeline() {
  return (
    <section id="experience" className="relative px-5 py-28 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Experience"
          title="Education, research & industry"
          description="The path so far — study, research, conferences and hands-on industry work."
        />
        <ol className="relative mt-16 space-y-10 pl-8 sm:pl-12">
          <span
            aria-hidden
            className="absolute inset-y-0 left-[7px] w-px sm:left-[11px]"
            style={{
              background:
                "linear-gradient(to bottom, transparent, var(--electric), var(--cyan), transparent)",
            }}
          />
          {timeline.map((item, i) => (
            <li key={item.title} className="relative">
              <span
                aria-hidden
                className="absolute -left-8 top-6 grid h-4 w-4 place-items-center rounded-full bg-background shadow-[0_0_22px_-2px_var(--electric)] sm:-left-12"
              >
                <span className="h-2 w-2 rounded-full bg-[image:var(--gradient-brand)]" />
              </span>
              <Reveal delay={i * 0.05}>
                <div className="glass glow-border rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="rounded-full border border-border bg-secondary/40 px-3 py-1 text-muted-foreground">
                      {item.period}
                    </span>
                    <span className="uppercase tracking-[0.18em] text-accent">{item.kind}</span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-foreground/80">{item.place}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
