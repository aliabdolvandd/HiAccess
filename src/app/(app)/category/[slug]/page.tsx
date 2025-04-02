"use client";
import GetProductsByCategory from "@/components/shop/Category/productsByCategory";
import { Box } from "@mui/material";
import { useParams } from "next/navigation";
export default function ProductBYCategoryPage() {
  const params = useParams() as { slug: string };
  return (
    <Box>
      <GetProductsByCategory params={params} />
    </Box>
  );
}
