"use client";

import Banner from "@/components/Banner/Banner";
import BestDiscountList from "@/components/BestDiscountCard";
import Category from "@/components/Category";
import { Box, Container } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        <Banner />
        <Category />
        <BestDiscountList />
      </Box>
    </>
  );
}
