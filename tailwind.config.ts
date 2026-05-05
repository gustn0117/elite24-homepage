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
        "float": "float 5s ease-in-out infinite alternate",
        "float-slow": "float 8s ease-in-out infinite alternate",
        "pulse-soft": "pulseSoft 3.4s ease-in-out infinite",
        "spin-slow": "spin 28s linear infinite",
        "spin-rev": "spinRev 36s linear infinite",
        "draw": "draw 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        "shimmer": "shimmer 2.6s linear infinite",
        "blink": "blink 1.6s ease-in-out infinite",
        "rise": "rise 7s ease-in-out infinite",
        "rise-delay": "rise 9s ease-in-out 1.5s infinite",
        "marquee": "marquee 28s linear infinite",
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
        draw: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
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
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
