"use client";
import { useShopProductsQuery } from "@/api/shop-api/shop-products";
import ProductCard from "@/components/ProductCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function LatestPage() {
  const { data: products, isLoading, isError } = useShopProductsQuery();
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }
  if (isError) {
    return <Typography>خطا در دریافت اطلاعات</Typography>;
  }
  const allLatest = products?.results
    .filter((p) => p.bestSeller?.createdAt)
    .sort(
      (a, b) =>
        new Date(b.bestSeller!.createdAt).getTime() -
        new Date(a.bestSeller!.createdAt).getTime()
    );
  return (
    <Box display="flex" flexWrap="wrap" gap={4} pt={15}>
      {allLatest &&
        allLatest.map((product) => (
          <Box key={product.id} sx={{ padding: "8 px 16px" }}>
            <ProductCard product={product} />
          </Box>
        ))}
    </Box>
  );
}
