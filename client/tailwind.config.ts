import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},

      colors: {
        black: "#2d2f31",
        fadedBlack: "#606060",
        gray: "#363D41",
        fadedGray: "#575D60",
        white: "#FEFEFE",
        fadedWhite: "#F8F8F8",
        purple: "#390B6F",
        grey: "#B8C5CA",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
