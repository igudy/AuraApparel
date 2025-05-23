/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SF Pro", "ui-sans-serif", "system-ui"],
        hiragino: ["Hiragino", "sans-serif"],
        khand: ["Khand", "sans-serif"],
        sfpro: ["SF Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
