import { useCallback, useState } from "react";

export const useFilteredAndSortedData = <T, F extends { sort: string }>(
  data: T[],
  initialFilters: F,
  filterFn: (item: T, filters: F) => boolean,
  sortFn: (a: T, b: T, sortType: string) => number
) => {
  const [filters, setFilters] = useState<F>(initialFilters);

  const handleFilterChange = useCallback((newFilters: Partial<F>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  const handleSortChange = useCallback((sort: string) => {
    setFilters((prev) => ({ ...prev, sort }));
  }, []);

  let filteredData = data.filter((item) => filterFn(item, filters));
  filteredData = [...filteredData].sort((a, b) => sortFn(a, b, filters.sort));

  return {
    filteredData,
    filters,
    handleFilterChange,
    handleSortChange,
  };
};
