import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Command, Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { useTheme } from "@/hooks/use-theme";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function Navbar({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const active = useActiveSection(navLinks.map((l) => l.href.slice(1)));
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div className="h-[2px] origin-left bg-accent" style={{ scaleX: progress }} aria-hidden />

      <div className={cn("px-4 transition-all duration-300", scrolled ? "pt-2" : "pt-5")}>
        <nav
          className={cn(
            "glass mx-auto grid max-w-5xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl transition-all duration-300",
            scrolled ? "px-4 py-2 shadow-[var(--shadow-premium)]" : "px-5 py-3",
          )}
        >
          <a href="#home" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-[image:var(--gradient-brand)] font-display text-sm font-bold text-primary-foreground">
              {profile.initials}
            </span>
            <span className="truncate font-display text-sm font-semibold tracking-tight sm:text-base">
              {profile.name}
            </span>
          </a>

          <div className="flex items-center gap-1.5">
            <ul className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map((l) => {
                const id = l.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={l.href} className="relative">
                    <a
                      href={l.href}
                      className={cn(
                        "relative block rounded-full px-3.5 py-2 text-sm transition-colors",
                        isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                      )}
                    >
                      {isActive ? (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 rounded-full bg-secondary/70"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        />
                      ) : null}
                      <span className="relative">{l.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              onClick={onOpenPalette}
              aria-label="Open command palette"
              className="hidden items-center gap-1.5 rounded-full border border-border bg-secondary/40 px-3 py-2 text-xs text-muted-foreground transition-colors hover:border-accent/60 hover:text-accent sm:inline-flex"
            >
              <Command size={13} /> K
            </button>

            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/40 transition-colors hover:border-accent/60 hover:text-accent"
            >
              {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
            </button>

            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-secondary/40 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {open ? (
          <motion.ul
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass mx-auto mt-2 max-w-5xl overflow-hidden rounded-2xl p-2 lg:hidden"
          >
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </div>
    </header>
  );
}
