import useProductsBySeller from "@/api/shop-api/pruductsBySeller";

import React from "react";

import { Typography, Button, Stack, Box } from "@mui/material";
import { FormatPrice } from "../FormatPrice";
import { LocalShippingOutlined, Shield } from "@mui/icons-material";
interface Props {
  code: number;
}
export default function SimilarProducts({ code }: Props) {
  const { data, isLoading, isError } = useProductsBySeller(code);

  if (isLoading) {
    return <Typography>در حال بارگذاری...</Typography>;
  }
  if (isError || !data) {
    return <Typography>فروشنده دیگری یافت نشد.</Typography>;
  }

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", mt: 2, width: "100%" }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          borderBottom: "2px solid blue",
          pb: 1,
        }}
      >
        فروشندگان این کالا
      </Typography>
      {data.data.map((product) => (
        <Stack
          key={product.id}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            borderBottom: "1px solid #ddd",
            py: 2,
          }}
        >
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {product.seller.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "green" }}>
              عملکرد عالی
            </Typography>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={14}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Shield sx={{ fontSize: 18 }} />
              <Typography variant="body2">گارانتی 6 ماهه شرکت ورنا</Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <LocalShippingOutlined sx={{ fontSize: 18 }} />
              <Typography variant="body2">ارسال از 1 روز کاری دیگر</Typography>
            </Stack>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", color: "#002366" }}
            >
              {FormatPrice(product.lastPrice)}
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "primary.main",
                borderRadius: 2,
                px: 3,
              }}
            >
              افزودن به سبد
            </Button>
          </Stack>
        </Stack>
      ))}
    </Box>
  );
}
