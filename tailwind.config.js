/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #14B7ED 0%, #0554F2 100%)',
        'button-gradient': 'linear-gradient(90deg, #14B7ED 0%, rgba(5, 84, 242, 0.95) 100%)',
        'pilot-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 50.11%, #5073F1 100.11%)',
        'pilot-gradient-hover': 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 14.52%, #5073F1 61.04%)'
      },
      boxShadow: {
        'grid-shadow': ' 1px 1px 10px -1px #0D0D0D',
        'data-shadow': '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
}

