/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      screens: {
        "on-tablet": "744px",
        "custom-md": "1592px",
        "img-LgBreakPoint": "1700px",
        "img-MdBreakPoint": "1280px",
        "img-SmBreakPoint": "1023px",
        "home-1108": "1108px",
        "img-startPoint": "420px",
        "qualityCards-betwen": "1448px",
        "qualityCards-display": "1420px",
        "services-1430": "1430px",
        "services-870": "870px",
        "services-678": "678px",
        "quality-573": "573px",
        "kick-1485": "1485px",
        "kick-1024": "1024px",
      },
      borderRadius: {
        36: "36px",
      },
      borderWidth: {
        10: "10px",
      },
      backgroundColor: {
        20: "rgba(255, 255, 255, 0.20)",
        1: "rba(255, 255, 255, 0.01)",
      },
      borderColor: {
        70: "rgba(255, 255, 255, 0.70)",
      },
      backdropFilter: {
        cardBlur: "blur(11px)",
        buttonBlur: "blur(7.5px)",
      },
      padding: {
        50: "50px",
        65: "65px",
        70: "70px",
        19: "19px",
        59: "59px",
      },
      colors: {
        "black-900": "var(--black-900222222, #222)",
        "gradient-end": "rgba(50, 225, 249, 0.50)",
        "gradient-start": "#564CEC",
      },
      fontFamily: {
        "neue-machina": ["Neue Machina", "sans-serif"],
        "epilogue-font": ["Epilogue", "sans-serif"],
        "helvetica-font": ["Helvetica Neue", "sans-serif"],
      },
      fontSize: {
        17: "17px",
        58: "58px",
        27: "27px",
      },
      spacing: {
        54: "54px",
        63: "63px",
      },
      height: {
        108: "108px",
      },
      lineHeight: {
        120: "120%",
        150: "150%",
      },
      backgroundImage: (theme) => ({
        "gradient-gradient-3":
          "linear-gradient(235deg, rgba(50, 225, 249, 0.50) 0%, #564CEC 73.41%)",
      }),
      boxShadow: {
        custom: "0px 0px 4px -1px rgba(0, 0, 0, 0.40)",
      },
      transform: {
        "perspective-1000": "perspective(1000px)",
      },

      width: ["responsive", "hover", "focus", "group-hover"],
      translate: ["responsive", "hover", "focus", "group-hover"],
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".grid-cols-auto": {
          "grid-template-columns": "repeat(auto-fit, minmax(380px, 1fr))",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
