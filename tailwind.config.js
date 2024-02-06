/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'ping-slow': 'ping 3s linear infinite',
      }
    },
  },
  plugins: [],
}

