/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#e6f5fc',
          100: '#ccebf9',
          200: '#99d7f3',
          300: '#66c3ed',
          400: '#33afe7',
          500: '#0077BE',
          600: '#005f98',
          700: '#004772',
          800: '#00304c',
          900: '#001826',
        },
      },
    },
  },
  plugins: [],
};
