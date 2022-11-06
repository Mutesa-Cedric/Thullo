/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
          "primary":"#2F80ED",
          "heading-1":"#333333",
          "gray-light":"#F2F2F2",
          "gray-dark":"#828282"
      }
    },
  },
  plugins: [],
}
