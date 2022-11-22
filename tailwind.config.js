/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'offWhite': '#F6F8FF',
        'mainBlue': '#0079ff',
        'blueGray': '#4b6a9b',
        'grayBlue': '#697c9a',
        'mainGray': '#2b3442',
        'blueHover': '#60ABFF',
        'darkHover' : '#222731', 
      },
    },
  },
  plugins: [],
}
