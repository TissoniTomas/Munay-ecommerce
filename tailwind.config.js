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
        '1fr-150px': 'repeat(auto-fit, minmax(150px, 1fr))',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});
