"use client";

import { IShopProducts } from "@/api/server-api/type";
import { useShopProductsQuery } from "@/api/shop-api/shop-products";
import { useFilteredAndSortedData } from "@/components/Filter/action";
import ProductFilterSidebar from "@/components/Filter/filterSidbar";
import ProductSort from "@/components/Filter/sort";
import ProductCard from "@/components/ProductCard";
import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

export default function AllProductsPage() {
  const { data: products, isError, isLoading } = useShopProductsQuery();

  const initialFilters = {
    sort: "latest" as "latest" | "cheapest" | "expensive",
    available: false,
    discount: false,
    priceRange: [0, 100000000] as [number, number],
  };

  const filterFn = (product: IShopProducts, filters: typeof initialFilters) => {
    let isValid = true;

    if (filters.available) {
      isValid = isValid && product.status === "marketable";
    }

    if (filters.discount) {
      isValid = isValid && Boolean(product.bestSeller?.discount);
    }

    isValid =
      isValid &&
      (product.bestSeller?.lastPrice ?? 0) >= filters.priceRange[0] &&
      (product.bestSeller?.lastPrice ?? 0) <= filters.priceRange[1];

    return isValid;
  };

  const sortFn = (a: IShopProducts, b: IShopProducts, sortType: string) => {
    switch (sortType) {
      case "cheapest":
        return (a.bestSeller?.lastPrice ?? 0) - (b.bestSeller?.lastPrice ?? 0);
      case "expensive":
        return (b.bestSeller?.lastPrice ?? 0) - (a.bestSeller?.lastPrice ?? 0);
      case "latest":
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      default:
        return 0;
    }
  };

  const { filteredData, handleFilterChange, handleSortChange } =
    useFilteredAndSortedData(
      products?.results || [],
      initialFilters,
      filterFn,
      sortFn
    );

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography color="error">خطا در دریافت اطلاعات</Typography>
      </Box>
    );
  }

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

  return (
    <Box display="flex" gap={2} pt={15}>
      <ProductFilterSidebar onFilterChange={handleFilterChange} />
      <Box flexGrow={1}>
        <ProductSort onSortChange={handleSortChange} />
        <Box display="flex" flexWrap="wrap">
          {filteredData.length > 0 ? (
            filteredData.map((product) => (
              <Box key={product.id} sx={{ padding: "8px 16px" }}>
                <ProductCard product={product} />
              </Box>
            ))
          ) : (
            <Typography>محصولی موجود نیست</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
