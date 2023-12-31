import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      bgBlack: {
        400: "rgb(28, 28, 39)",
        800: "rgb(25, 25, 36)",
      },
      textLight: {
        200: "rgb(136, 146, 176)",
        400: "rgb(177, 178, 179)",
        600: "#ccd6f6",
        800: "rgb(242, 243, 244)",
      },
      accent: {
        400: "#97FFF4",
      },
    },
  },
  plugins: [],
};
export default config;
