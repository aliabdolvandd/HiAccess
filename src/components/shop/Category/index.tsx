"use client";
import React, { useState } from "react";
import { Box, Card, Typography, Grid2 } from "@mui/material";
import Link from "next/link";
import { motion } from "framer-motion";

const products = [
  {
    id: 1,
    slug: "mobile1",
    image: "/image.png",
    hoverImage: "imageh.png",
    title: "گوشی موبایل",
  },
  {
    id: 2,
    slug: "lp",
    image: "/imagel.png",
    hoverImage: "/imagelh.png",
    title: "لپ‌تاپ",
  },
  {
    id: 3,
    slug: "headphones",
    image: "/imagehd.png",
    hoverImage: "/imagehdh.png",
    title: "هدفون",
  },
  {
    id: 4,
    slug: "audio-video",
    image: "/imagej.png",
    hoverImage: "/imagejh.png",
    title: "لوازم جانبی",
  },
];

const MotionCard = motion(Card);
const MotionImage = motion.img;

const Category = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        px: { xs: 1, md: 8 },
        py: 4,
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "24px", md: "36px" },
          fontWeight: "700",
          mb: 4,
        }}
      >
        دسته‌بندی
      </Typography>

      <Grid2 container spacing={3} justifyContent="center">
        {products.map((product) => (
          <Grid2
            key={product.id}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
            display="flex"
            justifyContent="center"
          >
            <Link
              href={`/category/${product.slug}`}
              style={{ textDecoration: "none" }}
            >
              <MotionCard
                initial={{ y: 0, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
                animate={
                  hovered === product.id
                    ? { y: -10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }
                    : { y: 0, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }
                }
                transition={{ duration: 0.2, ease: "easeOut" }}
                sx={{
                  width: { xs: 180, sm: 200, md: 215 },
                  height: { xs: 300, sm: 400, md: 500 },
                  borderRadius: "8px",
                  overflow: "hidden",
                  position: "relative",
                  cursor: "pointer",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    position: "relative",
                  }}
                >
                  <MotionImage
                    src={
                      hovered === product.id
                        ? product.hoverImage
                        : product.image
                    }
                    alt={`Product ${product.id}`}
                    initial={{ scale: 1, y: 0 }}
                    animate={{
                      scale: hovered === product.id ? 1.1 : 1,
                      y: hovered === product.id ? -10 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  />
                </Box>

                {/* hover description */}
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
                    zIndex: 2,
                  }}
                >
                  <Typography>{product.title}</Typography>
                </motion.div>
              </MotionCard>
            </Link>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Category;
