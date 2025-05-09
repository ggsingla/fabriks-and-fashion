/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '105rem',
        '10xl': '120rem',
      },
      zIndex: {
        1: 1,
        60: 60,
        70: 70,
        80: 80,
        90: 90,
        100: 100,
      },
      typography: {
        DEFAULT: {
          css: {
            a: {
              textDecoration: 'none',
              '&:hover': {
                opacity: '.75',
              },
            },
          },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderWidth: {
        1: '1px',
      },
      colors: {
        beige: {
          50: '#FDFCF6',
          100: '#FAF6E5',
        },
        background: '#FDFCF6',
        foreground: '#1c1917',
        muted: {
          DEFAULT: '#FAF6E5',
          foreground: '#57534e',
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    plugin(function ({ addUtilities }) {
      const utilBgPatterns = {
        '.pattern-dots-sm': {
          'background-image':
            'radial-gradient(currentColor 0.5px, transparent 0.5px)',
          'background-size': 'calc(10 * 0.5px) calc(10 * 0.5px)',
        },
        '.pattern-dots-md': {
          'background-image':
            'radial-gradient(currentColor 1px, transparent 1px)',
          'background-size': 'calc(10 * 1px) calc(10 * 1px)',
        },
        '.pattern-dots-lg': {
          'background-image':
            'radial-gradient(currentColor 1.5px, transparent 1.5px)',
          'background-size': 'calc(10 * 1.5px) calc(10 * 1.5px)',
        },
        '.pattern-dots-xl': {
          'background-image':
            'radial-gradient(currentColor 2px, transparent 2px)',
          'background-size': 'calc(10 * 2px) calc(10 * 2px)',
        },
      }

      addUtilities(utilBgPatterns)
    }),
    plugin(function ({ addUtilities }) {
      const utilFormSwitch = {
        '.form-switch': {
          border: 'transparent',
          'background-color': colors.gray[300],
          'background-image':
            "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
          'background-position': 'left center',
          'background-repeat': 'no-repeat',
          'background-size': 'contain !important',
          'vertical-align': 'top',
          '&:checked': {
            border: 'transparent',
            'background-color': 'currentColor',
            'background-image':
              "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e\")",
            'background-position': 'right center',
          },
          '&:disabled, &:disabled + label': {
            opacity: '.5',
            cursor: 'not-allowed',
          },
        },
      }

      addUtilities(utilFormSwitch)
    }),
  ],
}
