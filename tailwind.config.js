const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html', './src/**/*.vue', './src/**/*.jsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)'
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)'
    }),
    fontSize: {
      pxs: '7px',
      psm: '9px',
      plg: '11px',
      pxl: '13px',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    colors: {
      transparent: 'transparent',
      gray: colors.blueGray,
      blue: colors.indigo,
      green: colors.lime,
      white: colors.white,
      brand: {
        50: '#EEF2FF',
        100: '#247DF3',
        200: '#247DF3',
        300: '#247DF3',
        400: '#6DACFF',
        500: '#247DF3',
        600: '#247DF3',
        700: '#247DF3',
        800: '#247DF3',
        900: '#247DF3'
      }
    },
    extend: {
      screens: {
        print: { raw: 'print' }
      },
      fontFamily: {
        sans: ['FiraGo', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  variants: {
    extend: {
      rotate: ['group-hover']
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
