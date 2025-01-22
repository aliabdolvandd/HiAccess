"use client";

import Banner from "@/components/Banner/Banner";
import BestDiscountList from "@/components/BestDiscountCard";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Banner />

        <BestDiscountList />
      </Box>
    </>
  );
}
