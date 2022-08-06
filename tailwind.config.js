/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#363853",
        primay: "#0012FF",
        green: "#67D4CA",
        red: "#F28080",
        "dark-light": "#F8FAFB",
      },
    },
  },
  plugins: [],
};
