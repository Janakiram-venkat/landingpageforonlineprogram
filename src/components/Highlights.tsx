"use client";

import { HIGHLIGHTS } from "@/lib/config";

const COLORS = ["var(--purple)", "var(--coral)", "var(--mint)", "var(--sky)", "var(--sunny)", "var(--purple-deep)"];

export function Highlights() {
  // duplicate the list so the marquee loops seamlessly
  const items = [...HIGHLIGHTS, ...HIGHLIGHTS];

  return (
    <section className="py-10 overflow-hidden" aria-label="Program highlights">
      <div className="marquee-track gap-3">
        {items.map((h, i) => {
          const c = COLORS[i % COLORS.length];
          return (
            <span
              key={i}
              className="inline-flex items-center gap-2 whitespace-nowrap px-5 py-3 rounded-full font-extrabold text-ink bg-white"
              style={{ border: `2px solid color-mix(in srgb, ${c} 35%, white)` }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
              {h}
            </span>
          );
        })}
      </div>
    </section>
  );
}
