"use client";

import SellerProductForm from "@/components/seller/seller-form/seller-product-form";
import { Box, Card, CardContent, Typography } from "@mui/material";

export default function CreateProductPage() {
  return (
    <Box>
      <Card>
        <CardContent>
          <Typography variant="h5">ایجاد محصول جدید</Typography>
          <SellerProductForm />
        </CardContent>
      </Card>
    </Box>
  );
}
