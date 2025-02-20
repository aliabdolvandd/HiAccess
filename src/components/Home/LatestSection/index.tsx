"use client";

import { useShopProductsQuery } from "@/api/shop/shop-products";
import ProductList from "@/components/ProductList";
import { Box, Typography } from "@mui/material";

export default function LatestSection() {
  const { data: products, isLoading, isError } = useShopProductsQuery();
  if (isLoading) {
    return <Typography> در حال دریافت اطلاعات </Typography>;
  }
  if (isError) {
    return <Typography>خطا در دریافت اطلاعات</Typography>;
  }
  return (
    <Box>
      <ProductList
        products={products?.results.slice(0, 6) || []}
        title="جدید ترین های اخیر"
      />
    </Box>
  );
}
