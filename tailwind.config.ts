import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ieee: {
          blue: "#00629B",
          darkblue: "#003366",
          cyan: "#00B5E2",
          light: "#EBF5FB",
        },
        poster: {
          purpleDark: "#3B0764",
          purple: "#7C3AED",
          purpleLight: "#C084FC",
          bgGradientStart: "#D8B4FE",
          bgGradientEnd: "#581C87",
        },
        coral: {
          red: "#E63946",
          light: "#FF6B6B",
        },
        gold: {
          DEFAULT: "#F4A300",
          bright: "#FFD700",
          glow: "#FFE57F",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        cursive: ["var(--font-cursive)", "Great Vibes", "Caveat", "cursive"],
      },
      backgroundImage: {
        "poster-gradient": "linear-gradient(180deg, #F3E8FF 0%, #C084FC 30%, #7C3AED 70%, #4C1D95 100%)",
        "hero-gradient": "linear-gradient(135deg, #003366 0%, #00629B 40%, #581C87 80%, #3B0764 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(124, 58, 237, 0.1) 0%, rgba(76, 29, 149, 0.4) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
