"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React, { PropsWithChildren } from "react";
import { RtlProvider } from "./RtlProviders";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import { CssBaseline } from "@mui/material";

function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <RtlProvider>{children}</RtlProvider>
        </ThemeProvider>
      </AppRouterCacheProvider>
      <CssBaseline />
    </>
  );
}

export default Providers;
