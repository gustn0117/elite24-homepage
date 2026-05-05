import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f4f6fa",
          100: "#e3e8f1",
          200: "#c0cce0",
          300: "#92a6c8",
          400: "#647aab",
          500: "#465d92",
          600: "#374a78",
          700: "#2d3c61",
          800: "#1f2e4a",
          900: "#0f1d3a",
          950: "#070f24",
        },
        brand: {
          navy: "#0f1d3a",
          navyDeep: "#070f24",
          navyMid: "#1d3557",
          orange: "#f5a623",
          orangeDark: "#c98414",
          gold: "#c9a45c",
          goldLight: "#e2c690",
          goldDark: "#9c7a3c",
        },
        cream: "#faf6ec",
        ivory: "#fdfaf2",
        sand: "#f3ecdb",
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
        serif: [
          "Cormorant Garamond",
          "Noto Serif KR",
          "Times New Roman",
          "serif",
        ],
      },
      letterSpacing: {
        eyebrow: "0.32em",
        wider2: "0.18em",
      },
      boxShadow: {
        soft: "0 14px 40px -22px rgba(15,29,58,0.25)",
        glow: "0 30px 70px -30px rgba(201,164,92,0.45)",
      },
      animation: {
        "fade-up": "fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-up-slow": "fadeUp 1.2s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 1s ease-out both",
        "slide-line": "slideLine 1.4s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideLine: {
          "0%": { transform: "scaleX(0)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
