import { useCallback, useState } from "react";

export const useFilteredAndSortedProducts = (
  products: any[],
  initialFilters: any
) => {
  const [filters, setFilters] = useState(initialFilters);

  const handleFilterChange = useCallback(
    (newFilters: Partial<typeof filters>) => {
      setFilters((prev) => ({ ...prev, ...newFilters }));
    },
    []
  );

  const handleSortChange = useCallback((sort: string) => {
    setFilters((prev) => ({ ...prev, sort }));
  }, []);

  const filterProducts = (products: any[], filters: any) => {
    let filteredProducts = products.filter(
      (p) => p.category?.slug === filters.categorySlug
    );

    if (filters.available) {
      filteredProducts = filteredProducts.filter(
        (p) => p.status === "marketable"
      );
    }

    if (filters.discount) {
      filteredProducts = filteredProducts.filter((p) => p.bestSeller?.discount);
    }

    filteredProducts = filteredProducts.filter(
      (p) =>
        (p.bestSeller?.lastPrice ?? 0) >= filters.priceRange[0] &&
        (p.bestSeller?.lastPrice ?? 0) <= filters.priceRange[1]
    );

    return filteredProducts;
  };

  const sortProducts = (products: any[], sortType: string) => {
    return [...products].sort((a, b) => {
      switch (sortType) {
        case "cheapest":
          return (
            (a.bestSeller?.lastPrice ?? 0) - (b.bestSeller?.lastPrice ?? 0)
          );
        case "expensive":
          return (
            (b.bestSeller?.lastPrice ?? 0) - (a.bestSeller?.lastPrice ?? 0)
          );
        case "latest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        default:
          return 0;
      }
    });
  };

  let filteredProducts = filterProducts(products, filters);
  filteredProducts = sortProducts(filteredProducts, filters.sort);

  return {
    filteredProducts,
    filters,
    handleFilterChange,
    handleSortChange,
  };
};
