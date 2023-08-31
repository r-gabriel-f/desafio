/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': " url('/src/assets/fondo.jpg')",
       
      }
    },
  },
  plugins: [],
}

