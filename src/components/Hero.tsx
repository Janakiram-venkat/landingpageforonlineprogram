"use client";

import { motion } from "framer-motion";
import { PROGRAM } from "@/lib/config";
import { fadeUp, stagger } from "@/lib/motion";
import { FloatingShapes } from "./ui/FloatingShapes";
import { ThemeAnimation } from "./ui/ThemeAnimation";

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

        <motion.p variants={fadeUp} className="mt-7 text-lg md:text-2xl font-extrabold font-display text-purple">
          {PROGRAM.tagline}
        </motion.p>

        <motion.p variants={fadeUp} className="mt-3 max-w-xl mx-auto text-base md:text-lg font-semibold text-ink/70">
          {PROGRAM.subtitle}
        </motion.p>

        <motion.div variants={fadeUp} className="mt-6 inline-flex items-center gap-2 chip"
          style={{ background: "color-mix(in srgb, var(--mint) 22%, white)", color: "#1d7a52" }}>
          ✅ {PROGRAM.reassurance}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center justify-center gap-3">
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
        <motion.div variants={fadeUp} className="relative mt-14 h-40 md:h-48">
          <div className="absolute left-[6%] md:left-[16%] top-2 anim-float">
            <ThemeAnimation theme="python" size={92} />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-0 anim-float-slow">
            <ThemeAnimation theme="game" size={120} />
          </div>
          <div className="absolute right-[6%] md:right-[16%] top-2 anim-float" >
            <ThemeAnimation theme="ai" size={92} />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
