import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}", "./examples/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "var(--aura-world)",
        foreground: "var(--aura-text-primary)",
      },
      borderRadius: {
        aura: "var(--aura-radius-md)",
      },
      boxShadow: {
        "aura-e1": "var(--aura-shadow-e1)",
        "aura-e2": "var(--aura-shadow-e2)",
        "aura-e3": "var(--aura-shadow-e3)",
        "aura-e4": "var(--aura-shadow-e4)",
        "aura-e5": "var(--aura-shadow-e5)",
      },
    },
  },
  plugins: [],
};

export default config;
