import React, { useState } from "react";
import { Box, Card, Grid2, Typography } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

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

const MotionCard = motion(Card);
const MotionImage = motion.img;

const Category = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, px: "15px" }}>
      <Typography sx={{ fontSize: "36px", fontWeight: "700" }}>
        دسته‌بندی
      </Typography>

      <Box sx={{ p: 4, width: "100%" }}>
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
                {/* shadow */}
                <MotionCard
                  initial={{ y: 0, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
                  animate={
                    hovered === product.id
                      ? { y: -10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }
                      : { y: 0, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }
                  }
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/*change image*/}
                  <MotionImage
                    src={
                      hovered === product.id
                        ? product.hoverImage
                        : product.image
                    }
                    alt={`Product ${product.id}`}
                    initial={{ opacity: 1 }}
                    animate={{
                      y: hovered === product.id ? -10 : 0,
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
                      objectFit: "cover",
                      width: "215px",
                      height: "500px",
                    }}
                  />

                  {/* hover description*/}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hovered === product.id ? 1 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    style={{
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
                    }}
                  >
                    {product.title}
                  </motion.div>
                </MotionCard>
              </Link>
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
};

export default Category;
