import { GetUser } from "@/api/shop-api/server-shop/user-detail";
import { Box } from "@mui/material";
import React from "react";
import AddressTable from "./address-table";

export default async function AddressPage() {
  const address = await GetUser();
  return (
    <Box>
      <AddressTable address={address.profile.addressList} />
    </Box>
  );
}
