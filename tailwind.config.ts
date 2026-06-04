import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "var(--cream)",
        lavender: "var(--lavender)",
        purple: {
          soft: "var(--purple-soft)",
          DEFAULT: "var(--purple)",
          deep: "var(--purple-deep)",
        },
        mint: "var(--mint)",
        sunny: "var(--sunny)",
        coral: "var(--coral)",
        sky: "var(--sky)",
        ink: "var(--ink)",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 18px 50px -20px rgba(124, 92, 230, 0.35)",
        toy: "0 10px 0 0 rgba(124, 92, 230, 0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
