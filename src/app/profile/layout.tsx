import { AppLayout } from "@/components/layout";
import React, { ComponentProps } from "react";

import { Box } from "@mui/material";
import UserProfilePage from "@/components/shop/ProfileSection/profileDrawer";

const layout = ({ children }: ComponentProps<"div">) => {
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
