/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#4ade80",
          50: "#e8fce8",
          100: "#c6f6d5",
          200: "#9ae6b4",
          300: "#68d391",
          400: "#4ade80",
          500: "#38a169",
          600: "#2f855a",
          700: "#276749",
          800: "#1e4d38",
          900: "#133326",
        },
        dark: {
          DEFAULT: "#0a0a0a",
          50: "#1a1a1a",
          100: "#171717",
          200: "#141414",
          300: "#111111",
          400: "#0e0e0e",
          500: "#0a0a0a",
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "Fira Code", "monospace"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.3s ease-out forwards",
        blink: "blink 1s step-end infinite",
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
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
