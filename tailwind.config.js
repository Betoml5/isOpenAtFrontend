module.exports = {
  purge: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        headerRed: "#DA0037",
        greenDot: "#00FF38",
        lightGreen: "#5FF191",
        lightRed: "#F26060",
        lightDark: "#1C1D1C",
        lightWhite: "#EDEDED",
        veryDark: "#171717",
        bodyBackground: "#444444",
        trans: "background: rgba(255, 255, 255, 0.45)",
        highLight: "#39EC84",
        veryLightRed: "#F2573D",
        veryLightWhite: "#EDEDED",
      },
      backgroundImage: {
        restaurant: "url('static/restaurant.png')",
        app: "url('static/bg-image.png')",
      },
      fontFamily: {
        monse: ["Montserrat", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
