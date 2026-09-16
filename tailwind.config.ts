import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#050507",
        ink: "#E9E6DE",
        muted: "#8A887F",
        faint: "#55544E",
        line: "rgba(233,230,222,0.09)",
        ember: "#F0C98A",
        emberDim: "rgba(240,201,138,0.55)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Segoe UI",
          "PingFang SC",
          "Hiragino Sans GB",
          "Microsoft YaHei",
          "Noto Sans CJK SC",
          "sans-serif",
        ],
        mono: [
          "SF Mono",
          "JetBrains Mono",
          "Cascadia Code",
          "Consolas",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.06em",
        wide2: "0.22em",
      },
      animation: {
        "slow-pulse": "slow-pulse 9s ease-in-out infinite",
        "slow-drift": "slow-drift 16s ease-in-out infinite alternate",
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        shimmer: "shimmer 7s linear infinite",
      },
      keyframes: {
        "slow-pulse": {
          "0%,100%": { opacity: "0.55" },
          "50%": { opacity: "0.9" },
        },
        "slow-drift": {
          "0%": { transform: "translate3d(0,0,0) scale(1)" },
          "100%": { transform: "translate3d(40px,-30px,0) scale(1.12)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(22px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
