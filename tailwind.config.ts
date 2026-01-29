import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f0f0f",
        canvas: "#f7f5f2",
        mist: "#ffffff",
        muted: "#5c5c5c",
        line: "#e6e2da",
        accent: "#0f766e",
        accentDark: "#0a5f58",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(15, 15, 15, 0.6)",
        lift: "0 24px 70px -40px rgba(15, 15, 15, 0.7)",
      },
    },
  },
  plugins: [],
};

export default config;
