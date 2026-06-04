# CLAUDE.md — AI, Python & Game Development Bootcamp 2026 Landing Page

This file is the single source of truth for building the landing page. Read it fully before writing any code.

---

## 1. Project Summary

A fun, friendly, **light-themed** single-page site for the **AI, Python & Game Development Bootcamp 2026** — a beginner-friendly, online 3-week program for **school students (Grade 8 and above)**.

The page should feel playful and inviting (it's for kids), use small, delightful animations tied to the program's themes (**Python, game development, AI**), and drive sign-ups through a **static, fixed "Register" card** that stays put as the user scrolls. Clicking it redirects to the Razorpay payment page.

- **Program:** AI, Python & Game Development Bootcamp 2026
- **Tagline:** Build. Create. Innovate.
- **Mode:** Online
- **Dates:** 14 July 2026 – 1 August 2026 (3 Weeks)
- **Schedule:** Tuesday – Saturday · 15 Live Interactive Sessions
- **Audience:** School students, Grade 8 and above · Beginner-friendly
- **Register link:** `https://pages.razorpay.com/pl_SlBXvS79fu9djn/view`

---

## 2. Goals

1. Excite kids and reassure parents within the first viewport ("No prior coding experience required").
2. Make registering effortless via a persistent, always-visible Register card.
3. Clearly communicate the 3-week journey: Python → Games → AI.
4. Feel playful and energetic through small, theme-relevant animations — without being distracting or slow.
5. Be fast, fully responsive, and accessible.

---

## 3. Register Card Behavior (Important)

The Register button is a **static fixed card** — it does **not** scroll up with the page; it stays pinned in place.

- Use `position: fixed` (e.g. bottom-right on desktop, full-width bottom bar on mobile).
- Always visible regardless of scroll position.
- On click → redirect to the Razorpay link in a new tab:
  ```tsx
  <a
    href={PROGRAM.registerUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="register-card"
  >
    Register Now →
  </a>
  ```
- Add a gentle idle animation (soft pulse / bounce) to draw the eye, and a clear hover state.
- Ensure it never overlaps the footer awkwardly and has a visible focus ring for keyboard users.
- Keep `registerUrl` in `lib/config.ts` so it's a one-line change.

---

## 4. Tech Stack

Lean and static — no backend needed.

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + React + TypeScript** | Static export, easy deploy |
| Styling | **Tailwind CSS** | Fast theming via CSS variables |
| Animation | **Motion (framer-motion)** | Scroll reveals, playful micro-interactions |
| Lightweight visuals | **Lottie (lottie-react)** or **CSS/SVG animations** | Theme animations (Python snake, game sprite, AI bot) |
| Icons | **lucide-react** | Friendly line icons |
| Fonts | **next/font** (self-hosted) | Distinctive, kid-friendly type |
| Deploy | **Vercel / Netlify / GitHub Pages** | Zero-config static hosting |

> Simpler fallback: a single `index.html` + Tailwind CDN + vanilla JS + small CSS/SVG animations works fine if you want zero build tooling. Next.js is the primary recommendation.

---

## 5. File Structure

```
ai-python-bootcamp-2026/
├── CLAUDE.md
├── README.md
├── next.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── animations/              # Lottie JSON files (optional)
│   │   ├── python-snake.json
│   │   ├── game-controller.json
│   │   └── ai-robot.json
│   ├── illustrations/           # SVGs: blobs, stars, code brackets
│   ├── og-image.jpg
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx           # fonts, metadata
│   │   ├── page.tsx             # assembles all sections
│   │   └── globals.css          # Tailwind + CSS variables + keyframes
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx             # headline + tagline + animated mascots
│   │   ├── ProgramInfo.tsx      # dates, mode, schedule, audience cards
│   │   ├── LearningJourney.tsx  # Week 1 → 2 → 3 timeline
│   │   ├── Curriculum.tsx       # day-by-day accordion (3 weeks)
│   │   ├── Projects.tsx         # Python / Game / AI project showcase
│   │   ├── Skills.tsx           # skills-developed badges
│   │   ├── WhyJoin.tsx          # benefit cards
│   │   ├── Certification.tsx    # certificate + awards
│   │   ├── Highlights.tsx       # program highlights strip
│   │   ├── RegisterCard.tsx     # FIXED, non-scrolling register card
│   │   ├── Footer.tsx
│   │   └── ui/
│   │       ├── SectionHeading.tsx
│   │       ├── Reveal.tsx        # Motion scroll-reveal wrapper
│   │       ├── Card.tsx
│   │       ├── FloatingShapes.tsx # decorative animated background blobs
│   │       └── ThemeAnimation.tsx # renders Lottie/SVG by theme key
│   ├── lib/
│   │   ├── config.ts            # ALL program data + registerUrl
│   │   └── motion.ts            # shared animation variants
│   └── hooks/
│       └── useReducedMotion.ts
└── .gitignore
```

---

## 6. Centralized Config (`src/lib/config.ts`)

All copy and the register link live in one place. Example shape:

```ts
export const PROGRAM = {
  name: "AI, Python & Game Development Bootcamp 2026",
  tagline: "Build. Create. Innovate.",
  subtitle: "Learn Python • Build Games • Explore Artificial Intelligence",
  mode: "Online",
  startDate: "14 July 2026",
  endDate: "1 August 2026",
  duration: "3 Weeks",
  schedule: "Tuesday – Saturday",
  sessions: "15 Live Interactive Sessions",
  audience: "School Students (Grade 8 and Above)",
  level: "Beginner-Friendly",
  registerUrl: "https://pages.razorpay.com/pl_SlBXvS79fu9djn/view",
};

export const WEEKS = [
  {
    title: "Week 1: Python Programming Foundations",
    theme: "python",
    days: [
      { day: "Day 1", title: "Introduction to Programming",
        points: ["Understanding Programming", "Introduction to Python", "Installing Development Tools", "Writing First Python Program"] },
      // ... Day 2–5
    ],
    outcome: "Students gain confidence writing Python programs and develop strong logical thinking.",
  },
  // Week 2 (theme: "game"), Week 3 (theme: "ai") ...
];

export const PROJECTS = {
  python: ["Calculator Application", "Quiz Game", "Number Guessing Game", "Password Generator"],
  game: ["Snake Game", "Space Shooter", "Racing Game", "Arcade Style Games"],
  ai: ["AI Study Assistant", "AI Quiz Generator", "AI Story Generator", "AI Productivity Tools"],
};
```

Fill `WEEKS` with the full Day 1–15 breakdown from the program PDF.

---

## 7. Page Sections (in order)

1. **Navbar** — light, simple. Logo/program name left; anchor links (Journey, Projects, Why Join) right.
2. **Hero** — big friendly headline + "Build. Create. Innovate." tagline + "No prior coding experience required" reassurance. Animated theme mascots float here (snake, game controller, robot). Soft floating background blobs.
3. **ProgramInfo** — quick-facts cards: Online · 14 Jul–1 Aug · 3 Weeks · Tue–Sat · 15 Live Sessions · Grade 8+ · Beginner-Friendly.
4. **LearningJourney** — a 3-step visual timeline: Week 1 Python → Week 2 Games → Week 3 AI, each with its themed icon/animation.
5. **Curriculum** — expandable accordion of all 15 days grouped by week, with each week's learning outcome.
6. **Projects** — three tabs/columns (Python, Game, AI) showing the hands-on projects kids will build.
7. **Skills** — playful badge grid (Programming, Logical Thinking, Creativity, Problem Solving, Presentation, etc.).
8. **WhyJoin** — benefit cards (Beginner Friendly, Future Tech, Project-Based, Portfolio, Expert Guidance, Future-Ready).
9. **Certification** — Certificate of Completion + special awards (Best Game, Best AI, Innovation, Outstanding Participation).
10. **Highlights** — colorful strip of the 10 program highlights.
11. **Footer** — program name, dates, contact, copyright.
12. **RegisterCard** — FIXED overlay, present on every screen (see §3).

---

## 8. Design Direction

Aim for **playful / friendly / kid-appropriate**, on a **light theme** with a **soft light-purple accent**.

- **Theme:** Light background (off-white / very light lavender), soft **light-purple** as the primary accent, plus a couple of cheerful secondary colors (e.g. mint green, sunny yellow, coral) used as sharp accents on cards and icons — but keep it tasteful, not chaotic. Define all colors as CSS variables.
- **Typography:** Pick a rounded, friendly display font for headings (something warm and approachable, not Inter/Roboto/Arial) paired with a clean, highly readable rounded body font. Big, confident headline sizes.
- **Rounded everything:** Generous border-radius on cards/buttons, soft shadows — a soft, toy-like feel suits the audience.
- **Theme-relevant animations (the fun part):**
  - **Python:** a small cartoon snake that wiggles, or animated `print("Hello!")` typing effect.
  - **Game dev:** a bouncing pixel sprite, a floating game controller, or a tiny coin-collect animation.
  - **AI:** a friendly robot that blinks/waves, or animated "thinking" dots / neural-network sparkles.
  - Render these via small **Lottie** files or pure CSS/SVG. Keep each one small and looping subtly.
- **Decorative background:** slow-floating soft blobs/stars/code brackets (`FloatingShapes`) for atmosphere — low opacity, never distracting from text.
- **Motion principles:** one well-orchestrated hero entrance with staggered reveals; scroll-triggered fade/slide on each section via `Reveal`; gentle hover bounces on cards. High-impact moments over scattered noise.

> Avoid generic AI aesthetics: no flat purple-gradient-on-white cliché, no default system fonts. Make it feel hand-designed for kids.

---

## 9. Performance & Accessibility

- Honor `prefers-reduced-motion` everywhere (the `useReducedMotion` hook should freeze mascots and disable large transitions).
- Lazy-load Lottie animations; keep JSON files small. Prefer CSS/SVG when an effect is simple.
- Semantic landmarks (`<header> <main> <section> <footer>`), alt text on illustrations, visible focus states.
- The fixed Register card must be keyboard-focusable and screen-reader labeled (e.g. `aria-label="Register for the bootcamp"`).
- Fully responsive 360px → 1440px+. On mobile, the Register card becomes a full-width bottom bar; ensure it doesn't cover key content (add bottom padding to `<main>`).
- Target Lighthouse 90+ across Performance, Accessibility, Best Practices, SEO. Include Open Graph metadata in `layout.tsx`.

---

## 10. Build & Run

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # production build
npm run start    # serve production build
```

For GitHub Pages static hosting, set `output: "export"` in `next.config.mjs` and deploy the `out/` folder.

---

## 11. Definition of Done

- [ ] All sections present, in order, with real program copy from the PDF.
- [ ] Fixed Register card stays pinned while scrolling and redirects to the Razorpay link in a new tab.
- [ ] Light theme with soft light-purple accent; kid-friendly rounded design.
- [ ] Theme-relevant animations for Python, Game Dev, and AI present and looping subtly.
- [ ] `config.ts` holds every editable value (especially `registerUrl` and the Day 1–15 curriculum).
- [ ] Fully responsive; reduced-motion respected; Register card adapts to a bottom bar on mobile.
- [ ] Lighthouse ≥ 90 across the board.
