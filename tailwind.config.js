/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: {},
    colors: {
      'pageGray': '#EFEFEF',
      'white': '#FFFFFF'
    },
    fontFamily: {
      en: "'Typewriter-Regular'",
      ar: "'ArbFONTS-Bold'",
      cairo: "'Cairo'"
    },
  },
  plugins: [],
}
