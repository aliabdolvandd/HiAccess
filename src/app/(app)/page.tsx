import Banner from "@/components/shop/Home/Banner/Banner";
import Category from "@/components/shop/Category";
import BestDiscount from "@/components/shop/Home/BestDiscount";
import { Box } from "@mui/material";
import LatestSection from "@/components/shop/Home/LatestSection";
import SellerBanner from "@/components/shop/Home/Banner/SellerBanner";
import WhyUsSection from "@/components/shop/Home/WhyUsSection";
import QueryProvider from "@/components/QueryProvider";

export default async function Home() {
  return (
    <QueryProvider>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <Banner />
{/*         <LatestSection /> */}
        <Category />
{/*         <BestDiscount /> */}
        <SellerBanner />
        <WhyUsSection />
      </Box>
    </QueryProvider>
  );
}
