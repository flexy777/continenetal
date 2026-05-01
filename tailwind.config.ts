import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fdf9ec",
          100: "#faf0c8",
          200: "#f5dd8b",
          300: "#efc34e",
          400: "#eaad27",
          500: "#d48d18",
          600: "#b76b13",
          700: "#924c14",
          800: "#793d18",
          900: "#67331a",
          DEFAULT: "#D4AF37",
          light: "#F4D03F",
          dark: "#B8860B",
        },
        charcoal: {
          50: "#f5f6f7",
          100: "#e6e8eb",
          200: "#cdd1d6",
          300: "#a8aeb8",
          400: "#7c8492",
          500: "#5d6573",
          600: "#494f5b",
          700: "#3c414a",
          800: "#2a2d33",
          900: "#1a1c20",
          950: "#0f1013",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #B8860B 0%, #D4AF37 50%, #F4D03F 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #0f1013 0%, #1a1c20 50%, #2a2d33 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "slide-up": "slideUp 0.6s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(212, 175, 55, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
