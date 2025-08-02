/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        'ebay-red': '#E53238',
        'ebay-dark': '#333333',
        'ebay-light': '#F8F9FA',
      },
    },
  },
  plugins: [],
} 