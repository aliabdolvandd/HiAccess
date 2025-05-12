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
    <Box sx={{ pt: 3, px: { xs: 2, sm: 3, md: 4 } }}>
      <SectionTitle title={title} href={href} />
      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          alignItems: "stretch",
          gap: { xs: 2, sm: 3, md: 4 },
          overflowX: "auto",
          whiteSpace: "nowrap",
          userSelect: "none",
          cursor: isDragging ? "grabbing" : "grab",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
          mt: 2,
          pb: 1,
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
                minWidth: {
                  xs: "200px",
                  sm: "220px",
                  md: "250px",
                  lg: "270px",
                },
                maxWidth: {
                  xs: "220px",
                  sm: "250px",
                  md: "270px",
                  lg: "300px",
                },
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
