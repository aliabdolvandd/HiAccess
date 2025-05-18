"use client";

import { useShopProductsQuery } from "@/api/shop-api/shop-products";
import ProductList from "@/components/shop/ProductList";
import { Box, Skeleton, Typography } from "@mui/material";

export default function LatestSection() {
  const { data: products, isLoading, isError } = useShopProductsQuery();
  if (isLoading) {
    return (
      <Skeleton
        variant="rectangular"
        width="100wv"
        height={50}
        animation="wave"
      ></Skeleton>
    );
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
