"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

function getTimeLeft(target: number): TimeLeft {
  const diff = Math.max(0, target - Date.now());
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-14 h-16 sm:w-16 sm:h-20 rounded-2xl bg-white grid place-items-center overflow-hidden shadow-[0_10px_30px_-18px_rgba(91,63,214,0.7)]">
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.span
            key={display}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="absolute font-display font-extrabold text-2xl sm:text-3xl text-purple-deep tabular-nums"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="mt-2 text-[11px] sm:text-xs font-bold uppercase tracking-wide text-ink/55">
        {label}
      </span>
    </div>
  );
}

export function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime();
  const [time, setTime] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTime(getTimeLeft(targetMs));
    const id = setInterval(() => setTime(getTimeLeft(targetMs)), 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  // Avoid hydration mismatch — render nothing until mounted on the client.
  if (!time) return null;

  const ended =
    time.days === 0 && time.hours === 0 && time.minutes === 0 && time.seconds === 0;

  if (ended) {
    return (
      <p className="font-display font-extrabold text-lg text-purple-deep">
        🎉 The workshop has started!
      </p>
    );
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wide text-ink/55">
        Workshop starts in
      </p>
      <div className="flex items-center gap-2.5 sm:gap-3">
        <Unit value={time.days} label="Days" />
        <Unit value={time.hours} label="Hours" />
        <Unit value={time.minutes} label="Mins" />
        <Unit value={time.seconds} label="Secs" />
      </div>
    </div>
  );
}
