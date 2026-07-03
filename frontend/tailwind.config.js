/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#00539B",
          blueDark: "#003F78",
          blueLight: "#0B74C9",
          orange: "#F36B21",
          orangeDark: "#D95512",
          yellow: "#FFD21F",
          soft: "#F3F8FC",
        },
      },
    },
  },
  plugins: [],
};