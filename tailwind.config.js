/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'gray-theme': '#ebebeb'
      },
      backgroundImage: {
        'register-image':
          "url('https://pixabay.com/get/gd994e9825721c7913a13dc0204993819e73bd2124e6f2754b1a3521a481770094bd128ec0622924526314775d2eb983143e459ed3326b61ea8d8731fb8dd108725d8b2849d3a789f7b2f8fbc8c5baa7a_1920.jpg')",

        'login-image':
          "url('https://pixabay.com/get/gca3766d111da034f263175e750f2a881e8c858d2f0c0b91dde6bd276fbf6143d6788bed691eabd0ffa8649347cdc2ada7122a196ca16fe3054231ad1d8f46006ddd9812ffa1a6cba32a854a4bd195244_1920.jpg')"
      }
    }
  },
  plugins: []
}
