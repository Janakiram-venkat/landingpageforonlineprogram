"use client";

import { Calendar, Clock, Globe, Languages, Sparkles, Sun, Tag, Users, Video } from "lucide-react";
import { QUICK_FACTS } from "@/lib/config";
import { RevealGroup, RevealItem } from "./ui/Reveal";

const ICONS: Record<string, typeof Globe> = {
  globe: Globe,
  calendar: Calendar,
  clock: Clock,
  sun: Sun,
  video: Video,
  users: Users,
  sparkles: Sparkles,
  languages: Languages,
  tag: Tag,
};

export function ProgramInfo() {
  return (
    <section className="px-5 -mt-4">
      <RevealGroup className="container-max grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 md:gap-4">
        {QUICK_FACTS.map((f) => {
          const Icon = ICONS[f.icon] ?? Sparkles;
          return (
            <RevealItem key={f.label}>
              <div className="card-soft p-4 h-full flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform">
                <span
                  className="grid place-items-center w-11 h-11 rounded-2xl"
                  style={{ background: `color-mix(in srgb, ${f.color} 18%, white)`, color: f.color }}
                >
                  <Icon size={20} strokeWidth={2.4} />
                </span>
                <span className="font-display font-extrabold text-ink leading-tight">{f.value}</span>
                <span className="text-xs font-bold uppercase tracking-wide text-ink/45">{f.label}</span>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </section>
  );
}
