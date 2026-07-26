import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowDown, Bot, BrainCircuit, Download, FolderGit2, Sparkles, Terminal } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import { heroCards, profile } from "@/data/portfolio";
import { fadeUp, Magnetic, stagger } from "./Reveal";

const floatingIcons = [
  { Icon: BrainCircuit, className: "-left-6 top-10", delay: 0 },
  { Icon: Bot, className: "-right-4 top-1/3", delay: 1.2 },
  { Icon: Terminal, className: "-left-2 bottom-16", delay: 2.1 },
];

export function Hero() {
  const wrap = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 18 });
  const sy = useSpring(my, { stiffness: 90, damping: 18 });
  const tx = useTransform(sx, [-0.5, 0.5], [-18, 18]);
  const ty = useTransform(sy, [-0.5, 0.5], [-14, 14]);

  return (
    <section
      id="home"
      ref={wrap}
      onMouseMove={(e) => {
        const r = wrap.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      className="relative flex min-h-screen items-center px-5 pb-24 pt-36 lg:px-8"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="min-w-0">
          <motion.span
            variants={fadeUp}
            className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium text-accent"
          >
            <Sparkles size={13} />
            {profile.availability}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-7 text-balance text-4xl font-bold leading-[1.02] sm:text-6xl lg:text-[4.25rem]"
          >
            {profile.headline[0]}{" "}
            <span className="text-gradient">{profile.headline[1]}</span>{" "}
            {profile.headline[2]}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-[image:var(--gradient-brand)] px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform duration-200 hover:scale-[1.04]"
              >
                <FolderGit2 size={16} /> View Projects
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="/resume.pdf"
                download
                className="glass inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-colors hover:text-accent"
              >
                <Download size={16} /> Download Resume
              </a>
            </Magnetic>
          </motion.div>

          <motion.dl variants={fadeUp} className="mt-12 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
            {heroCards.map((c) => (
              <div key={c.label} className="glass rounded-2xl px-4 py-3.5">
                <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">{c.label}</dt>
                <dd className="mt-1 font-display text-xl font-bold text-foreground">{c.value}</dd>
                <dd className="mt-0.5 text-[11px] leading-tight text-muted-foreground">{c.hint}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div variants={fadeUp} style={{ x: tx, y: ty }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-10 rounded-full bg-primary/20 blur-[90px]" aria-hidden />

          {/* animated glowing ring */}
          <div
            className="animate-ring-spin absolute -inset-4 rounded-full opacity-70 blur-[2px]"
            aria-hidden
            style={{
              background:
                "conic-gradient(from 0deg, transparent 0%, var(--cyan) 20%, transparent 45%, var(--electric) 70%, transparent 100%)",
              maskImage: "radial-gradient(circle, transparent 61%, #000 63%)",
              WebkitMaskImage: "radial-gradient(circle, transparent 61%, #000 63%)",
            }}
          />

          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="glass relative overflow-hidden rounded-full p-2"
          >
            <img
              src={profileImg}
              alt="Portrait of Narbavi Nachiyaar, AI and data science engineer"
              width={1024}
              height={1024}
              className="aspect-square w-full rounded-full object-cover"
            />
          </motion.div>

          {floatingIcons.map(({ Icon, className, delay }, i) => (
            <motion.span
              key={i}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity, ease: "easeInOut", delay }}
              className={`glass absolute grid h-11 w-11 place-items-center rounded-2xl text-accent ${className}`}
              aria-hidden
            >
              <Icon size={18} />
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-accent sm:flex"
      >
        Scroll
        <ArrowDown className="animate-bounce" size={16} />
      </a>
    </section>
  );
}
