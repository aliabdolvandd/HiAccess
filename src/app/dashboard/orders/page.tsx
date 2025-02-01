import { ServerPageProps } from "@/api/server-api/type";
import { TableContainer } from "@/components/tables/TableContainer";
import { OrdersTable } from "./order-table";
import { getOrders } from "@/api/server-api/orders";

export default async function UsersPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const orders = getOrders(params);
  return (
    <TableContainer createLink="/dashboard/orders/create" title="سفارش ها">
      <OrdersTable orders={orders} />
    </TableContainer>
  );
}
