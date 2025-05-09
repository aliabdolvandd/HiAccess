"use client";

import { useShopProductsQuery } from "@/api/shop-api/shop-products";
import ProductList from "@/components/shop/ProductList";
import { Box, Typography } from "@mui/material";

export default function LatestSection() {
  console.log(process.env.NEXT_PUBLIC_BASE_URL);

  const { data: products, isLoading, isError } = useShopProductsQuery();
  if (isLoading) {
    return <Typography> در حال دریافت اطلاعات </Typography>;
  }
  if (isError || !products || !products.results) {
    return <Typography>خطا در دریافت اطلاعات</Typography>;
  }
  const latest = products!.results
    .filter((p) => p.bestSeller?.createdAt)
    .sort(
      (a, b) =>
        new Date(b.bestSeller!.createdAt).getTime() -
        new Date(a.bestSeller!.createdAt).getTime()
    );
  return (
    <Box>
      <ProductList
        products={latest?.slice(0, 6) || []}
        title="جدید ترین های اخیر"
        href="/latest"
      />
    </Box>
  );
}
