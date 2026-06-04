"use client";

import { SKILLS } from "@/lib/config";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const COLORS = [
  "var(--purple)",
  "var(--coral)",
  "var(--mint)",
  "var(--sky)",
  "var(--sunny)",
  "var(--purple-deep)",
];

export function Skills() {
  return (
    <section className="section-pad" style={{ background: "color-mix(in srgb, var(--lavender) 45%, white)" }}>
      <div className="container-max">
        <SectionHeading
          eyebrow="Skills You'll Grow"
          title="More Than Just Code"
          subtitle="Skills that shine in school, projects, and the future."
        />
        <RevealGroup className="flex flex-wrap justify-center gap-3 md:gap-4">
          {SKILLS.map((s, i) => {
            const c = COLORS[i % COLORS.length];
            return (
              <RevealItem key={s.label}>
                <span
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-extrabold text-ink bg-white hover:-translate-y-1 transition-transform"
                  style={{ boxShadow: `0 10px 24px -18px ${c}`, border: `2px solid color-mix(in srgb, ${c} 30%, white)` }}
                >
                  <span className="text-xl">{s.emoji}</span>
                  {s.label}
                </span>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
