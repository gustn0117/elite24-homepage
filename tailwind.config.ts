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
          900: "#16223a",
          950: "#0c1426",
        },
        brand: {
          navy: "#1d3557",
          navyDeep: "#16223a",
          orange: "#f5a623",
          orangeDark: "#e08e0b",
          orangeSoft: "#fff4e0",
        },
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
      },
      letterSpacing: {
        eyebrow: "0.22em",
        wider2: "0.12em",
      },
      boxShadow: {
        card: "0 8px 28px -16px rgba(15, 29, 58, 0.18)",
        cardHover: "0 22px 50px -22px rgba(15, 29, 58, 0.28)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.8s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
