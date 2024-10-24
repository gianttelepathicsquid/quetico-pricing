/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        quetico: {
          dark: '#0f172a',
          blue: '#38bdf8',
        }
      }
    },
  },
  plugins: [],
}
