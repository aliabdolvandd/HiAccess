"use client";

import { createTheme } from "@mui/material/styles";
import { Vazirmatn } from "next/font/google";

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
    Complementary1?: PaletteOptions["primary"];
    Complementary2?: PaletteOptions["primary"];
    Accent?: PaletteOptions["primary"];
  }
}

const vazir = Vazirmatn({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "arabic"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    neutral: {
      main: "#8D99AE",
    },
    primary: {
      main: "#3D405B",
    },
    Complementary1: {
      main: "#D4A373",
    },
    Complementary2: {
      main: "#F4F3EE",
    },
    Accent: {
      main: "#8D99AE",
    },
  },
  colorSchemes: { light: true, dark: false },
  cssVariables: {
    colorSchemeSelector: "class",
  },
  typography: {
    fontFamily: vazir.style.fontFamily,
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
