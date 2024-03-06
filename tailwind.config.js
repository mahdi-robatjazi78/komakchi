// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // ...
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {

    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: false, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {
       
      }, // common layout tokens (applied to all themes)
      themes: {





        "purple-dark": {

          
          colors: {
            background: "#220029",
            foreground: "#ffffff",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#3B096C",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            // borderWidth: {
            //   small: "1px",
            //   medium: "12px",
            //   large: "3px",
            // },
          },
        },




        "green-dark": {
          // extend: "dark", // <- inherit default values from dark theme
          colors: {
            background: "#002608",
            foreground: "#ffffff",
            primary: {
              50: "#005222",
              100: "#217A0F",
              200: "#369719",
              300: "#4EB524",
              400: "#4EB524",
              500: "#6BD332",
              600: "#98E461",
              700: "#B8F183",
              800: "#D7FAAE",
              900: "#EDFCD6",
              DEFAULT: "#005222",
              foreground: "#ffffff",
            },
            focus: "#8aff8c",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            },
            // borderWidth: {
            //   small: "1px",
            //   medium: "12px",
            //   large: "3px",
            // },
          },
        },







        "blue-dark": {
          colors: {
            background: "#001958",
            foreground: "#C5DCF7",
            primary: {
              50: "#3B096C",
              100: "#520F83",
              200: "#7318A2",
              300: "#9823C2",
              400: "#c031e2",
              500: "#DD62ED",
              600: "#F182F6",
              700: "#FCADF9",
              800: "#FDD5F9",
              900: "#FEECFE",
              DEFAULT: "#000931",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "12px",
              medium: "12px",
              large: "12px",
            },
          },
        },












        light: {

          
          colors: {
            background: "#ffffff",
            foreground: "#000",
            primary: {
              50:  "#F6F6F6",
              100: "#EEEEEE",
              200: "#EEEEEE",
              300: "#CECECE",
              400: "#9E9E9E",
              500: "#5e5e5e",
              600: "#504445",
              700: "#432F32",
              800: "#361D24",
              900: "#2D121B ",
              DEFAULT: "#EEEEEE",
              foreground: "#cccccc",
            },
            focus: "#7a7a7a",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "4px",
              medium: "6px",
              large: "8px",
            }, 
          },
        }, 


        
        dark: {

          
          colors: {
            background: "#2b2b2b",
            foreground: "#ededed",
            primary: {
              50:  "#404040",
              100: "#333333",
              200: "#333333",
              300: "#636363",
              400: "#8a8a8a",
              500: "#a6a6a6",
              600: "#bababa",
              700: "#d9d9d9",
              800: "#432F32",
              900: "#f0f0f0 ",
              DEFAULT: "#404040",
              foreground: "#cccccc",
            },
            focus: "#7a7a7a",
          },
          layout: {
            disabledOpacity: "0.3",
            radius: {
              small: "12px",
              medium: "12px",
              large: "12px",
            },
          },
        }, 

        
        
      },
    }),
  ],
};

export default config;
