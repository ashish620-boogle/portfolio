import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        cream: "#F4F0E8",
        electric: "#0057FF",
      },
      fontFamily: {
        archivo: ["var(--font-archivo)"],
        lexend: ["var(--font-lexend)"],
        public: ["var(--font-public)"],
      },
      boxShadow: {
        brutal: "8px 8px 0px 0px #000000",
        brutalHover: "12px 12px 0px 0px #000000",
      },
    },
  },
  plugins: [],
};

export default config;
