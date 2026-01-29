import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--color-ink)",
        canvas: "var(--color-canvas)",
        mist: "var(--color-mist)",
        muted: "var(--color-muted)",
        line: "var(--color-line)",
        accent: "var(--color-accent)",
        accentDark: "var(--color-accent-dark)",
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
