import { ServerPageProps } from "@/api/server-api/type";
import { getSellerOrders } from "@/api/seller-api/seller-orders";
import { Box } from "@mui/material";
import { SellerOrdersTable } from "./order-table";

export default async function SellerOrdersPage({
  searchParams,
}: ServerPageProps) {
  const params = await searchParams;
  const orders = getSellerOrders(params);

  return (
    <Box>
      <SellerOrdersTable orders={orders} />
    </Box>
  );
}
