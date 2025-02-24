import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

export default function Profile() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: 3,
        justifyContent: "center",
      }}
    >
      <Avatar
        alt="User"
        src="/prof.png"
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      <Typography variant="h6" fontWeight="bold">
        کاربر گرامی
      </Typography>
    </Box>
  );
}
