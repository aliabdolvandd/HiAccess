"use client";

import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface Palette {
    neutral: Palette["primary"];
    primary: Palette["primary"];
    Complementary: Palette["primary"];
    Complementary2: Palette["primary"];
    Accent: Palette["primary"];
  }

  interface PaletteOptions {
    neutral?: PaletteOptions["primary"];
    primary?: PaletteOptions["primary"];
    Complementary?: PaletteOptions["primary"];
    Complementary2?: PaletteOptions["primary"];
    Accent?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  direction: "rtl",
  palette: {
    neutral: {
      main: "#8D99AE",
    },
    primary: {
      main: "#3D405B",
    },
    Complementary: {
      main: "#D4A373",
    },
    Complementary2: {
      main: "#F4F3EE",
    },
    Accent: {
      main: "#E36E4F",
    },
  },
  colorSchemes: { light: true, dark: false },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: "VAZIR",
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { severity: "info" },
              style: {
                backgroundColor: "#60a5fa",
              },
            },
          ],
        },
      },
    },
  },
});
export default theme;
