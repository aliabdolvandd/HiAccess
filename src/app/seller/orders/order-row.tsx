"use client";
import { ISellerOrders } from "@/api/server-api/type";
import { FormatPrice } from "@/components/shop/FormatPrice";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import {
  Box,
  Collapse,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { useState } from "react";

function OrderRow({ order }: { order: ISellerOrders }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>{order.id}</TableCell>
        <TableCell>{order.user.email}</TableCell>
        <TableCell>{order.orderStatus}</TableCell>
        <TableCell>{order.shippingAddress.city}</TableCell>
        <TableCell>
          <IconButton size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
          </IconButton>
        </TableCell>
      </TableRow>

      <TableRow>
        <TableCell colSpan={5} sx={{ p: 0 }}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ m: 2 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell> شناسه کالا </TableCell>
                    <TableCell>تعداد</TableCell>
                    <TableCell>قیمت</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {order.orderItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.productSeller.product}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        {FormatPrice(item.productSeller.price)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
export default OrderRow;
