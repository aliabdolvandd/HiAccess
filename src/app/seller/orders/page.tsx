import { ServerPageProps } from "@/api/server-api/type";
import { getSellerOrders } from "@/api/seller-api/seller-orders";
import { Box, Typography } from "@mui/material";
import { SellerOrdersTable } from "./order-table";

export default async function SellerOrdersPage({
  searchParams,
}: ServerPageProps) {
  const params = await searchParams;
  const orders = getSellerOrders(params);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 8, pt: 4 }}>
      <Typography sx={{ fontSize: "36px", fontWeight: 700 }}>
        سفارش ها
      </Typography>
      <SellerOrdersTable orders={orders} />
    </Box>
  );
}
