"use client";

import { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent } from "@mui/material";

import { ICategory, PaginatedResultApi } from "@/api/server-api/type";
import CategoryTable from "@/app/seller/category/category-table";
import SellerCategoryForm from "./seller-category-form";
export default function CategoryClientWrapper({
  categories,
}: {
  categories: PaginatedResultApi<ICategory>;
}) {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<ICategory | null>(
    null
  );

  const handleOpen = (category?: ICategory) => {
    setSelectedCategory(category || null);
    setOpen(true);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        افزودن دسته‌بندی
      </Button>
      <CategoryTable categories={categories} onEdit={handleOpen} />

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>
          {selectedCategory ? "ویرایش دسته‌بندی" : "افزودن دسته‌بندی"}
        </DialogTitle>
        <DialogContent>
          <SellerCategoryForm defaultValue={selectedCategory || undefined} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
