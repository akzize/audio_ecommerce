/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  // content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },

    colors: {
      'primary': '#d87d4a',
      'secondary': '#191919',
      'white': '#fafafa',
      'white+': '#f1f1f1',
      'dark': '#000000  '
    },

    fontFamily: {
      'manrope': ['Manrope', 'sans-serif']
    },
    
    extend: {},
  },
  plugins: [],
}

