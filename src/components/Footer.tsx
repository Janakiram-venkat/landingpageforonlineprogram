import Image from "next/image";
import { PROGRAM, NAV_LINKS } from "@/lib/config";
import pocketlab from "@/assets/pocketlab.png";

export function Footer() {
  return (
    <footer className="px-5 pb-32 md:pb-12 pt-12">
      <div className="container-max card-soft p-8 md:p-10 text-center"
        style={{ background: "linear-gradient(135deg, color-mix(in srgb, var(--lavender) 70%, white), #fff)" }}>
        <div className="flex items-center justify-center gap-2 font-display font-extrabold text-xl text-ink">
          <span className="grid place-items-center w-9 h-9 rounded-2xl bg-white shadow-sm overflow-hidden">
            <Image
              src={pocketlab}
              alt="PocketLab logo"
              width={36}
              height={36}
              className="w-full h-full object-contain"
            />
          </span>
          {PROGRAM.shortName}
        </div>
        <p className="mt-3 font-bold text-ink/70">{PROGRAM.name}</p>
        <p className="mt-1 text-sm font-semibold text-ink/55">
          {PROGRAM.mode} · {PROGRAM.medium} · {PROGRAM.startDate} – {PROGRAM.endDate} · {PROGRAM.sessions}
        </p>
        <p className="mt-1 text-sm font-semibold text-ink/55">
          {PROGRAM.time} · {PROGRAM.audience}
        </p>
        <p className="mt-1 text-sm font-bold text-purple">
          Course Fee: {PROGRAM.fee}
        </p>

        <nav className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-bold text-ink/60 hover:text-purple">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <a
            href={`mailto:${PROGRAM.contactEmail}`}
            className="text-sm font-bold text-purple hover:underline"
          >
            {PROGRAM.contactEmail}
          </a>
          <a
            href={`tel:${PROGRAM.contactPhone}`}
            className="text-sm font-bold text-purple hover:underline"
          >
            {PROGRAM.contactPhone}
          </a>
        </div>

        <p className="mt-6 text-xs font-semibold text-ink/40">
          © {new Date().getFullYear()} {PROGRAM.shortName}. Made with 💜 for young creators.
        </p>
      </div>
    </footer>
  );
}
