"use client";

import { useRef, useState } from "react";
import { Box } from "@mui/material";
import { IShopProducts } from "@/api/server-api/type";
import SectionTitle from "../SectionTitle";
import ProductCard from "../ProductCard";

interface ProductListProps {
  products: IShopProducts[];
  title: string;
  href: string;
}

const ProductList = ({ products, title, href }: ProductListProps) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <Box sx={{ pt: 3, px: "15px" }}>
      <SectionTitle title={title} href={href} />
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          overflowX: "auto",
          whiteSpace: "nowrap",
          cursor: isDragging ? "grabbing" : "grab",
          userSelect: "none",
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {products.length > 0 ? (
          products.map((product) => (
            <Box
              key={product.code}
              sx={{
                flex: "0 0 auto",
                maxWidth: "300px",
                minWidth: "250px",
                padding: "10px",
              }}
            >
              <ProductCard product={product} />
            </Box>
          ))
        ) : (
          <Box sx={{ padding: 2 }}>محصولی موجود نیست</Box>
        )}
      </Box>
    </Box>
  );
};

export default ProductList;
