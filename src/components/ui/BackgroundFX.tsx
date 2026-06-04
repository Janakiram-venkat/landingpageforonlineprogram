"use client";

import dynamic from "next/dynamic";

// Load the WebGL scene only on the client, after hydration, so it never
// blocks first paint and never runs during SSR.
const ThreeBackground = dynamic(() => import("./ThreeBackground"), {
  ssr: false,
});

export function BackgroundFX() {
  return <ThreeBackground />;
}
