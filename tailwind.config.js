const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: {
          100: '#F9FFF6',
          200: '#F0FEEB',
          500: '#8BAC3E',
        },
        teal: {
          200: '#E6F3F5',
          500: '#40A2B1',
        },
        blue: {
          200: '#EAEEFA',
          500: '#405EB6'
        },
        raspberry: {
          200: '#F9EEF3',
          500: '#B23F74'
        },
        lime: {
          200: '#F3F7D9',
          500: '#A4B441'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
