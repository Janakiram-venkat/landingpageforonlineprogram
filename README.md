# AI, Python & Game Development Bootcamp 2026 — Landing Page

A playful, light-themed (soft-purple) single-page site for a beginner-friendly,
online 3-week coding bootcamp for school students (Grade 8+).

Built with **Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion**.
Theme mascots (Python snake, game controller, AI robot) are pure CSS/SVG — no
external animation assets needed.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
```

## Edit content

Everything editable lives in **`src/lib/config.ts`** — the program details, the
full Day 1–15 curriculum, projects, skills, awards, and the **`registerUrl`**
(the Razorpay payment link). Change copy there, no component edits needed.

## Key features

- **Fixed Register card** — pinned bottom-right on desktop, full-width bottom bar
  on mobile. Always visible, gentle bounce + pulse, keyboard-focusable, opens the
  Razorpay link in a new tab.
- **Light + soft-purple theme** with mint / coral / sunny / sky accents, all set
  as CSS variables in `src/app/globals.css`.
- **Theme animations** for Python, Games, and AI (CSS/SVG mascots) that loop subtly.
- **Scroll reveals & micro-interactions** via Framer Motion.
- **`prefers-reduced-motion`** respected globally (animations freeze).
- Fully responsive 360px → 1440px+, semantic landmarks, Open Graph metadata.

## Static hosting (GitHub Pages)

Uncomment `output: "export"` in `next.config.mjs`, run `npm run build`, and deploy
the generated `out/` folder.
