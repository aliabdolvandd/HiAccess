"use client";

import { Box } from "@mui/material";
import SellerHeader from "./seller-header";
import SideMenu from "./slideMenu";

const DashboardContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <SellerHeader />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginLeft: "280px",
            transition: "margin 0.3s ease-in-out",
            padding: 2,
          }}
        >
          <SideMenu />
          <Box>{children}</Box>
        </Box>
      </Box>
    </>
  );
};

export default DashboardContent;
