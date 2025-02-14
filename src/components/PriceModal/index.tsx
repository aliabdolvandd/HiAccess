"use client";

import { useEffect, useState } from "react";
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
  const [price, setPrice] = useState<string>("");
  const [count, setCount] = useState<string>("");
  const [discount, setDiscount] = useState<string>("");

  useEffect(() => {
    if (product) {
      setPrice(product.bestSeller?.lastPrice?.toString() ?? "");
      setCount(product.bestSeller?.count?.toString() ?? "");
      setDiscount(product.bestSeller?.discount?.toString() ?? "");
    }
  }, [product]);

  if (!product) return null;

  const handleSave = async () => {
    try {
      await updateSellerProduct(product.code, {
        price: price ? Number(price) : 0,
        count: count ? Number(count) : 0,
        discount: discount ? Number(discount) : 0,
      });
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
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          label="تعداد جدید"
          type="number"
          fullWidth
          margin="dense"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <TextField
          label="تخفیف"
          type="number"
          fullWidth
          margin="dense"
          value={discount}
          onChange={(e) => setDiscount(e.target.value)}
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
