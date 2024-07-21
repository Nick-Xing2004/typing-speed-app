/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors'); 


module.exports = {      
  content: [
    "./src/**/*.{html,js,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.yellow
      }
    },
  },
  plugins: [],
}

