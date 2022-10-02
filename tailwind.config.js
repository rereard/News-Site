/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity:0, transform: 'translateY(40px)' },
          '100%': { opacity:1, transform: 'translateY(0px)' }
        },
        slideDown: {
          '0%': {  opacity:0, transform: 'translateY(-40px)' },
          '100%': { opacity:1, transform: 'translateY(0px)' }
        },
        slideUp: {
          '0%': {  opacity:0, transform: 'translateY(0px)' },
          '100%': { opacity:1, transform: 'translateY(-40px)' }
        }
      },
      animation: {
        fadeInUp: 'fadeInUp 500ms ease-out',
        slideDown: 'slideDown 300ms ease-out',
        slideUp: 'slideUp 300ms ease-out',
      }
    },
  },
  plugins: [],
}
