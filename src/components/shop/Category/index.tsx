import React, { useState } from "react";
import { Box, Card, Grid2, Typography } from "@mui/material";
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

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        padding: "10px 15px",
        mt: "15px",
      }}
    >
      <Typography sx={{ fontSize: "36px", fontWeight: "700" }}>
        دسته‌بندی
      </Typography>

      <Box sx={{ width: "100%" }}>
        <Grid2 container sx={{ gap: 18, px: 10 }}>
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
              <Link href={`/category/${product.slug}`}>
                {/* shadow */}
                <MotionCard
                  initial={{ y: 0, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }}
                  animate={
                    hovered === product.id
                      ? { y: -10, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)" }
                      : { y: 0, boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)" }
                  }
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  sx={{
                    borderRadius: "8px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  {/*change image*/}
                  <Card
                    sx={{
                      borderRadius: "8px",
                      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                      overflow: "hidden",
                      position: "relative",
                      width: "215px",
                      height: "500px",
                    }}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                        overflow: "hidden",
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
                          y: hovered === product.id ? -15 : 0,
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
                  </Card>

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
                    <Typography>{product.title}</Typography>
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
