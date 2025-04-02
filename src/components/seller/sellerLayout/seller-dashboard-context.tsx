"use client";

import { Box } from "@mui/material";
import SellerHeader from "./seller-header";
import SideMenu from "./slideMenu";

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        zIndex: 1200,
      }}
    >
      <SideMenu />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <SellerHeader />
        <Box
          sx={{
            width: "100%",
            maxWidth: "1200px",
            mt: 3,
            pt: 2,
            margin: "0 auto",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardContent;
