"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { WEEKS } from "@/lib/config";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

const ACCENT: Record<string, string> = {
  python: "var(--mint)",
  game: "var(--coral)",
  ai: "var(--purple)",
};

export function Curriculum() {
  const [open, setOpen] = useState(0);

  return (
    <section id="curriculum" className="section-pad" style={{ background: "color-mix(in srgb, var(--lavender) 45%, white)" }}>
      <div className="container-max">
        <SectionHeading
          eyebrow="Day-by-Day Curriculum"
          title="15 Days of Hands-On Fun"
          subtitle="Tap a week to peek inside. Every single day ends with you building something real."
        />

        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {WEEKS.map((w, i) => {
            const isOpen = open === i;
            const accent = ACCENT[w.theme];
            return (
              <Reveal key={w.badge}>
                <div className="card-soft overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center gap-4 p-5 text-left"
                  >
                    <span
                      className="grid place-items-center w-12 h-12 rounded-2xl font-display font-extrabold text-white shrink-0"
                      style={{ background: accent }}
                    >
                      {i + 1}
                    </span>
                    <span className="flex-1 min-w-0">
                      <span className="block text-xs font-extrabold uppercase tracking-wide" style={{ color: accent }}>
                        {w.badge}
                      </span>
                      <span className="block font-display font-extrabold text-lg md:text-xl text-ink truncate">
                        {w.title}
                      </span>
                    </span>
                    <ChevronDown
                      size={22}
                      className="shrink-0 text-ink/50 transition-transform"
                      style={{ transform: isOpen ? "rotate(180deg)" : "none" }}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 grid sm:grid-cols-2 gap-3">
                          {w.days.map((d) => (
                            <div
                              key={d.day}
                              className="rounded-2xl p-4"
                              style={{ background: "color-mix(in srgb, var(--lavender) 55%, white)" }}
                            >
                              <div className="flex items-center gap-2">
                                <span className="chip text-xs" style={{ background: "#fff", color: accent }}>
                                  {d.day}
                                </span>
                                <span className="font-display font-extrabold text-ink text-sm">{d.title}</span>
                              </div>
                              <ul className="mt-3 space-y-1.5">
                                {d.points.map((p) => (
                                  <li key={p} className="flex items-start gap-2 text-sm font-semibold text-ink/70">
                                    <Check size={15} strokeWidth={3} className="mt-0.5 shrink-0" style={{ color: accent }} />
                                    {p}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                        <div className="mx-5 mb-5 rounded-2xl p-4 flex items-start gap-2"
                          style={{ background: `color-mix(in srgb, ${accent} 14%, white)` }}>
                          <span className="text-lg">🎯</span>
                          <p className="text-sm font-bold text-ink/80">
                            <span className="font-extrabold">Outcome:</span> {w.outcome}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
