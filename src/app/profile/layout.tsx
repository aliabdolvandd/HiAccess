import { AppLayout } from "@/components/layout";
import React from "react";

import { Box } from "@mui/material";
import UserProfilePage from "@/components/shop/ProfileSection/profileDrawer";

import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const layout = ({ children }: LayoutProps) => {
  return (
    <AppLayout>
      <Box sx={{ display: "flex" }}>
        <UserProfilePage />
        {children}
      </Box>
    </AppLayout>
  );
};

export default layout;
