import type { ThemeKey } from "@/lib/config";

export function ThemeAnimation({
  theme,
  size = 96,
  className,
}: {
  theme: ThemeKey;
  size?: number;
  className?: string;
}) {
  const map = {
    python: <SnakeMascot />,
    game: <ControllerMascot />,
    ai: <RobotMascot />,
  };
  return (
    <div
      className={className}
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${theme} animation`}
    >
      {map[theme]}
    </div>
  );
}

/* 🐍 Python — a friendly wiggling snake */
function SnakeMascot() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" className="anim-wiggle">
      <circle cx="50" cy="50" r="46" fill="var(--lavender)" />
      <path
        d="M30 70 Q30 50 46 50 Q62 50 62 38 Q62 28 52 28"
        fill="none"
        stroke="var(--mint)"
        strokeWidth="11"
        strokeLinecap="round"
      />
      <circle cx="52" cy="28" r="9" fill="var(--mint)" />
      <circle cx="55" cy="25" r="2.4" fill="#1d3b30" />
      <path d="M60 30 q6 1 7 6" stroke="var(--coral)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="30" cy="70" r="6.5" fill="var(--mint)" />
    </svg>
  );
}

/* 🎮 Game — a floating controller with a spinning coin */
function ControllerMascot() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" className="anim-bob">
      <circle cx="50" cy="50" r="46" fill="var(--lavender)" />
      <rect x="22" y="40" width="56" height="30" rx="15" fill="var(--purple)" />
      <circle cx="36" cy="55" r="4.5" fill="#fff" opacity="0.85" />
      <rect x="32.5" y="50.5" width="7" height="9" rx="2" fill="#fff" opacity="0.85" />
      <rect x="28.5" y="54.5" width="15" height="3.5" rx="1.6" fill="#fff" opacity="0.55" />
      <circle cx="62" cy="50" r="4" fill="var(--coral)" />
      <circle cx="70" cy="58" r="4" fill="var(--sunny)" />
      <circle cx="50" cy="24" r="8" fill="var(--sunny)" className="anim-coin" />
      <text x="50" y="28" textAnchor="middle" fontSize="9" fontWeight="800" fill="#a8741a">$</text>
    </svg>
  );
}

/* 🤖 AI — a blinking, thinking robot */
function RobotMascot() {
  return (
    <svg viewBox="0 0 100 100" width="100%" height="100%" className="anim-bob">
      <circle cx="50" cy="50" r="46" fill="var(--lavender)" />
      <line x1="50" y1="20" x2="50" y2="30" stroke="var(--purple-deep)" strokeWidth="3" />
      <circle cx="50" cy="18" r="4" fill="var(--coral)" />
      <rect x="28" y="30" width="44" height="38" rx="13" fill="var(--purple)" />
      <g style={{ transformOrigin: "center", animation: "blink 4s infinite" }}>
        <circle cx="41" cy="47" r="5.5" fill="#fff" />
        <circle cx="59" cy="47" r="5.5" fill="#fff" />
      </g>
      <circle cx="41" cy="47" r="2.4" fill="var(--ink)" />
      <circle cx="59" cy="47" r="2.4" fill="var(--ink)" />
      <rect x="42" y="58" width="16" height="4" rx="2" fill="#fff" opacity="0.85" />
      <circle cx="24" cy="48" r="4" fill="var(--mint)" />
      <circle cx="76" cy="48" r="4" fill="var(--mint)" />
    </svg>
  );
}
