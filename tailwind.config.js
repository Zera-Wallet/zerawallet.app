/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "zera-green": "#00FF38",
        "zera-black": "#0B0A07"
      }
    },
  },
  plugins: [],
}
