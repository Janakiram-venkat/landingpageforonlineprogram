"use client";

import { PROGRAM } from "@/lib/config";

export function RegisterCard() {
  return (
    <div className="fixed z-50 inset-x-0 bottom-0 md:inset-x-auto md:right-6 md:bottom-6 pointer-events-none">
      <a
        href={PROGRAM.registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Register for the bootcamp"
        className="register-card pointer-events-auto group relative flex md:inline-flex items-center justify-center gap-3 w-full md:w-auto px-6 py-4 md:rounded-3xl font-extrabold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-soft"
        style={{
          background: "linear-gradient(135deg, var(--purple), var(--purple-deep))",
          boxShadow: "0 -10px 40px -16px rgba(91,63,214,0.6)",
          animation: "register-bounce 2.6s ease-in-out infinite",
        }}
      >
        {/* pulse ring (desktop) */}
        <span
          aria-hidden
          className="hidden md:block absolute inset-0 rounded-3xl -z-10"
          style={{ background: "var(--purple)", animation: "pulse-ring 2.4s ease-out infinite" }}
        />
        <span className="grid place-items-center w-9 h-9 rounded-2xl bg-white/20 text-lg">🚀</span>
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[0.7rem] font-bold uppercase tracking-wide text-white/75">
            Seats filling fast
          </span>
          <span className="text-lg">Register Now →</span>
        </span>
      </a>
    </div>
  );
}
