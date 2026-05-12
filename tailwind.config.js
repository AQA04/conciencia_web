/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-yellow': '#FFD700', // Yellow accent from the reference
        'brand-dark': '#000000',
        'brand-light': '#FFFFFF',
        'brand-gray': '#F5F5F5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // Assuming we use Inter
      }
    },
  },
  plugins: [],
}
