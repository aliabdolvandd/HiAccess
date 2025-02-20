"use client";

import { useShopProductsQuery } from "@/api/shop/shop-products";
import { Box, Typography, CircularProgress } from "@mui/material";
import ProductCard from "../ProductCard";
import ProductFilterSidebar from "../Filter/filterSidbar";
import ProductSort from "../Filter/sort";
import { useFilteredAndSortedProducts } from "../Filter/action";

interface GetProductsByCategoryProps {
  params: { slug: string };
}

export default function GetProductsByCategory({
  params,
}: GetProductsByCategoryProps) {
  const { data: products, isError, isLoading } = useShopProductsQuery();

  const initialFilters = {
    sort: "latest" as "latest" | "cheapest" | "expensive",
    available: false,
    discount: false,
    priceRange: [0, 100000000] as [number, number],
    categorySlug: params.slug,
  };

  const { filteredProducts, handleFilterChange, handleSortChange } =
    useFilteredAndSortedProducts(products?.results || [], initialFilters);

  if (isError) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography color="error">خطا در دریافت محصولات</Typography>
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
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <Typography>محصولی موجود نیست</Typography>
          )}
        </Box>
      </Box>
    </Box>
  );
}
