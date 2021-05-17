// tailwind.config.js
module.exports = {
  purge: {
    content:['**/*.html', './public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],  
    options: {
      safelist: ['dark'],
    },
  },
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