/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fall: 'fall 6s linear infinite',
      },
      keyframes: {
        fall: {
          '0%':   { transform: 'translateY(-20px) rotate(0deg) translateX(0px)', opacity: '0' },
          '10%':  { opacity: '0.8' },
          '90%':  { opacity: '0.8' },
          '100%': { transform: 'translateY(100vh) rotate(360deg) translateX(100px)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
}
