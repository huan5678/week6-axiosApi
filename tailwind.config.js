module.exports = {
  mode: "jit",
  purge: ["./*.html", "./*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        padding: "0.9375rem",
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "#00807E",
          dark: "#004E4D",
        },
        secondary: {
          DEFAULT: "#64C3BF",
        },
        gray: {
          DEFAULT: "#818A91",
          light: "#FAFAFA",
        },
      },
      boxShadow: {
        DEFAULT: "0px 3px 6px #00000029",
      },
      fontFamily: {
        sans: [
          "Noto Sans TC",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      gap: {
        DEFAULT: "1.875rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": {
            maxWidth: "540px",
          },
          "@screen md": {
            maxWidth: "720px",
          },
          "@screen lg": {
            maxWidth: "960px",
          },
          "@screen xl": {
            maxWidth: "1140px",
          },
        },
      });
    },
  ],
};
