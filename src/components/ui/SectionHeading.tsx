import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  eyebrowColor = "var(--purple)",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  eyebrowColor?: string;
}) {
  return (
    <Reveal className="text-center max-w-2xl mx-auto mb-12">
      {eyebrow && (
        <span
          className="chip mb-4"
          style={{
            background: "color-mix(in srgb, var(--lavender) 70%, white)",
            color: eyebrowColor,
          }}
        >
          ✦ {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-5xl font-extrabold leading-tight text-ink">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base md:text-lg text-ink/70 font-semibold">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
