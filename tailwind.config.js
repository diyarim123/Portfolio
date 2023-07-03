/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#111",
        secondary : "#080808",
        brand : "#0aff9d"
      },
      fontFamily : {
        poppins: "'Poppins', sans-serif"
      }
    },
  },
  plugins: [],
}