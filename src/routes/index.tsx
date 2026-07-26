import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Background } from "@/components/site/Background";
import { Cursor } from "@/components/site/Cursor";
import { Loader } from "@/components/site/Loader";
import { CommandPalette } from "@/components/site/CommandPalette";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Projects } from "@/components/site/Projects";
import { Timeline } from "@/components/site/Timeline";
import { Certifications } from "@/components/site/Certifications";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { profile } from "@/data/portfolio";

const title = "Narbavi Nachiyaar — AI Engineer & Data Science Portfolio";
const description =
  "Building AI products that solve real-world problems. NLP, machine learning and full-stack engineering work by Narbavi Nachiyaar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: profile.role,
          alumniOf: profile.university,
          knowsAbout: ["Artificial Intelligence", "Natural Language Processing", "Machine Learning", "Full Stack Development"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [palette, setPalette] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setPalette((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Loader />
      <Background />
      <Cursor />
      <CommandPalette open={palette} onClose={() => setPalette(false)} />
      <Navbar onOpenPalette={() => setPalette(true)} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Timeline />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
