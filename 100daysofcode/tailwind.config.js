/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  important: true,

  theme: {
    extend: {
      colors: {
        'charcoal' : '#36454F',
        'blue-dark': '#003049',
        'blue-neutral': '#669bbc',
        'cream':'#fdf0d5',
        'red-dark':'#780000',
        'red-neutral':'#c1121f',

      },

      height: {
        '35': '35rem'
      }
      
    },
  },
  plugins: [],
}