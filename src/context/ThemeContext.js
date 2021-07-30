import React from "react";



 export const theme = {

  toggleTheme: () => {}, 
  tester: () => {}, 
  darkMode: false,

  colors: {
    brand100: "#F9F8FC",
    brand200: "#F3F1FA",
    brand300: "#E9E6F6",
    brand400: "#D2CCEC",
    brand500: "#BCB3E2",
    brand600: "#9C8FD6",
    brand700: "#6F5CC3",
    brand800: "#553EB5",
    brand900: "#382683",
  },

  themeContainerWidth: {
    grid: {
      containerWidth: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1156px",
        xl: "1156px",
      },
      gutterWidth: "12px",
    },
  },

  themeShadows: {
    shadows: {
      "new-shadow": "0 16px 24px -2px rgba(0, 0, 0, 0.08)",
    },
  },

  themeButtomBorderRadius: {
    rounded: {
      veryLarge: "18px",
    },
  },

  themeFontSize: {
    textSize: {
      size: {
        customSize: "25px",
      },
      height: {
        customSize: "34px",
      },
    },
  },

  themeFontFamily: {
    fontFamily: {
      primary: "equity-text, serif",
    },
  },

  themeTransition: {
    transition: {
      custom: "transform 0.8s linear",
    },
  },

  themeBreakPoints: {
    xs: "375×667",
    sm: "320×529",
    md: "768×529",
    lg: "1366×768",
    xl: "1920×1080",
  },


  test: ""

}
 const ThemeContext = React.createContext(theme);

 export default ThemeContext;
