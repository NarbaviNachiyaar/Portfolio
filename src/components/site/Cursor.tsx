import { useEffect, useState } from "react";

/** Soft cursor glow for fine-pointer devices. */
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [p, setP] = useState({ x: -200, y: -200 });

  useEffect(() => {
    setEnabled(window.matchMedia("(pointer: fine)").matches);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: MouseEvent) => setP({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed z-[80] h-8 w-8 rounded-full border border-accent/50 transition-transform duration-150 ease-out"
      style={{ transform: `translate3d(${p.x - 16}px, ${p.y - 16}px, 0)`, boxShadow: "0 0 30px -4px var(--electric)" }}
    />
  );
}
