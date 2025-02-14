"use client";
import { IShopProducts } from "@/api/server-api/type";
import EditProductModal from "@/components/PriceModal";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Paper,
} from "@mui/material";
import { useState } from "react";

export default function PriceProductList({
  products: initialProducts,
}: {
  products: IShopProducts[];
}) {
  const [products, setProducts] = useState<IShopProducts[]>(initialProducts);
  const [editProduct, setEditProduct] = useState<IShopProducts | null>(null);

  const handleUpdateProduct = (updatedProduct: IShopProducts) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
    setEditProduct(null);
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>کد</TableCell>
              <TableCell>نام فارسی</TableCell>
              <TableCell>نام انگلیسی</TableCell>
              <TableCell>دسته‌بندی</TableCell>
              <TableCell>برند</TableCell>
              <TableCell>وضعیت</TableCell>
              <TableCell>عملیات</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.code}</TableCell>
                <TableCell>{product.titleFa}</TableCell>
                <TableCell>{product.titleEn}</TableCell>
                <TableCell>{product.category.titleFa}</TableCell>
                <TableCell>{product.brand.titleFa}</TableCell>
                <TableCell>
                  {product.status === "marketable" ? "قابل فروش" : "ناموجود"}
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => setEditProduct(product)}
                    color="primary"
                  >
                    ویرایش قیمت
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          // onUpdate={handleUpdateProduct}
        />
      )}
    </>
  );
}
