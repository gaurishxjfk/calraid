/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      screens: {
        'lg': '992px',
      }
    },
    extend: {
      colors: {
        main: '#75917B',
        sec: '#ceae99'
      }
    },
  },
  plugins: [],
}

