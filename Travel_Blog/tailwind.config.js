/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ["Anton", "sans-serif"],
      },
      colors: {
        "areia": "#b8a894",
        "insta": "#C105B5",
        "ceu": "#FAEBD8",
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}