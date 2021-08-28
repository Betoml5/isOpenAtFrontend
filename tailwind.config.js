module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        lightBlue: "#B6C1F2",
        lightPink: "#F2B6CB",
        lightOrange: "#E9E178",
        highOrange: "#F5AB0C",
        highGreen: "#18DE00",
        highBlue: "#0083FF",
        highGreen: "#037B58",
        veryHighOrange: "#D6330C",
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
        hero: "url('static/bg-y.svg')",
      },
      fontFamily: {
        monse: ["Montserrat", "sans-serif"],
      },
      minWidth: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
