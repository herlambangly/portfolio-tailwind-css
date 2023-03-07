/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    relative: true,
    files: ["./public/**/*.{html,js}", "./index.html"],
    transform: (content) => content.replace(/taos:/g, ""),
  },
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
        secondary: "#475569",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [require("./node_modules/taos/plugin")],
  safelist: ["!duration-0", "!delay-0", 'html.js :where([class*="taos:"]:not(.taos-init))'],
};
