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
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {products.map((product) => (
          <Link
            style={{ textDecoration: "none" }}
            key={product.code}
            href={`/products/${product.code}`}
          >
            <Box sx={{ flex: "1 1 calc(25% - 16px)", maxWidth: "300px" }}>
              <ProductCard product={product} />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
