// Cinematic dark theme tokens shared across all components.
// Fonts load via @remotion/google-fonts (bundled at build time from
// Google's open-font-license catalog) -- no external CDN calls, no
// copyright risk, and they work in headless rendering.

export const theme = {
  colors: {
    background: "#05070a",
    backgroundGradientEnd: "#12151c",
    accent: "#e6b325",
    accentMuted: "#8a6a1f",
    text: "#f5f5f0",
    textMuted: "#a8a8a0",
    overlay: "rgba(0, 0, 0, 0.55)",
    vignette: "rgba(0, 0, 0, 0.85)",
  },
  video: {
    width: 1920,
    height: 1080,
    fps: 30,
  },
};

export type Theme = typeof theme;
