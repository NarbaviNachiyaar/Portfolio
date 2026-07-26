import { useEffect, useMemo, useState } from "react";

/** Layered ambient background: aurora, mesh, orbs, particles, grid, noise, spotlight, vignette. */
export function Background() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.2 });
  const [fine, setFine] = useState(false);

  useEffect(() => {
    setFine(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!fine) return;
    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() =>
        setPos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight }),
      );
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, [fine]);

  const particles = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => ({
        left: (i * 37) % 100,
        size: 1.5 + ((i * 7) % 4),
        delay: (i * 1.3) % 18,
        duration: 18 + ((i * 3) % 16),
        opacity: 0.2 + (i % 5) * 0.1,
      })),
    [],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* mesh gradient base */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 20% 0%, color-mix(in oklab, var(--electric) 30%, transparent), transparent 60%)," +
            "radial-gradient(ellipse 60% 50% at 85% 15%, color-mix(in oklab, var(--cyan) 20%, transparent), transparent 60%)," +
            "radial-gradient(ellipse 80% 60% at 50% 110%, color-mix(in oklab, var(--violet) 22%, transparent), transparent 65%)",
        }}
      />

      {/* aurora ribbons */}
      <div className="absolute inset-x-[-20%] -top-1/3 h-[70vh] opacity-60">
        <div
          className="animate-aurora absolute inset-0 blur-[110px]"
          style={{
            background:
              "conic-gradient(from 120deg at 50% 50%, color-mix(in oklab, var(--electric) 55%, transparent), transparent 35%, color-mix(in oklab, var(--cyan) 45%, transparent) 60%, transparent 85%)",
          }}
        />
      </div>

      {/* grid overlay */}
      <div className="grid-bg absolute inset-0 opacity-70" />

      {/* floating orbs */}
      <div className="animate-float-slow absolute -left-32 top-24 h-[26rem] w-[26rem] rounded-full bg-primary/25 blur-[130px]" />
      <div
        className="animate-float-slow absolute -right-24 top-1/2 h-[22rem] w-[22rem] rounded-full bg-accent/20 blur-[130px]"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-violet/20 blur-[150px]"
        style={{ animationDelay: "-8s" }}
      />

      {/* particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute bottom-[-10vh] rounded-full bg-accent"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animation: `drift ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* radial spotlight following the mouse */}
      {fine ? (
        <div
          className="absolute h-[38rem] w-[38rem] rounded-full opacity-35 blur-[130px] transition-transform duration-300 ease-out"
          style={{
            background: "radial-gradient(circle, var(--electric), transparent 65%)",
            left: `calc(${pos.x * 100}% - 19rem)`,
            top: `calc(${pos.y * 100}% - 19rem)`,
          }}
        />
      ) : null}

      {/* noise + vignette */}
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      <div className="vignette absolute inset-0" />
    </div>
  );
}
