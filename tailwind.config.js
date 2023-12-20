/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ["pallet-v1"]: "#D7263D",
        ["pallet-v2"]: "#02182B",
        ["pallet-v3"]: "#0197F6",
        ["pallet-v4"]: "#448FA3",
        ["pallet-v5"]: "#68C5DB",
      },
      fontFamily: {
        rubik: ["Rubik Bubbles", "sans-serif"],
        quicksand: ["Quicksand", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
