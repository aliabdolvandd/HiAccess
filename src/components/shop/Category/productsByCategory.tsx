"use client";

import { useShopProductsQuery } from "@/api/shop-api/shop-products";
import { Box, Typography, CircularProgress } from "@mui/material";
import ProductCard from "../ProductCard";
import ProductFilterSidebar from "../Filter/filterSidbar";
import ProductSort from "../Filter/sort";
import { useFilteredAndSortedData } from "../Filter/action";
import { IShopProducts } from "@/api/server-api/type";

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

  const filterProducts = (
    product: IShopProducts,
    filters: typeof initialFilters
  ) => {
    if (filters.categorySlug && product.category?.slug !== filters.categorySlug)
      return false;
    if (filters.available && product.status !== "marketable") return false;
    if (filters.discount && !product.bestSeller?.discount) return false;

    const price = product.bestSeller?.lastPrice ?? 0;
    return price >= filters.priceRange[0] && price <= filters.priceRange[1];
  };

  const sortProducts = (
    a: IShopProducts,
    b: IShopProducts,
    sortType: string
  ) => {
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

  const {
    filteredData: filteredProducts,
    handleFilterChange,
    handleSortChange,
  } = useFilteredAndSortedData(
    products?.results || [],
    initialFilters,
    filterProducts,
    sortProducts
  );

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
    <Box
      display="flex"
      gap={2}
      pt={15}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <ProductFilterSidebar onFilterChange={handleFilterChange} />

      <Box flexGrow={1}>
        <ProductSort onSortChange={handleSortChange} />

        {filteredProducts.length > 0 ? (
          <Box
            display="grid"
            gridTemplateColumns={{
              xs: "repeat(2, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={2}
          >
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Box>
        ) : (
          <Typography textAlign="center" mt={4}>
            محصولی موجود نیست
          </Typography>
        )}
      </Box>
    </Box>
  );
}
