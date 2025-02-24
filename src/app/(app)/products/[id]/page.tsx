import { ServerPageProps } from "@/api/server-api/type";
import { getProductByCode } from "@/api/shop-api/shop-products";
import ProductDetail from "@/components/ProductsDetaile";
import { Container } from "@mui/material";
import React from "react";

export async function Page({ params }: ServerPageProps) {
  const { id } = await params;
  const product = await getProductByCode(Number(id));
  return (
    <Container maxWidth="xl">
      <ProductDetail product={product} />
    </Container>
  );
}

export default Page;
