/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-theme': '#f6f6f6'
      },
      backgroundImage: {
        'register-image':
          "url('../src/assets/images/pages/register.jpg')",

        'login-image':
          "url('../src/assets/images/pages/auth.jpg')",

        'hero-gradient': 'linear-gradient(-45deg, #e94287 0%, #e94287 25%, #e94287 51%,  #ffba27 100%)'
      }
    }
  },
  plugins: []
}
