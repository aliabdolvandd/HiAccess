"use client";
import {
  Box,
  FormControlLabel,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

interface ProductFilterSidebarProps {
  onFilterChange: (filters: { available: boolean; discount: boolean }) => void;
}

const ProductFilterSidebar = ({
  onFilterChange,
}: ProductFilterSidebarProps) => {
  const [filters, setFilters] = useState({
    available: false,
    discount: false,
  });

  useEffect(() => {
    onFilterChange(filters);
  }, [filters, onFilterChange]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      [event.target.name]: event.target.checked,
    }));
  };

  return (
    <Box
      sx={{
        width: 250,
        padding: 2,
        borderRadius: 2,
        boxShadow: 2,
        bgcolor: "background.paper",
        height: "fit-content",
        position: "sticky",
        top: 100,
      }}
    >
      <Typography variant="h6" fontWeight="bold" mb={2}>
        فیلتر محصولات
      </Typography>

      <Stack spacing={2}>
        <FormControlLabel
          control={
            <Switch
              name="available"
              checked={filters.available}
              onChange={handleCheckboxChange}
            />
          }
          label="فقط محصولات موجود"
        />
        <FormControlLabel
          control={
            <Switch
              name="discount"
              checked={filters.discount}
              onChange={handleCheckboxChange}
            />
          }
          label="فقط محصولات دارای تخفیف"
        />
      </Stack>
    </Box>
  );
};

export default ProductFilterSidebar;
