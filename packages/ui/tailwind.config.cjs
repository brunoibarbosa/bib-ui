/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  jit: true,
  content: {
    relative: true,
    files: ["./src/**/*.{js,ts,jsx,tsx}"],
  },
  theme: {
    fontFamily: {
      sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        white: "#FEFEFE",
        "orange-peel": {
          DEFAULT: "#ffa31c",
          50: "#fff8eb",
          100: "#ffedc6",
          200: "#ffd888",
          300: "#ffbe4a",
          400: "#ffa31c",
          500: "#f98007",
          600: "#dd5b02",
          700: "#b73d06",
          800: "#942e0c",
          900: "#7a260d",
          950: "#461102",
        },
        cinnabar: {
          DEFAULT: "#e74c3c",
          50: "#fef3f2",
          100: "#fde5e3",
          200: "#fcd0cc",
          300: "#f9b0a8",
          400: "#f38276",
          500: "#e74c3c",
          600: "#d53d2d",
          700: "#b33022",
          800: "#942b20",
          900: "#7b2921",
          950: "#43110c",
        },
        corn: {
          DEFAULT: "#f1c40f",
          50: "#fdfde9",
          100: "#fdfbc4",
          200: "#fbf38d",
          300: "#f9e54b",
          400: "#f5d31a",
          500: "#f1c40f",
          600: "#c59009",
          700: "#9d670b",
          800: "#825211",
          900: "#6f4314",
          950: "#412307",
        },
        emerald: {
          DEFAULT: "#2ecc71",
          50: "#f1fcf5",
          100: "#defaea",
          200: "#bef4d4",
          300: "#8beab3",
          400: "#52d689",
          500: "#2ecc71",
          600: "#1d9c53",
          700: "#1b7a43",
          800: "#1a6139",
          900: "#175031",
          950: "#072c18",
        },
        "electric-violet": {
          DEFAULT: "#874dff",
          50: "#f4f2ff",
          100: "#ece7ff",
          200: "#dcd2ff",
          300: "#c1aeff",
          400: "#a480ff",
          500: "#874dff",
          600: "#7e2ffe",
          700: "#6c17ea",
          800: "#5a13c4",
          900: "#4c12a0",
          950: "#2d086d",
        },
        "azure-radiance": {
          DEFAULT: "#2f80ed",
          50: "#eff8ff",
          100: "#dbeefe",
          200: "#bfe2fe",
          300: "#92d1fe",
          400: "#5fb7fb",
          500: "#3a97f7",
          600: "#2f80ed",
          700: "#1c63d9",
          800: "#1d51b0",
          900: "#1d468b",
          950: "#172c54",
        },
        "oslo-gray": {
          50: "#f8f9fa",
          100: "#f3f4f4",
          200: "#e8ebec",
          300: "#d6dbdc",
          400: "#bdc5c8",
          500: "#a2acb0",
          600: "#848f96",
          700: "#788289",
          800: "#646d73",
          900: "#535a5f",
          950: "#363c3f",
        },
        woodsmoke: {
          DEFAULT: "#1c1c1c",
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1c1c1c",
        },
        disabled: {
          background: "#F1F4F4",
          text: "#848F96",
        },
      },
    },
  },
  plugins: [],
};
