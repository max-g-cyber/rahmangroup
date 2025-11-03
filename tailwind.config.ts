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
         * == ADJUSTABLE PARAMETERS (RULE 3) ==
         * Your new "Eco-Industrial + Gold" palette
         */
        theme: {
          background: "#F0EAD6", // Sand/Tan
          text: "#4A4A4A",       // Dark Brown
          primary: "#22573D",    // Forest Green
          "primary-dark": "#1a432e", // Darker Green
          accent: "#B8860B",     // Gold
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