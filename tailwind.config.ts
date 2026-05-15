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
          50: "#f4f7fc",
          100: "#e7edf6",
          200: "#c8d4e8",
          300: "#9fb3d4",
          400: "#7691bc",
          500: "#5675a4",
          600: "#3f5a82",
          700: "#324768",
          800: "#283853",
          900: "#1d3557",
          950: "#0f1d3a",
        },
        brand: {
          navy: "#1d3557",
          navyDeep: "#16223a",
          orange: "#f5a623",
          orangeDark: "#e08e0b",
          orangeSoft: "#fff4e0",
          coral: "#ff8c5a",
          sky: "#e0f2fe",
          skyDeep: "#bae6fd",
          peach: "#fff1e0",
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
        card: "0 8px 28px -16px rgba(15, 29, 58, 0.12)",
        cardHover: "0 22px 50px -22px rgba(15, 29, 58, 0.22)",
        glow: "0 18px 40px -16px rgba(245, 166, 35, 0.45)",
        soft: "0 4px 16px -8px rgba(15, 29, 58, 0.10)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.8s ease-out both",
        "float": "float 5s ease-in-out infinite alternate",
        "float-slow": "float 8s ease-in-out infinite alternate",
        "pulse-soft": "pulseSoft 3.4s ease-in-out infinite",
        "spin-slow": "spin 28s linear infinite",
        "spin-rev": "spinRev 36s linear infinite",
        "blink": "blink 1.6s ease-in-out infinite",
        "rise": "rise 7s ease-in-out infinite",
        "rise-delay": "rise 9s ease-in-out 1.5s infinite",
        "shimmer": "shimmer 2.6s linear infinite",
        "wave": "wave 1.6s ease-in-out infinite",
        "ken-burns": "kenBurns 24s ease-in-out infinite alternate",
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
        float: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.85" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
        },
        spinRev: {
          "0%": { transform: "rotate(360deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        blink: {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "1" },
        },
        rise: {
          "0%": { transform: "translateY(8%)", opacity: "0" },
          "20%": { opacity: "1" },
          "80%": { opacity: "1" },
          "100%": { transform: "translateY(-110%)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        wave: {
          "0%, 100%": { transform: "scaleY(0.4)" },
          "50%": { transform: "scaleY(1)" },
        },
        kenBurns: {
          "0%":   { transform: "scale(1)    translate(0,    0)" },
          "100%": { transform: "scale(1.12) translate(-1.5%, -1%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
