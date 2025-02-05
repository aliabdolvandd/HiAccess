import React, { useState } from "react";
import { Box, Card, CardMedia, Grid, Grid2, Typography } from "@mui/material";
import Link from "next/link";

const products = [
  {
    id: 1,
    image: "/image.png",
    hoverImage: "imageh.png",
    title: "گوشی موبایل",
  },
  {
    id: 2,
    image: "/imagel.png",
    hoverImage: "/imagelh.png",
    title: "لپ‌تاپ",
  },
  {
    id: 3,
    image: "/imagehd.png",
    hoverImage: "/imagehdh.png",
    title: "هدفون",
  },
  {
    id: 4,
    image: "/imagej.png",
    hoverImage: "/imagejh.png",
    title: "لوازم جانبی",
  },
];

const Category = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, px: "15px" }}>
      <Typography sx={{ fontSize: "36px", fontWeight: "700" }}>
        دسته‌بندی
      </Typography>

      <Box
        sx={{
          //   backgroundColor: "#f5f5f5",
          p: 4,
          width: "100%",
        }}
      >
        <Grid2 container sx={{ gap: 23, px: 10 }}>
          {products.map((product, index) => (
            <Grid2
              key={product.id}
              sx={{
                position: "relative",
                marginTop: index % 2 === 0 ? "100px" : "0px",
              }}
              onMouseEnter={() => setHovered(product.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <Link href={`/category/${product.title}`}>
                <Card
                  sx={{
                    borderRadius: "8px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={
                      hovered === product.id
                        ? product.hoverImage
                        : product.image
                    }
                    alt={`Product ${product.id}`}
                    sx={{
                      objectFit: "cover",
                      transition: "all 1s ease-in-out",
                      width: "215px",
                      height: "500px",
                    }}
                  />

                  {/* description*/}
                  {hovered === product.id && (
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "25%",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                        transition: "all 0.9s ease-in-out",
                      }}
                    >
                      {product.title}
                    </Box>
                  )}
                </Card>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Category;
