/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#b3d352",

          "secondary": "#E7E7E7",

          "accent": "#ac9ae0",

          "neutral": "#211523",

          "base-100": "#E5E8EB",

          "info": "#5593CE",

          "success": "#12914B",

          "warning": "#F0BD24",

          "error": "#EB5757",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}