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
        theme: {
          primary: "#5a0000", // Your Maroon
          "primary-dark": "#400000", // A darker maroon for hovers
          background: "#fff0db", // Your Beige
          "background-alt": "#fce5c4", // A slightly darker beige for accents
          text: "#211a13", // A dark brown for text, softer than black
        },
        // The yellow accent is still here if needed for specific highlights
        accent: {
          light: "#FFD60A",
          DEFAULT: "#FFC300",
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