"use client";

import { motion } from "framer-motion";
import { PROGRAM } from "@/lib/config";
import { fadeUp, stagger } from "@/lib/motion";
import { FloatingShapes } from "./ui/FloatingShapes";
import { ThemeAnimation } from "./ui/ThemeAnimation";
import { Countdown } from "./ui/Countdown";

export function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 px-5 overflow-hidden">
      <FloatingShapes />

      <motion.div
        className="container-max text-center relative"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.span
          variants={fadeUp}
          className="chip mb-6"
          style={{ background: "#fff", color: "var(--purple-deep)", boxShadow: "0 8px 24px -14px rgba(91,63,214,0.6)" }}
        >
          🎉 Admissions Open · {PROGRAM.startDate}
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display font-extrabold text-ink leading-[1.05] text-4xl sm:text-5xl md:text-7xl"
        >
          Learn to Code,
          <br />
          <span className="relative inline-block">
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(120deg, var(--purple), var(--coral))" }}
            >
              Build Games & AI
            </span>
            <svg className="absolute -bottom-2 left-0 w-full" height="14" viewBox="0 0 300 14" preserveAspectRatio="none">
              <path d="M2 10 Q150 2 298 9" stroke="var(--sunny)" strokeWidth="5" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-5 inline-flex items-center gap-2 chip"
          style={{ background: "color-mix(in srgb, var(--purple) 14%, white)", color: "var(--purple-deep)" }}
        >
          🎓 {PROGRAM.audienceShort}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-7 text-lg md:text-2xl font-extrabold font-display text-purple">
          {PROGRAM.tagline}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-3 max-w-xl mx-auto text-base md:text-lg font-semibold text-ink/70">
          {PROGRAM.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="inline-flex items-center gap-2 chip"
            style={{ background: "color-mix(in srgb, var(--mint) 22%, white)", color: "#1d7a52" }}>
            ✅ {PROGRAM.reassurance}
          </span>
          <span className="inline-flex items-center gap-2 chip"
            style={{ background: "#fff", color: "var(--purple-deep)", boxShadow: "0 8px 24px -16px rgba(91,63,214,0.6)" }}>
            💸 Course Fee {PROGRAM.fee}
          </span>
          <span className="inline-flex items-center gap-2 chip"
            style={{ background: "color-mix(in srgb, var(--sky) 22%, white)", color: "#1d5d8a" }}>
            🗣️ Medium: {PROGRAM.medium}
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-9 flex justify-center">
          <Countdown target={PROGRAM.startDateISO} />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-7 flex justify-center">
          <span
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-extrabold text-sm md:text-base text-white animate-pulse"
            style={{ background: "linear-gradient(135deg, var(--coral), #e0466b)", boxShadow: "0 12px 30px -12px rgba(224,70,107,0.7)" }}
          >
            🔥 Limited Seats Only · Apply Soon!
          </span>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <a
            href={PROGRAM.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full font-extrabold text-white text-lg transition-transform hover:-translate-y-1"
            style={{ background: "linear-gradient(135deg, var(--purple), var(--purple-deep))", boxShadow: "0 16px 36px -14px rgba(91,63,214,0.7)" }}
          >
            Register Now →
          </a>
          <a
            href="#journey"
            className="px-7 py-4 rounded-full font-extrabold text-purple-deep text-lg bg-white hover:-translate-y-1 transition-transform"
            style={{ boxShadow: "0 12px 30px -18px rgba(91,63,214,0.6)" }}
          >
            See the Journey
          </a>
        </motion.div>

        {/* Floating mascots */}
        <motion.div
          variants={fadeUp}
          className="mt-14 flex items-end justify-center gap-6 sm:gap-12 md:gap-20"
        >
          <div className="anim-float">
            <ThemeAnimation theme="python" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
          </div>
          <div className="anim-float-slow -mb-2 sm:-mb-3">
            <ThemeAnimation theme="game" className="w-[88px] h-[88px] sm:w-28 sm:h-28 md:w-32 md:h-32" />
          </div>
          <div className="anim-float">
            <ThemeAnimation theme="ai" className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
