/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: [ "Montserrat", "serif"], // Add your font here
      },
      
    },
  },
  plugins: [],
}

