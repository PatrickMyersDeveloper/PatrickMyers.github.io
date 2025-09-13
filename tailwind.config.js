/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // scans all HTML & JS inside /src
  theme: {
    extend: {
      colors: {
        cab: '#FFA545',
        cabLight: '#ff4a50',
        rose: '#F2D5BB',
      },
      fontFamily: {
        custom: ['ppmori', 'sans-serif'],
      },
      backgroundImage: {
        'radial-pblue': 'radial-gradient(circle, #cff8DA 0%, #ffffff 70%)', // optional: custom radial gradient
      },
    },
  },
  plugins: [],
}
