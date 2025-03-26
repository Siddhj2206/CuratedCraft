/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#000000",
        "dark-gray": "#111111",
        "medium-gray": "#1a1a1a",
        "light-gray": "#333333",
        accent: "#7928CA",
        "accent-light": "#FF0080",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
