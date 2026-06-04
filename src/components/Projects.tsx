"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, type ThemeKey } from "@/lib/config";
import { SectionHeading } from "./ui/SectionHeading";
import { ThemeAnimation } from "./ui/ThemeAnimation";
import { Reveal } from "./ui/Reveal";

const TABS: { key: ThemeKey; label: string; accent: string }[] = [
  { key: "python", label: "🐍 Python", accent: "var(--mint)" },
  { key: "game", label: "🎮 Games", accent: "var(--coral)" },
  { key: "ai", label: "🤖 AI", accent: "var(--purple)" },
];

export function Projects() {
  const [tab, setTab] = useState<ThemeKey>("python");
  const accent = TABS.find((t) => t.key === tab)!.accent;
  const data = PROJECTS[tab];

  return (
    <section id="projects" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Build Real Things"
          title="Projects You'll Create"
          subtitle="Learning by building. Here's just some of what you'll make and take home."
        />

        <Reveal className="flex justify-center gap-2 mb-8">
          {TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className="px-5 py-2.5 rounded-full font-extrabold text-sm transition-all"
              style={
                tab === t.key
                  ? { background: t.accent, color: "#fff", transform: "translateY(-2px)" }
                  : { background: "#fff", color: "var(--ink)", boxShadow: "0 8px 20px -16px rgba(91,63,214,0.6)" }
              }
            >
              {t.label}
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="card-soft p-6 md:p-8 flex flex-col md:flex-row items-center gap-8"
            style={{ borderColor: `color-mix(in srgb, ${accent} 35%, white)` }}
          >
            <div className="shrink-0 grid place-items-center w-40 h-40 rounded-4xl"
              style={{ background: `color-mix(in srgb, ${accent} 14%, white)` }}>
              <ThemeAnimation theme={tab} size={120} />
            </div>
            <div className="flex-1 w-full">
              <h3 className="font-display font-extrabold text-2xl text-ink mb-4">{data.label}</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {data.items.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-center gap-3 rounded-2xl p-3.5 font-bold text-ink"
                    style={{ background: "color-mix(in srgb, var(--lavender) 50%, white)" }}
                  >
                    <span className="grid place-items-center w-9 h-9 rounded-xl text-white font-extrabold shrink-0"
                      style={{ background: accent }}>
                      {i + 1}
                    </span>
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
