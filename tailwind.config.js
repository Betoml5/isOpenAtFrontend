module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerRed: "#FF3D39",
        greenDot: "#00FF38",
      },
      backgroundImage: {
        restaurant: "url('static/restaurant.png')",
        app: "url('static/bg-image.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
