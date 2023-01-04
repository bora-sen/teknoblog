/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        fadeIn:{
          '0%' : {opacity : 0},
          '100%': {opacity: 1},
        },
      },
      animation : {
        'FadeIn' : 'fadeIn 1s linear ',
      },
      fontFamily : {
        'montserrat': ['Montserrat','sans-serif'],
        'sumana': ['Sumana', 'serif'],
        'silk-display': ['Silkscreen','cursive'],
      },
      backgroundImage : {
        'hero' : 'url(https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&w=1000&q=80)',
      }
    },
  },
  plugins: [],
}
