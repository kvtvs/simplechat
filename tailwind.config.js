/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: "350px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        mygreen: "rgba(184, 216, 216, 1)",
        mypink: "rgba(209, 82, 243, 1)",
        myblue: "rgba(29, 38, 53, 1)",
        mylapis: "rgba(30, 88, 132, 1)",
      },
      fontFamily: {
        montrserrat: ['"Montserrat"', "sans serif"],
      },
    },
  },
  plugins: [],
};
