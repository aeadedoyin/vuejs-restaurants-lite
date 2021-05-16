// tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {outline: '0 0 0 3px rgba(66, 153, 225, 0.5)'},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}