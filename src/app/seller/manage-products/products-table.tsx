"use client";

import { IShopProducts, PaginatedResultApi } from "@/api/server-api/type";
import { FormatPrice } from "@/components/shop/FormatPrice";
import AITable from "@/components/tables/AITable";
import { Edit } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export function ProductTable({
  products,
}: {
  products: PaginatedResultApi<IShopProducts>;
}) {
  return (
    <AITable
      actions={(p) => (
        <Stack direction={"row"}>
          <Tooltip title="ویرایش">
            <IconButton
              color="secondary"
              component={Link}
              href={"/seller/manage-products/update/" + p.code}
            >
              <Edit />
            </IconButton>
          </Tooltip>
        </Stack>
      )}
      data={products}
      schema={[
        {
          title: "کد",
          render: (row: IShopProducts) => row.code,
        },
        {
          title: "نام محصول",
          render: (row) => row.titleFa,
        },
        {
          title: "قیمت محصول",
          render: (row) => FormatPrice(row.bestSeller?.price ?? 0),
        },
        {
          title: "اطلاعات بیشتر",
          render: (row) => <ProductDetails row={row} />,
        },
      ]}
    />
  );
}

function ProductDetails({ row }: { row: IShopProducts }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        color="primary"
        variant="outlined"
        size="small"
      >
        جزئیات
      </Button>
      <Dialog
        disableScrollLock
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>{row.titleFa}</DialogTitle>
        <DialogContent>
          <Avatar
            src={row.images.main}
            alt={row.titleFa}
            sx={{ width: 80, height: 80, mb: 2 }}
          />
          <Typography variant="body2">
            دسته‌بندی: {row.category.titleFa}
          </Typography>
          <Typography variant="body2">برند: {row.brand.titleFa}</Typography>
          <Typography variant="body2">
            موجودی: {row.bestSeller?.count ?? 0}
          </Typography>
          <Typography variant="body2">
            تخفیف: {row.bestSeller?.discount} %
          </Typography>
          <Typography>
            وضعیت : {row.status === "marketable" ? "موجود" : "ناموجود"}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>بستن</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
