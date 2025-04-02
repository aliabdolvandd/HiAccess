"use client";

import { Box, Button } from "@mui/material";
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
    <Box display="flex" gap={2} justifyContent="start" mb={2} flexWrap="wrap">
      <Button
        variant={sort === "latest" ? "contained" : "outlined"}
        onClick={() => setSort("latest")}
        sx={{ minWidth: 120 }}
      >
        جدیدترین
      </Button>
      <Button
        variant={sort === "cheapest" ? "contained" : "outlined"}
        onClick={() => setSort("cheapest")}
        sx={{ minWidth: 120 }}
      >
        ارزان‌ترین
      </Button>
      <Button
        variant={sort === "expensive" ? "contained" : "outlined"}
        onClick={() => setSort("expensive")}
        sx={{ minWidth: 120 }}
      >
        گران‌ترین
      </Button>
    </Box>
  );
};

export default ProductSort;
