"use client";

import Image, { type StaticImageData } from "next/image";
import { MENTORS } from "@/lib/config";
import { SectionHeading } from "./ui/SectionHeading";
import { RevealGroup, RevealItem } from "./ui/Reveal";
import person1 from "@/assets/person1.png";
import person2 from "@/assets/person2.png";
import person3 from "@/assets/person3.jpeg";

const PHOTOS: Record<string, StaticImageData> = {
  person1,
  person2,
  person3,
};

export function Mentors() {
  return (
    <section id="mentors" className="section-pad">
      <div className="container-max">
        <SectionHeading
          eyebrow="Resource Persons"
          title="Meet Your Mentors"
          subtitle="Learn directly from experienced mentors who make every session fun and easy to follow."
          eyebrowColor="var(--sky)"
        />
        <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {MENTORS.map((m) => (
            <RevealItem key={m.name}>
              <div className="card-soft p-6 h-full text-center hover:-translate-y-2 transition-transform">
                <span className="grid place-items-center w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden bg-white shadow-sm ring-4 ring-lavender/60">
                  <Image
                    src={PHOTOS[m.photo]}
                    alt={m.name}
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </span>
                <h3 className="font-display font-extrabold text-lg text-ink mb-1">{m.name}</h3>
                <p className="text-sm font-bold text-purple">{m.role}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
