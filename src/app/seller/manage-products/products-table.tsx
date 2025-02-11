"use client";

import { deleteProductAction } from "@/action/products";
import { IShopProducts, PaginatedResultApi } from "@/api/server-api/type";
import DeleteAlertDialog from "@/components/DeleteAlertDialog";
import { Delete, Edit } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid2,
  IconButton,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import Link from "next/link";

export function ProductTable({
  products,
}: {
  products: PaginatedResultApi<IShopProducts>;
}) {
  return (
    <Grid2 container spacing={3} padding="20px 80px">
      {products.results.map((product) => (
        <Grid2 key={product.code}>
          <Card elevation={3} sx={{ borderRadius: 3, overflow: "hidden" }}>
            {/* تصویر محصول */}
            <CardMedia
              component="img"
              height="160"
              image={product.images.main}
              alt={product.titleFa}
              sx={{ objectFit: "cover" }}
            />
            <CardHeader
              title={product.titleFa}
              subheader={product.titleEn}
              sx={{ textAlign: "center", bgcolor: "#f5f5f5" }}
            />
            <CardContent>
              <Grid2 container spacing={2}>
                <Grid2>
                  <Typography variant="body2">
                    <strong>کد محصول:</strong> {product.code}
                  </Typography>
                  <Typography variant="body2">
                    <strong>وضعیت:</strong>{" "}
                    {product.status === "marketable"
                      ? "قابل فروش"
                      : "غیر قابل فروش"}
                  </Typography>
                  <Typography variant="body2">
                    <strong>دسته‌بندی:</strong> {product.category.titleFa}
                  </Typography>
                  <Typography variant="body2">
                    <strong>برند:</strong> {product.brand.titleFa}
                  </Typography>
                </Grid2>
                <Grid2 xs={6}>
                  <Typography variant="body2">
                    <strong>قیمت:</strong>{" "}
                    {product.bestSeller?.price?.toLocaleString()} تومان
                  </Typography>
                  <Typography variant="body2">
                    <strong>موجودی:</strong> {product.bestSeller?.count}
                  </Typography>
                  <Typography variant="body2">
                    <strong>تخفیف:</strong> {product.bestSeller?.discount}%
                  </Typography>
                  <Typography variant="body2">
                    <strong>بروزرسانی:</strong>{" "}
                    {new Date(product.updatedAt ?? "").toLocaleDateString("fa")}
                  </Typography>
                </Grid2>
              </Grid2>
            </CardContent>
            {/* دکمه‌های اکشن */}
            <Stack direction="row" spacing={1} p={2} justifyContent="center">
              <Tooltip title="ویرایش">
                <IconButton
                  color="secondary"
                  component={Link}
                  href={"/seller/manage-products/update/" + product.code}
                >
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip title="حذف">
                <DeleteAlertDialog
                  onConfirm={async () => deleteProductAction(product.id)}
                >
                  <IconButton color="error">
                    <Delete />
                  </IconButton>
                </DeleteAlertDialog>
              </Tooltip>
            </Stack>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}
