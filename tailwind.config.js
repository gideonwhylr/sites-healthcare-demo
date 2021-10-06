module.exports = {
  mode: "jit",
  purge: [
    "./partials/**/*.hbs",
    "./pages/**/*.hbs",
    "./templates/**/*.hbs",
    "./src/**/*.js",
    "./src/**/*.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        "ach-blue": "#004590",
        "ach-hover-blue": "#23527c",
        "ach-font-blue": "#004590",
        "ach-green": "green",
        "ach-light-green": "#339933",
        "ach-gray": "#ECECEC",
        "ach-orange": "#ff9900",
        "ach-yellow": "#ffb738"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
