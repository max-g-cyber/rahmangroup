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
         * Your new 5-color brand palette is now defined.
         */
        brand: {
          light: "#003566", // Medium Blue
          DEFAULT: "#001D3D", // Dark Navy
          dark: "#000814"  // Near Black (used for primary text)
        },
        accent: {
          light: "#FFD60A", // Light Yellow
          DEFAULT: "#FFC300"  // Golden Yellow (Primary CTA Accent)
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