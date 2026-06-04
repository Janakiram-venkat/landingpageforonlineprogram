"use client";

import { WHY_JOIN } from "@/lib/config";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";

export function WhyJoin() {
  return (
    <section id="why" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Why Join?"
          title="Built for Curious Kids"
          subtitle="Friendly, hands-on, and designed to make every learner feel like a creator."
          eyebrowColor="var(--coral)"
        />
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {WHY_JOIN.map((b) => (
            <RevealItem key={b.title}>
              <div className="card-soft p-6 h-full hover:-translate-y-2 transition-transform group">
                <span
                  className="grid place-items-center w-14 h-14 rounded-3xl text-2xl mb-4 transition-transform group-hover:scale-110"
                  style={{ background: `color-mix(in srgb, ${b.color} 16%, white)` }}
                >
                  {b.emoji}
                </span>
                <h3 className="font-display font-extrabold text-xl text-ink mb-2">{b.title}</h3>
                <p className="text-sm font-semibold text-ink/65 leading-relaxed">{b.desc}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
