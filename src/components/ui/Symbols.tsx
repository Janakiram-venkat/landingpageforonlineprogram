/* Custom hand-built SVG symbols for the playful background.
   Each is a single-colour glyph driven by `currentColor`. */

type Props = { size?: number; className?: string; style?: React.CSSProperties };

function wrap(node: React.ReactNode, { size = 40, className, style }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      style={style}
      aria-hidden="true"
    >
      {node}
    </svg>
  );
}

export const CodeBracket = (p: Props) =>
  wrap(
    <>
      <path d="M18 12 L8 24 L18 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 12 L40 24 L30 36" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="26" y1="11" x2="22" y2="37" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </>,
    p
  );

export const Sparkle = (p: Props) =>
  wrap(
    <path
      d="M24 6 C25 16 32 23 42 24 C32 25 25 32 24 42 C23 32 16 25 6 24 C16 23 23 16 24 6 Z"
      fill="currentColor"
    />,
    p
  );

export const Star = (p: Props) =>
  wrap(
    <path
      d="M24 5 L29.5 18 L43 19.5 L33 29 L36 42.5 L24 35.5 L12 42.5 L15 29 L5 19.5 L18.5 18 Z"
      fill="currentColor"
    />,
    p
  );

export const Rocket = (p: Props) =>
  wrap(
    <>
      <path d="M24 5 C32 11 34 20 33 28 L15 28 C14 20 16 11 24 5 Z" fill="currentColor" />
      <circle cx="24" cy="19" r="3.4" fill="#fff" />
      <path d="M15 28 L9 33 L16 32 Z" fill="currentColor" />
      <path d="M33 28 L39 33 L32 32 Z" fill="currentColor" />
      <path d="M21 33 L24 43 L27 33 Z" fill="currentColor" opacity="0.7" />
    </>,
    p
  );

export const Coin = (p: Props) =>
  wrap(
    <>
      <circle cx="24" cy="24" r="17" fill="currentColor" />
      <circle cx="24" cy="24" r="12.5" fill="none" stroke="#fff" strokeWidth="2.5" opacity="0.7" />
      <path d="M24 16 L24 32 M20 20 h6 a3.5 3.5 0 0 1 0 7 h-6" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
    </>,
    p
  );

export const NeuralNode = (p: Props) =>
  wrap(
    <>
      <line x1="12" y1="14" x2="24" y2="24" stroke="currentColor" strokeWidth="2.4" />
      <line x1="12" y1="34" x2="24" y2="24" stroke="currentColor" strokeWidth="2.4" />
      <line x1="24" y1="24" x2="38" y2="16" stroke="currentColor" strokeWidth="2.4" />
      <line x1="24" y1="24" x2="38" y2="32" stroke="currentColor" strokeWidth="2.4" />
      <circle cx="12" cy="14" r="4.5" fill="currentColor" />
      <circle cx="12" cy="34" r="4.5" fill="currentColor" />
      <circle cx="24" cy="24" r="5.5" fill="currentColor" />
      <circle cx="38" cy="16" r="4.5" fill="currentColor" />
      <circle cx="38" cy="32" r="4.5" fill="currentColor" />
    </>,
    p
  );

export const Lightning = (p: Props) =>
  wrap(<path d="M27 5 L13 27 H23 L21 43 L36 19 H25 Z" fill="currentColor" />, p);

export const Heart = (p: Props) =>
  wrap(
    <path
      d="M24 41 C8 30 6 19 13 14 C18 10 23 13 24 17 C25 13 30 10 35 14 C42 19 40 30 24 41 Z"
      fill="currentColor"
    />,
    p
  );

export const Pixel = (p: Props) =>
  wrap(
    <>
      <rect x="10" y="10" width="9" height="9" rx="2" fill="currentColor" />
      <rect x="29" y="10" width="9" height="9" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="10" y="29" width="9" height="9" rx="2" fill="currentColor" opacity="0.6" />
      <rect x="29" y="29" width="9" height="9" rx="2" fill="currentColor" />
    </>,
    p
  );

export const Snake = (p: Props) =>
  wrap(
    <>
      <path
        d="M14 36 Q14 24 24 24 Q34 24 34 16 Q34 10 27 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <circle cx="27" cy="10" r="5" fill="currentColor" />
      <circle cx="28.5" cy="8.5" r="1.4" fill="#fff" />
      <circle cx="14" cy="36" r="3.6" fill="currentColor" />
    </>,
    p
  );
