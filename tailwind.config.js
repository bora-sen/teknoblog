/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'montserrat': ['Montserrat','sans-serif'],
        'sumana': ['Sumana', 'serif'],
      },
      backgroundImage : {
        'hero' : 'url(https://loremflickr.com/1280/720/1)',
      }
    },
  },
  plugins: [],
}
