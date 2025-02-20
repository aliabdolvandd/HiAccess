"use client";

import { IShopProducts, PaginatedResultApi } from "@/api/server-api/type";
import { FormatPrice } from "@/components/FormatPrice";
import EditProductModal from "@/components/PriceModal";
import AITable from "@/components/tables/AITable";
import { Button } from "@mui/material";
import { use, useState } from "react";

export default function PriceProductList({
  products,
}: {
  products: Promise<PaginatedResultApi<IShopProducts>>;
}) {
  const [editProduct, setEditProduct] = useState<IShopProducts | null>(null);

  const handleUpdateProduct = (updatedProduct: IShopProducts) => {
    setEditProduct(null);
  };
  const allProducts = use(products);
  return (
    <>
      <AITable
        data={allProducts}
        schema={[
          {
            title: "کد",
            render: (row) => row.code,
          },
          {
            title: "نام فارسی",
            render: (row) => row.titleFa,
          },
          {
            title: "قیمت",
            render: (row) => FormatPrice(row.bestSeller?.price ?? 0),
          },
          {
            title: "دسته‌بندی",
            render: (row) => row.category.titleFa,
          },
          {
            title: "برند",
            render: (row) => row.brand.titleFa,
          },
          {
            title: "وضعیت",
            render: (row) =>
              row.status === "marketable" ? "قابل فروش" : "ناموجود",
          },
        ]}
        actions={(row) => (
          <Button onClick={() => setEditProduct(row)} color="primary">
            ویرایش قیمت
          </Button>
        )}
      />

      {editProduct && (
        <EditProductModal
          product={editProduct}
          onClose={() => setEditProduct(null)}
          onUpdate={handleUpdateProduct}
        />
      )}
    </>
  );
}
