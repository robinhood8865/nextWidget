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
        "user-light-blue": "#0CB2FF",
        "user-blue": "#057BFF",
        "user-dark-blue": "#054169",
        "user-light-gray": "#E5F8FD",
      },
    },
  },
  plugins: [],
};
