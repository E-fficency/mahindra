/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient': 'linear-gradient(90deg, #14B7ED 0%, #0554F2 100%)',
        'button-gradient': 'linear-gradient(90deg, #14B7ED 0%, rgba(5, 84, 242, 0.95) 100%)',
      },
      boxShadow: {
        'grid-shadow': ' 1px 1px 10px -1px #0D0D0D',
      },
    },
  },
  plugins: [],
}

