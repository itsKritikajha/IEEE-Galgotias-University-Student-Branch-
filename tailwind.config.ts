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
        "hero-gradient": "linear-gradient(135deg, #001f3f 0%, #003366 30%, #4c1d95 70%, #1e1b4b 100%)",
        "card-gradient": "linear-gradient(180deg, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.8) 100%)",
        "radial-gradient": "radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.15), transparent 70%)",
        "grid-pattern": "linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)",
        "dots-pattern": "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
        "shimmer-slide": "shimmer-slide 3s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 6s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(200%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
