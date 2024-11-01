/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: [
        "Raleway",
        "system-ui",
        "BlinkMacSystemFont",
        "-apple-system",
        "Segoe UI",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Fira Sans",
        "Droid Sans",
        "Helvetica Neue",
        "sans-serif",
      ],
      nunito: ["Nunito"],
    },
    extend: {
      colors: {
        "custom-yellow": {
          100: "#FFE55A",
        },
        "custom-orange": {
          100: "#FFFBF2",
          200: "#F8F3E9",
          300: "#FFFFFF",
          400: "#F89446",
          500: "#F5B730",
        },
        "custom-black": {
          100: "#151515",
        },
        "custom-green": {
          100: "#52B480",
          200: "#B1CA52",
          300: "#418241",
        },
      },
      borderRadius: {
        "product": "20px",
        "button": "14px",
      },
      boxShadow: {
        "product": "0 0 10px 0 rgba(0, 0, 0, 0.07)",
        "tab": "0 0 10px 0 rgba(0, 0, 0, 0.07)",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [],
};

