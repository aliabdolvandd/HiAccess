"use client";

import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useEffect, useState } from "react";

interface ProductSortProps {
  onSortChange: (sort: "latest" | "cheapest" | "expensive") => void;
}
const ProductSort = ({ onSortChange }: ProductSortProps) => {
  const [sort, setSort] = useState<"latest" | "cheapest" | "expensive">(
    "latest"
  );

  useEffect(() => {
    onSortChange(sort);
  }, [sort, onSortChange]);

  return (
    <Box
      display="flex"
      gap={2}
      justifyContent={{ xs: "center", sm: "start" }}
      mb={2}
      flexWrap="wrap"
    >
      <ToggleButtonGroup
        value={sort}
        exclusive
        onChange={(_, val) => val && setSort(val)}
        fullWidth
        color="primary"
      >
        <ToggleButton value="latest">جدیدترین</ToggleButton>
        <ToggleButton value="cheapest">ارزان‌ترین</ToggleButton>
        <ToggleButton value="expensive">گران‌ترین</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  );
};

export default ProductSort;
