import { ISellerOrders, PaginatedResultApi } from "@/api/server-api/type";
import { TableContainer } from "@/components/tables/TableContainer";
import {
  Box,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { use } from "react";
import OrderRow from "./order-row";

export function SellerOrdersTable({
  orders,
}: {
  orders: Promise<PaginatedResultApi<ISellerOrders>>;
}) {
  const allOrders = use(orders);

  if (!allOrders) {
    return <CircularProgress sx={{ display: "block", margin: "auto" }} />;
  }
  return (
    <Box sx={{ p: 2, width: "75vw" }}>
      <Paper sx={{ borderRadius: 2, boxShadow: 2, overflow: "hidden" }}>
        <TableContainer title="سفارش ها">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>شناسه</TableCell>
                <TableCell>کاربر</TableCell>
                <TableCell>وضعیت</TableCell>
                <TableCell>شهر</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allOrders?.results?.length ? (
                allOrders.results.map((order) => (
                  <OrderRow key={order.id} order={order} />
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    سفارشی یافت نشد!
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
