module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        metlifeBlue: '#00B0DD', // Bright blue
        metlifeDarkBlue: '#0060A2', // Dark blue
        metlifeGreen: '#A3D043' , // Bright green
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
