"use client";

import { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import { IShopProducts } from "@/api/server-api/type";
import { updateSellerProduct } from "@/api/seller-api/products";

export default function EditProductModal({
  product,
  onClose,
}: {
  product: IShopProducts | null;
  onClose: () => void;
}) {
  const [price, setPrice] = useState(product?.bestSeller?.lastPrice ?? 0);
  const [count, setCount] = useState(product?.bestSeller?.count ?? 0);
  const [discount, setDiscount] = useState(product?.bestSeller?.discount ?? 0);

  if (!product) return null;

  const handleSave = async () => {
    try {
      await updateSellerProduct(product.code, { price, count, discount });
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={!!product} onClose={onClose}>
      <DialogTitle>ویرایش قیمت {product.titleFa}</DialogTitle>
      <DialogContent>
        <TextField
          label="قیمت جدید"
          type="number"
          fullWidth
          margin="dense"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
        <TextField
          label="تعداد جدید"
          type="number"
          fullWidth
          margin="dense"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <TextField
          label="تخفیف"
          type="number"
          fullWidth
          margin="dense"
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          لغو
        </Button>
        <Button onClick={handleSave} color="primary">
          ذخیره
        </Button>
      </DialogActions>
    </Dialog>
  );
}
