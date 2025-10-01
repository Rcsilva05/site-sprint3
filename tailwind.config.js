/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0b3553",
        accent: "#f1f9fff",
      },
      spacing: {
        16: '2rem', // 🔥 redefine pt-16 (antes era 4rem, agora será 2rem)
      }
    },
  },
  plugins: [],
}
