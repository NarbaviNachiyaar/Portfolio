import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { Compass, Cpu, Layers, Sparkles, Target, User } from "lucide-react";
import { bento, profile, stats } from "@/data/portfolio";
import { Reveal, SectionHeading } from "./Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1200, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-3xl font-bold text-gradient">
      {n}
      {suffix}
    </span>
  );
}

function Card({
  icon: Icon,
  title,
  className,
  delay = 0,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <Reveal delay={delay} className={className}>
      <div className="glass glow-border h-full rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-secondary/60 text-accent">
            <Icon size={17} />
          </span>
          <h3 className="font-display text-base font-semibold">{title}</h3>
        </div>
        <div className="mt-5 text-sm leading-relaxed text-muted-foreground">{children}</div>
      </div>
    </Reveal>
  );
}

export function About() {
  return (
    <section id="about" className="relative px-5 py-28 lg:px-8 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About"
          title="Engineering intelligence into products"
          description="A snapshot of how I think, what I'm building toward, and the tools I reach for."
        />

        <div className="mt-16 grid gap-5 md:grid-cols-6">
          <Card icon={User} title="Who I Am" className="md:col-span-4" delay={0}>
            <p className="text-pretty">{bento.whoIAm}</p>
          </Card>

          <Card icon={Target} title="Career Goal" className="md:col-span-2" delay={0.06}>
            <p className="text-pretty">{bento.careerGoal}</p>
          </Card>

          <Card icon={Compass} title="Current Focus" className="md:col-span-3" delay={0.12}>
            <ul className="space-y-2.5">
              {bento.currentFocus.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Sparkles size={14} className="mt-1 shrink-0 text-accent" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card icon={Cpu} title="Education" className="md:col-span-3" delay={0.18}>
            <p className="text-pretty">
              <span className="text-foreground">{profile.degree}</span> at{" "}
              <span className="text-foreground">{profile.university}</span>, currently holding a{" "}
              <span className="text-accent">CGPA of {profile.cgpa}</span>.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((s) => (
                <div key={s.label}>
                  <Counter value={s.value} suffix={s.suffix} />
                  <p className="mt-1 text-xs leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </Card>

          <Card icon={Layers} title="Strengths" className="md:col-span-6" delay={0.24}>
            <div className="flex flex-wrap gap-2.5">
              {bento.strengths.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground/90 transition-colors hover:border-accent/60 hover:text-accent"
                >
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
