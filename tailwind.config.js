/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 👈 enables dark mode using a 'dark' class on <html>
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      // You can extend colors, fonts, etc. later if needed
    },
  },
  plugins: [],
};
