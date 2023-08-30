/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'header':'Crimson Pro',
        'h1':'Lora',
        'p':'Montserrat'
      },
    },
  },
  plugins: [],
}

