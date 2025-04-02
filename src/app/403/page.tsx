"use client";
import { Box, Typography } from "@mui/material";

export default function ForbiddenPage() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pt: 40,
      }}
    >
      <Typography
        sx={{ fontSize: "40px", fontWeight: "700", color: "primary.main" }}
      >
        403 - دسترسی غیرمجاز
      </Typography>
    </Box>
  );
}
