import {
  CodeBracket,
  Sparkle,
  Star,
  Rocket,
  Coin,
  NeuralNode,
  Lightning,
  Pixel,
  Snake,
} from "./Symbols";

type Glyph = (typeof DOODLES)[number];

const DOODLES = [
  { Icon: CodeBracket, color: "var(--purple)", size: 44, anim: "anim-float", style: { top: "13%", left: "7%" } },
  { Icon: Star, color: "var(--sunny)", size: 30, anim: "anim-bob", style: { top: "20%", right: "11%" } },
  { Icon: Snake, color: "var(--mint)", size: 46, anim: "anim-wiggle", style: { bottom: "20%", left: "12%" } },
  { Icon: Sparkle, color: "var(--coral)", size: 28, anim: "anim-bob", style: { bottom: "30%", right: "9%", animationDelay: "1s" } },
  { Icon: NeuralNode, color: "var(--purple-deep)", size: 42, anim: "anim-float", style: { top: "44%", left: "4%", animationDelay: "2s" } },
  { Icon: Rocket, color: "var(--sky)", size: 38, anim: "anim-float-slow", style: { top: "8%", right: "30%" } },
  { Icon: Coin, color: "var(--sunny)", size: 30, anim: "anim-bob", style: { top: "52%", right: "6%", animationDelay: "0.6s" } },
  { Icon: Pixel, color: "var(--coral)", size: 30, anim: "anim-float", style: { bottom: "10%", right: "26%", animationDelay: "1.4s" } },
  { Icon: Lightning, color: "var(--purple)", size: 30, anim: "anim-bob", style: { top: "30%", left: "26%", animationDelay: "0.9s" } },
] as const;

export function FloatingShapes() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden -z-10"
    >
      {/* Soft colour blobs */}
      <span
        className="absolute rounded-full blur-3xl anim-float-slow"
        style={{ width: 280, height: 280, top: "-40px", left: "-60px", background: "rgba(124, 92, 230, 0.18)" }}
      />
      <span
        className="absolute rounded-full blur-3xl anim-float-slow"
        style={{ width: 240, height: 240, top: "120px", right: "-50px", background: "rgba(255, 122, 133, 0.16)", animationDelay: "1.5s" }}
      />
      <span
        className="absolute rounded-full blur-3xl anim-float-slow"
        style={{ width: 200, height: 200, bottom: "40px", left: "20%", background: "rgba(95, 217, 168, 0.16)", animationDelay: "3s" }}
      />

      {/* Custom floating symbols */}
      {DOODLES.map(({ Icon, color, size, anim, style }: Glyph, i) => (
        <span
          key={i}
          className={`absolute ${anim}`}
          style={{ color, opacity: 0.55, ...style }}
        >
          <Icon size={size} />
        </span>
      ))}
    </div>
  );
}
