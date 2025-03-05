import { Box } from "@mui/material";
import React from "react";
import { AddressTable } from "./address-table";

export default async function AddressPage() {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <AddressTable />
    </Box>
  );
}
