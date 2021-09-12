module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    textColor: {
      'orange': "#FF9A63",
      'yellow': "#F5CE00",
      'bluelight': "#7BC5B9",
      'bluedark': "#099696",
      'teal': "#004261",
      'white': "#ffffff",
    },
    extend: {
      backgroundImage: {
        "landing-page-graphic": "url('./assets/landing-page.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
