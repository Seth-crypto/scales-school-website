import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1e3a5f",
          light: "#2d5a87",
          dark: "#152a45",
        },
        secondary: {
          DEFAULT: "#4a9c6d",
          light: "#6bb88a",
          dark: "#3a7a56",
        },
        accent: {
          DEFAULT: "#d4a853",
          light: "#e8c77b",
          dark: "#b8913f",
        },
        cream: "#faf8f5",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
