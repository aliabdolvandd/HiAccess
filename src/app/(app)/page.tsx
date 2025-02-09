"use client";

import Banner from "@/components/Home/Banner/Banner";
import Category from "@/components/Category";
import BestDiscount from "@/components/Home/BestDiscount";
import { Box } from "@mui/material";
import LatestSection from "@/components/Home/LatestSection";
import SellerBanner from "@/components/Home/Banner/SellerBanner";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Banner />
        <LatestSection />
        <Category />
        <BestDiscount />
        <SellerBanner />
      </Box>
    </>
  );
}
