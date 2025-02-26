import { AppLayout } from "@/components/layout";
import React, { ComponentProps } from "react";
import UserProfilePage from "./page";
import { Box } from "@mui/material";

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
