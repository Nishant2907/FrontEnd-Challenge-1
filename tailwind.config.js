/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'ui-gray':'#26252A',
      }
    },
  },
  plugins: [require("daisyui"),
  ],
}

