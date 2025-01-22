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
        <RtlProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </RtlProvider>
      </AppRouterCacheProvider>
      <CssBaseline />
    </>
  );
}

export default Providers;
