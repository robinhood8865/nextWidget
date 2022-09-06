/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-sky": "#198DDB",
        "user-gray": "#657378",
        "user-green": "#00B761",
        "user-line": "#054169",
      },
    },
  },
  plugins: [],
};
