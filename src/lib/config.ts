export const PROGRAM = {
  name: "AI, Python & Game Development Bootcamp 2026",
  shortName: "Bootcamp 2026",
  tagline: "Build. Create. Innovate.",
  subtitle: "Learn Python • Build Games • Explore Artificial Intelligence",
  reassurance: "No prior coding experience required",
  mode: "Online",
  medium: "English",
  fee: "₹1,000",
  startDate: "15 July 2026",
  startDateISO: "2026-07-15T19:00:00+05:30",
  endDate: "31 July 2026",
  duration: "3 Weeks",
  schedule: "Tuesday – Saturday",
  sessions: "15 Live Interactive Sessions",
  time: "7:00 – 8:00 PM IST",
  audience: "School Students (Grade 6 and Above)",
  audienceShort: "For School Students · Grade 6 & above",
  level: "Beginner-Friendly",
  registerUrl: "https://pages.razorpay.com/pl_SlBXvS79fu9djn/view",
  contactEmail: "director@stempocketlab.in",
  contactPhone: "+917893652869",
};

export type ThemeKey = "python" | "game" | "ai";

export const QUICK_FACTS = [
  { label: "Mode", value: "Online", icon: "globe", color: "var(--purple)" },
  { label: "Dates", value: "15 – 31 Jul", icon: "calendar", color: "var(--coral)" },
  { label: "Duration", value: "3 Weeks", icon: "clock", color: "var(--mint)" },
  { label: "Days", value: "Tue – Sat", icon: "sun", color: "var(--sunny)" },
  { label: "Time", value: "7 – 8 PM IST", icon: "clock", color: "var(--sky)" },
  { label: "Sessions", value: "15 Live", icon: "video", color: "var(--sky)" },
  { label: "Audience", value: "Grade 6+", icon: "users", color: "var(--purple-deep)" },
  { label: "Level", value: "Beginner", icon: "sparkles", color: "var(--coral)" },
  { label: "Medium", value: "English", icon: "languages", color: "var(--sky)" },
  { label: "Fee", value: "₹1,000", icon: "tag", color: "var(--mint)" },
];

export const WEEKS = [
  {
    title: "Python Programming Foundations",
    theme: "python" as ThemeKey,
    badge: "Week 1",
    summary: "Speak the language of computers and think like a programmer.",
    days: [
      {
        day: "Day 1",
        title: "Introduction to Programming",
        points: [
          "Understanding what programming is",
          "Introduction to Python",
          "Installing development tools",
          "Writing your first Python program",
        ],
      },
      {
        day: "Day 2",
        title: "Variables & Data Types",
        points: [
          "Numbers, text and booleans",
          "Storing data in variables",
          "Taking user input",
          "Simple calculations",
        ],
      },
      {
        day: "Day 3",
        title: "Logic & Decisions",
        points: [
          "If / else statements",
          "Comparison & logical operators",
          "Making smart programs",
          "Mini decision games",
        ],
      },
      {
        day: "Day 4",
        title: "Loops & Repetition",
        points: [
          "For and while loops",
          "Repeating tasks automatically",
          "Patterns and counters",
          "Building a number guessing game",
        ],
      },
      {
        day: "Day 5",
        title: "Functions & Mini Project",
        points: [
          "Writing reusable functions",
          "Lists and collections",
          "Build a Calculator App",
          "Build a Quiz Game",
        ],
      },
    ],
    outcome:
      "Students gain confidence writing Python programs and develop strong logical thinking.",
  },
  {
    title: "Game Development",
    theme: "game" as ThemeKey,
    badge: "Week 2",
    summary: "Turn code into colourful, playable games you can share.",
    days: [
      {
        day: "Day 6",
        title: "Game Design Basics",
        points: [
          "How games work",
          "Introduction to Pygame",
          "Drawing shapes & sprites",
          "The game loop",
        ],
      },
      {
        day: "Day 7",
        title: "Movement & Controls",
        points: [
          "Keyboard and mouse input",
          "Moving characters on screen",
          "Speed and direction",
          "Smooth animation",
        ],
      },
      {
        day: "Day 8",
        title: "Collisions & Scoring",
        points: [
          "Detecting collisions",
          "Adding points and lives",
          "Sound effects",
          "Build the classic Snake Game",
        ],
      },
      {
        day: "Day 9",
        title: "Levels & Challenges",
        points: [
          "Enemies and obstacles",
          "Increasing difficulty",
          "Power-ups and coins",
          "Build a Space Shooter",
        ],
      },
      {
        day: "Day 10",
        title: "Polish & Showcase",
        points: [
          "Start screens & game over screens",
          "Adding music",
          "Build an Arcade-style game",
          "Showcase your game",
        ],
      },
    ],
    outcome:
      "Students design, build and play their own original games — combining creativity with code.",
  },
  {
    title: "Artificial Intelligence",
    theme: "ai" as ThemeKey,
    badge: "Week 3",
    summary: "Discover how AI thinks and build smart helpers of your own.",
    days: [
      {
        day: "Day 11",
        title: "What is Artificial Intelligence?",
        points: [
          "AI in everyday life",
          "How machines learn",
          "Smart vs. ordinary programs",
          "Exploring AI tools",
        ],
      },
      {
        day: "Day 12",
        title: "Talking to AI",
        points: [
          "Introduction to AI assistants",
          "Writing great prompts",
          "Connecting Python to AI",
          "Build an AI Study Assistant",
        ],
      },
      {
        day: "Day 13",
        title: "Creative AI",
        points: [
          "AI that writes and imagines",
          "Generating stories and ideas",
          "Build an AI Story Generator",
          "Responsible & safe AI use",
        ],
      },
      {
        day: "Day 14",
        title: "AI Productivity Tools",
        points: [
          "Automating boring tasks",
          "Build an AI Quiz Generator",
          "Build handy AI productivity tools",
          "Polishing your projects",
        ],
      },
      {
        day: "Day 15",
        title: "Final Project & Graduation",
        points: [
          "Plan your capstone project",
          "Build & present your creation",
          "Awards & certificates",
          "Celebrate your journey 🎉",
        ],
      },
    ],
    outcome:
      "Students understand the basics of AI and build real, useful AI-powered tools they can be proud of.",
  },
];

export const PROJECTS: Record<ThemeKey, { label: string; items: string[] }> = {
  python: {
    label: "Python Projects",
    items: [
      "Calculator Application",
      "Quiz Game",
      "Number Guessing Game",
      "Password Generator",
    ],
  },
  game: {
    label: "Game Projects",
    items: ["Snake Game", "Space Shooter", "Racing Game", "Arcade Style Games"],
  },
  ai: {
    label: "AI Projects",
    items: [
      "AI Study Assistant",
      "AI Quiz Generator",
      "AI Story Generator",
      "AI Productivity Tools",
    ],
  },
};

export const SKILLS = [
  { label: "Programming", emoji: "💻" },
  { label: "Logical Thinking", emoji: "🧠" },
  { label: "Creativity", emoji: "🎨" },
  { label: "Problem Solving", emoji: "🧩" },
  { label: "Game Design", emoji: "🎮" },
  { label: "AI Literacy", emoji: "🤖" },
  { label: "Presentation", emoji: "🎤" },
  { label: "Collaboration", emoji: "🤝" },
  { label: "Confidence", emoji: "⭐" },
];

export const WHY_JOIN = [
  {
    title: "Beginner Friendly",
    desc: "Start from zero — every concept is taught step by step, no experience needed.",
    emoji: "🌱",
    color: "var(--mint)",
  },
  {
    title: "Future Tech",
    desc: "Learn Python and AI — the most in-demand skills of tomorrow.",
    emoji: "🚀",
    color: "var(--purple)",
  },
  {
    title: "Project-Based",
    desc: "Learn by building real games and apps, not just watching slides.",
    emoji: "🛠️",
    color: "var(--coral)",
  },
  {
    title: "Build a Portfolio",
    desc: "Finish with a collection of projects you can show off to anyone.",
    emoji: "📁",
    color: "var(--sky)",
  },
  {
    title: "Expert Guidance",
    desc: "Live interactive sessions with mentors who make coding fun.",
    emoji: "🧑‍🏫",
    color: "var(--sunny)",
  },
  {
    title: "Future-Ready",
    desc: "Build confidence and creativity that helps in school and beyond.",
    emoji: "🌟",
    color: "var(--purple-deep)",
  },
];

export const AWARDS = [
  { title: "Best Game Award", emoji: "🏆" },
  { title: "Best AI Project", emoji: "🤖" },
  { title: "Innovation Award", emoji: "💡" },
  { title: "Outstanding Participation", emoji: "🌟" },
];

export const HIGHLIGHTS = [
  "100% Live & Interactive",
  "Beginner Friendly",
  "Hands-on Projects",
  "Learn Python",
  "Build Real Games",
  "Explore AI",
  "Certificate of Completion",
  "Fun Awards",
  "Expert Mentors",
  "Build a Portfolio",
];

export const MENTORS = [
  { name: "Dr. Vipin Padhinjarath", role: "Resource Person", photo: "person1" },
  { name: "Dr. Sabeel M Basheer", role: "Resource Person", photo: "person2" },
  { name: "Janaki Ram", role: "Resource Person", photo: "person3" },
] as const;

export const NAV_LINKS = [
  { label: "Journey", href: "#journey" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Projects", href: "#projects" },
  { label: "Mentors", href: "#mentors" },
  { label: "Why Join", href: "#why" },
];
