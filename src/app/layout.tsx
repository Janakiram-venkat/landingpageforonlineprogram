import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";
import { PROGRAM } from "@/lib/config";
import { BackgroundFX } from "@/components/ui/BackgroundFX";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const body = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${PROGRAM.name} | ${PROGRAM.tagline}`,
  description: `${PROGRAM.subtitle}. A ${PROGRAM.duration} beginner-friendly online bootcamp for ${PROGRAM.audience}. ${PROGRAM.reassurance}.`,
  keywords: [
    "coding bootcamp for kids",
    "Python for kids",
    "game development for students",
    "AI for students",
    "online coding camp 2026",
  ],
  openGraph: {
    title: `${PROGRAM.name}`,
    description: `${PROGRAM.subtitle}. ${PROGRAM.reassurance}.`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PROGRAM.name,
    description: PROGRAM.subtitle,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <BackgroundFX />
        {children}
      </body>
    </html>
  );
}
