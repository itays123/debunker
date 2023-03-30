const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      slate: colors.slate,
      gray: colors.gray,
      accent: colors.blue,
    },
    extend: {
      fontFamily: {
        open: ['"Open Sans"', ...fontFamily.sans], // make Open Sans the default font
      },
    },
  },
  plugins: [],
};
