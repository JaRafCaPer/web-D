module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        metlifeBlue1: "#008edd",
        metlifeBlue2: "#0060a2",
        metlifeGreen: "#a3d043",
        black: "#000000",
        white: "#ffffff",
        beige: "#f5f5dc",
      },
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
        serif: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
