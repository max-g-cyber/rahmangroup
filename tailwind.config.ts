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
        /**
         * == NEW THEME: BLUE & ORANGE ==
         * Primary: Deep Royal Blue
         * Accent: Vibrant Orange
         * Background: Clean White/Cool Gray
         */
        theme: {
          background: "#F8FAFC", // Very light cool gray/white
          "background-alt": "#EFF6FF", // Pale blue for subtle distinct sections
          text: "#0F172A",       // Dark Slate for text
          primary: "#1E3A8A",    // Deep Royal Blue (Brand Color)
          "primary-dark": "#172554", // Darker Blue for hover states
          accent: "#F97316",     // Vibrant Orange (Highlights/Buttons)
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
export default config;