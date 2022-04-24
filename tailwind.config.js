module.exports = {
  content: ['./app/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter']
      },
      colors: {
        expatify: '#baba39'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
