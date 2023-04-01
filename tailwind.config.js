/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: 'rgb(var(--color-primary) / <alpha-value>)',
      secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
      purple: 'rgb(var(--color-purple) / <alpha-value>)',
      black: 'rgb(var(--color-black) / <alpha-value>)',
      white: 'rgb(var(--color-white) / <alpha-value>)',
      gray: 'rgb(var(--color-gray) / <alpha-value>)',
      'gray-dark': 'rgb(var(--color-gray-dark) / <alpha-value>)',
      'gray-light': 'rgb(var(--color-gray-light) / <alpha-value>)',
    },
    screens: {
      sm: '36rem',
      md: '48rem',
      lg: '62rem',
      xl: '65rem',
    },
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
        },
      },
    },
  },
  plugins: [],
};
