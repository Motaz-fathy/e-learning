/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
      },
    },
  },
  plugins: [
    require("tailwindcss-rtl")
  ],
}