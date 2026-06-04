"use client";

import { AWARDS, PROGRAM } from "@/lib/config";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "./ui/Reveal";

export function Certification() {
  return (
    <section className="section-pad" style={{ background: "color-mix(in srgb, var(--lavender) 45%, white)" }}>
      <div className="container-max">
        <SectionHeading
          eyebrow="Get Rewarded"
          title="Certificates & Awards"
          subtitle="Every graduate earns a certificate — and the stars of the show win special awards."
          eyebrowColor="var(--purple-deep)"
        />

        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
          {/* Certificate */}
          <Reveal>
            <div className="card-soft p-8 h-full relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl"
                style={{ background: "rgba(124,92,230,0.18)" }} />
              <div
                className="rounded-3xl border-2 border-dashed p-7 text-center"
                style={{ borderColor: "var(--purple-soft)", background: "#fff" }}
              >
                <span className="text-5xl">🏅</span>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-[0.2em] text-purple">
                  Certificate of Completion
                </p>
                <h3 className="font-display font-extrabold text-2xl text-ink mt-2 leading-tight">
                  Awarded to a Young Coder
                </h3>
                <p className="mt-2 text-sm font-semibold text-ink/60">
                  {PROGRAM.name}
                </p>
                <div className="mt-4 inline-flex chip" style={{ background: "var(--lavender)", color: "var(--purple-deep)" }}>
                  {PROGRAM.startDate} – {PROGRAM.endDate}
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold text-ink/65 text-center">
                A shareable certificate to celebrate completing all 15 sessions. 🎓
              </p>
            </div>
          </Reveal>

          {/* Awards */}
          <RevealGroup className="grid grid-cols-2 gap-4">
            {AWARDS.map((a) => (
              <RevealItem key={a.title}>
                <div className="card-soft p-6 h-full text-center hover:-translate-y-2 transition-transform">
                  <span className="text-4xl inline-block anim-bob">{a.emoji}</span>
                  <h4 className="font-display font-extrabold text-ink mt-3 leading-tight">{a.title}</h4>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
