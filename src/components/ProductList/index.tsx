"use client";
import { IProductCard } from "@/type";
import SectionTitle from "../SectionTitle";
import { Box } from "@mui/material";
import Link from "next/link";
import ProductCard from "../ProductCard";

interface ProductListProps {
  products: IProductCard[];
  title: string;
}

const ProductList = ({ products, title }: ProductListProps) => {
  return (
    <Box sx={{ pt: 3, px: "15px" }}>
      <SectionTitle title={title} />
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
          overflow: "hidden",
        }}
      >
        {products.map((product) => (
          <Box
            key={product.code}
            sx={{
              flex: "1 1 calc(25% - 16px)",
              maxWidth: "300px",

              padding: "10px 0",
            }}
          >
            <Link
              style={{ textDecoration: "none" }}
              href={`/products/${product.code}`}
            >
              <ProductCard product={product} />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
