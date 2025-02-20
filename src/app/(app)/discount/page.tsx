"use client";
import { useShopProductsQuery } from "@/api/shop/shop-products";
import ProductCard from "@/components/ProductCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function DiscountPage() {
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
  const allDiscount = products?.results
    .filter((p) => p.bestSeller?.discount)
    .sort(
      (a, b) => (b.bestSeller?.discount || 0) - (a.bestSeller?.discount || 0)
    );
  return (
    <Box display="flex" flexWrap="wrap" gap={4} pt={15}>
      {allDiscount &&
        allDiscount.map((product) => (
          <Box key={product.id} sx={{ padding: "8 px 16px" }}>
            <ProductCard product={product} />
          </Box>
        ))}
    </Box>
  );
}
