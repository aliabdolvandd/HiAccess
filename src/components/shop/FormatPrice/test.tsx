"use client";

import { Box, Typography } from "@mui/material";
import { useEffect } from "react";

export default function TestEnv() {
  useEffect(() => {
    console.log("✅ Base URL:", process.env.NEXT_PUBLIC_BASE_URL);
  }, []);
  return (
    <Box sx={{ width: "300px", height: "300px" }}>
      {" "}
      <Typography>در حال تست .env</Typography>{" "}
    </Box>
  );
}
