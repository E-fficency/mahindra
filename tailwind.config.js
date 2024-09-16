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
      },
    },
  },
  plugins: [],
}

