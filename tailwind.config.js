/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./BhabitSiteSections/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF5E00",
        purple: "#8B00FF",
        gainer: "#00CFFF",
        loser: "#FF3B30",
        neutral: "#E0E0E0",
      },
      fontFamily: {
        prosto: ['"Prosto One"', "sans-serif"],
        raleway: ['"Raleway"', "sans-serif"],
      },
      fontWeight: {
        semibold: 600,
        bold: 700,
        medium: 500,
      },
    },
  },
  plugins: [],
};
