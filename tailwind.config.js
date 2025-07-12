/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Ensures dark mode is opt-in only
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
