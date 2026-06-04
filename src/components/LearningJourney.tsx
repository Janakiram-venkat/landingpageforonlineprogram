"use client";

import { WEEKS } from "@/lib/config";
import { SectionHeading } from "./ui/SectionHeading";
import { ThemeAnimation } from "./ui/ThemeAnimation";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const ACCENT: Record<string, string> = {
  python: "var(--mint)",
  game: "var(--coral)",
  ai: "var(--purple)",
};

export function LearningJourney() {
  return (
    <section id="journey" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="The 3-Week Journey"
          title="Python → Games → AI"
          subtitle="Every week unlocks a new superpower. By the end, you'll have built real projects from scratch."
        />

        <RevealGroup className="relative grid md:grid-cols-3 gap-6">
          {/* dotted connector on desktop */}
          <div className="hidden md:block absolute top-[88px] left-[16%] right-[16%] border-t-[3px] border-dashed border-purple-soft/60 -z-10" />

          {WEEKS.map((w, i) => (
            <RevealItem key={w.badge}>
              <div className="card-soft p-7 h-full text-center hover:-translate-y-2 transition-transform">
                <div className="relative mx-auto w-fit">
                  <span
                    className="absolute -top-1 -right-1 grid place-items-center w-8 h-8 rounded-full text-white font-display font-extrabold text-sm z-10"
                    style={{ background: ACCENT[w.theme] }}
                  >
                    {i + 1}
                  </span>
                  <ThemeAnimation theme={w.theme} size={104} />
                </div>
                <span
                  className="chip mt-4"
                  style={{ background: `color-mix(in srgb, ${ACCENT[w.theme]} 16%, white)`, color: "var(--ink)" }}
                >
                  {w.badge}
                </span>
                <h3 className="font-display font-extrabold text-xl md:text-2xl text-ink mt-3">
                  {w.title}
                </h3>
                <p className="mt-2 text-sm font-semibold text-ink/65">{w.summary}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
