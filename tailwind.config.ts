import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F7F8FC",
        surface: "#FFFFFF",
        ink: "#14162B",
        "ink-soft": "#5B5D73",
        navy: {
          DEFAULT: "#2A34A0",
          light: "#4F4FE0",
          dark: "#1A1F66",
          50: "#EEF0FC",
        },
        violet: {
          DEFAULT: "#7C3AED",
          50: "#F4EEFE",
        },
        gold: {
          DEFAULT: "#C9922B",
          soft: "#E0AC5C",
          50: "#FBF3E7",
        },
        coral: {
          DEFAULT: "#E5527A",
          50: "#FDEDF1",
        },
        mint: {
          DEFAULT: "#16A34A",
          50: "#E9F8EE",
        },
        line: "#E6E8F0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-plex)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      boxShadow: {
        card: "0 1px 2px rgba(20,22,60,0.04), 0 10px 28px -14px rgba(42,52,160,0.18)",
        "card-hover": "0 6px 14px rgba(20,22,60,0.07), 0 24px 46px -16px rgba(42,52,160,0.26)",
        glow: "0 0 0 1px rgba(201,146,43,0.25), 0 10px 32px -12px rgba(201,146,43,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grow-line": {
          "0%": { transform: "scaleX(0)" },
          "100%": { transform: "scaleX(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "grow-line": "grow-line 0.8s cubic-bezier(0.16,1,0.3,1) both",
        float: "float 5s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
