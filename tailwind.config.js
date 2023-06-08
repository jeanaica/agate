/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

import {
  aHoverStyles,
  aStyles,
  generateDarkHeaderStyles,
  generateHeaderStyles,
  getColor,
} from './styles/base';

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '385px', // Define your custom breakpoint value
      },
      colors: {
        midnight: {
          DEFAULT: '#5C5168',
          100: '#E3DFE9',
          200: '#C8C3DB',
          300: '#AEA7CD',
          400: '#938CBF',
          500: '#676A93',
          600: '#3B3E56',
          700: '#1B2A45',
          800: '#0A1734',
          900: '#002546',
        },
        peach: {
          DEFAULT: '#FFDAB9',
          100: '#FFF9F4',
          200: '#FFF0E7',
          300: '#FFE7DA',
          400: '#FFDECD',
          500: '#FFCFA4',
          600: '#E0BCA3',
          700: '#C19E8D',
          800: '#A38077',
          900: '#856261',
        },
      },
      fontFamily: {
        serif: ['var(--font-marcellus)'],
        sans: ['var(--font-epilogue)'],
        marcellus: ['Marcellus', 'serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, theme }) {
      const headerStyles = generateHeaderStyles(theme);
      const darkHeaderStyles = generateDarkHeaderStyles(theme);

      addBase({
        a: aStyles(theme),
        '.dark a': getColor(theme('colors.peach.600')),
        body: {
          color: theme('colors.midnight.900'),
          fontFamily: theme('fontFamily.serif'),
          fontSize: theme('fontSize.xl'),
          lineHeight: '2em',
        },
        '.dark body': getColor(theme('colors.peach.100')),
        p: {
          fontSize: theme('fontSize.base'),
          textAlign: 'justify',
          hyphens: 'auto',
        },
        ...headerStyles,
        ...darkHeaderStyles,
      });
    }),
  ],
};
