/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f2f7',
          100: '#cce5ef',
          200: '#99cbdf',
          300: '#66b1cf',
          400: '#3397bf',
          500: '#006699',
          600: '#00527a',
          700: '#003d5c',
          800: '#00293d',
          900: '#00141f',
        },
      },
    },
  },
  plugins: [],
};
