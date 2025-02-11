import { IShopProducts } from "@/api/server-api/type";
import PriceProductList from "./price-table";
import { getSellerProducts } from "@/api/seller-api/products";
import { Card, Typography } from "@mui/material";

export default async function MyProductsPage() {
  const response = await getSellerProducts();
  const products: IShopProducts[] = response.results;

  return (
    <Card>
      <Typography sx={{ fontSize: "36px", fontWeight: 700, padding: "20px 0" }}>
        محصولات من
      </Typography>
      <PriceProductList products={products} />
    </Card>
  );
}
