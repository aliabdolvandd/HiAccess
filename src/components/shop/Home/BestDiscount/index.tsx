"use client";
import { useShopProductsQuery } from "@/api/shop-api/shop-products";
import ProductList from "@/components/shop/ProductList";
import { Box, Typography } from "@mui/material";

export default function BestDiscount() {
  const { data: products, isLoading, isError } = useShopProductsQuery();
  if (isLoading) {
    return <Typography> در حال دریافت اطلاعات </Typography>;
  }
  if (isError) {
    return <Typography>خطا در دریافت اطلاعات</Typography>;
  }
  const DiscountProducts = products?.results
    .filter((p) => p.bestSeller?.discount)
    .sort(
      (a, b) => (b.bestSeller!.discount || 0) - (a.bestSeller!.discount || 0)
    );
  return (
    <Box>
      <ProductList
        products={DiscountProducts?.slice(0, 6) || []}
        title="پر تخفیف ترین ها "
        href="/discount"
      />
    </Box>
  );
}
