/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a365d',
          light: '#2d4ed8',
        },
        secondary: {
          DEFAULT: '#f97316',
          light: '#fb923c',
        }
      },
    },
  },
  plugins: [],
}
