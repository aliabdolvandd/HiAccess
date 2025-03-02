import React from "react";
import { ProductTable } from "./products-table";
import { ServerPageProps } from "@/api/server-api/type";
import { TableContainer } from "@/components/tables/TableContainer";
import { getSellerProducts } from "@/api/seller-api/products";

export default async function CategoryPage({ searchParams }: ServerPageProps) {
  const params = await searchParams;
  const products = await getSellerProducts(params);
  return (
    <TableContainer title="محصولات" createLink="/seller/manage-products/create">
      <ProductTable products={products} />
    </TableContainer>
  );
}
