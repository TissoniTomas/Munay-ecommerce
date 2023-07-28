/** @type {import('tailwindcss').Config} */

module.exports = ({
  content: ['./src/**/*.{html,js,jsx,css}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        green: '#bdcf23',
      },
      gridTemplateColumns: {
        '1fr-185px': 'repeat(auto-fit, minmax(185px, 1fr))',
        '1fr-250px': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
