import React from "react";
import UserProfileTable from "./detail-table";
import UserProfilePage from "../page";
import { Box } from "@mui/material";
import { GetUser } from "@/api/shop-api/server-shop/user-detail";

export default async function page() {
  // const user = await auth();
  const user = await GetUser();
  return (
    <Box sx={{ display: "flex" }}>
      <UserProfilePage />
      <UserProfileTable user={user} />
    </Box>
  );
}
