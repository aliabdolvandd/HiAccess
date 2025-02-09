"use client";

import Banner from "@/components/Home/Banner/Banner";
import Category from "@/components/Category";
import BestDiscount from "@/components/Home/BestDiscount";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Banner />
        <Category />
        <BestDiscount />
      </Box>
    </>
  );
}
