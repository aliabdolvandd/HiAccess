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
    <Box sx={{ width: "100%", mt: 4 }}>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: "bold",
          borderBottom: "2px solid blue",
          pb: 1,
        }}
      >
        محصولات مشابه
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          // justifyContent: "space-evenly",
        }}
      >
        {data.data.map((product) => (
          <Box
            key={product.id}
            sx={{
              width: { xs: "100%", sm: "48%", md: "30%" }, // ریسپانسیو
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              borderRadius: "8px",
              backgroundColor: "#fff",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
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
                <Typography variant="body2">
                  گارانتی 6 ماهه شرکت ورنا
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={0.5}>
                <LocalShippingOutlined sx={{ fontSize: 18 }} />
                <Typography variant="body2">
                  ارسال از 1 روز کاری دیگر
                </Typography>
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
                  width: "100%",
                  fontSize: "0.875rem",
                  padding: "12px",
                }}
              >
                افزودن به سبد خرید
              </Button>
            </Stack>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
