/** @type {import('tailwindcss').Config} */
module.exports = {
  content:[
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "red": "#A30926",
        "gray": "#5A5A5A",
        "darkGray": "#303030",
      },
      fontSize: {
        "4xl": "2.5rem",
        "3xl": "2rem",
      }
    },
  },
  plugins: [],
}

