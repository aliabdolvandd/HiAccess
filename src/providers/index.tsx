"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import React, { PropsWithChildren, useEffect, useState } from "react";
import { RtlProvider } from "./RtlProviders";
import { ThemeProvider } from "@emotion/react";
import theme from "@/theme";
import { CssBaseline, GlobalStyles } from "@mui/material";

function Providers({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                backgroundColor: theme.palette.Complementary2.main,
              },
            }}
          />
          {mounted ? <RtlProvider>{children}</RtlProvider> : null}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </>
  );
}

export default Providers;
