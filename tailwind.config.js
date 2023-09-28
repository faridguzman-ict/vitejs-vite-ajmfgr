/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,tsx,jsx,vue}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    require("@headlessui/vue"),
    require("@tailwindcss/forms")
  ],
}
