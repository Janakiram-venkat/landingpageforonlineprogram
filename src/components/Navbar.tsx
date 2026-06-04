"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV_LINKS, PROGRAM } from "@/lib/config";
import pocketlab from "@/assets/pocketlab.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`container-max flex items-center justify-between px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-md shadow-[0_10px_30px_-18px_rgba(91,63,214,0.5)]"
            : "bg-white/40 backdrop-blur"
        }`}
      >
        <a href="#top" className="flex items-center font-display font-extrabold text-ink">
          <Image
            src={pocketlab}
            alt="PocketLab logo"
            width={160}
            height={56}
            className="h-12 md:h-14 w-auto object-contain"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 rounded-full font-bold text-sm text-ink/70 hover:text-purple hover:bg-lavender/60 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href={PROGRAM.registerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-1 px-5 py-2.5 rounded-full font-extrabold text-sm text-white transition-transform hover:-translate-y-0.5"
          style={{ background: "linear-gradient(135deg, var(--purple), var(--purple-deep))" }}
        >
          Register →
        </a>

        <button
          className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-lavender text-purple-deep font-extrabold"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="md:hidden container-max px-4 mt-2">
          <div className="card-soft p-3 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl font-bold text-ink/80 hover:bg-lavender/60"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
