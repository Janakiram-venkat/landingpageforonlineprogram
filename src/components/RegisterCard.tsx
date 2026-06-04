"use client";

import { PROGRAM } from "@/lib/config";

export function RegisterCard() {
  return (
    <div className="fixed z-50 inset-x-0 bottom-0 pointer-events-none">
      <a
        href={PROGRAM.registerUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Register for the bootcamp"
        className="register-card pointer-events-auto group relative flex items-center justify-center gap-3 md:gap-5 w-full px-5 md:px-8 py-4 font-extrabold text-white focus:outline-none focus-visible:ring-4 focus-visible:ring-purple-soft"
        style={{
          background: "linear-gradient(135deg, var(--purple), var(--purple-deep))",
          boxShadow: "0 -10px 40px -16px rgba(91,63,214,0.6)",
        }}
      >
        <span className="grid place-items-center w-9 h-9 rounded-2xl bg-white/20 text-lg shrink-0">🚀</span>
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[0.7rem] font-bold uppercase tracking-wide text-white/75">
            Seats filling fast
          </span>
          <span className="text-lg">Register Now →</span>
        </span>
        <span
          className="ml-1 md:ml-3 inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 md:px-4 py-1.5 text-sm md:text-base"
        >
          <span className="text-white/75 font-bold hidden sm:inline">Fee</span>
          {PROGRAM.fee}
        </span>
      </a>
    </div>
  );
}
