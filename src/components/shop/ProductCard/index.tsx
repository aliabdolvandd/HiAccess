"use client";
import { IShopProducts } from "@/api/server-api/type";
import WishIcon from "@/svg/wishIcon";
import { Box, Card, CardMedia, Chip, Typography } from "@mui/material";
import { motion } from "framer-motion";
import UseTruncate from "../TruncateText";
import Link from "next/link";
interface ProductProps {
  product: IShopProducts;
}

const MotionCard = motion(Card);

const ProductCard = ({ product }: ProductProps) => {
  const lastPrice = product.bestSeller?.lastPrice ?? 0;
  const discountPercentage = product.bestSeller?.discount ?? 0;
  const finalPrice = lastPrice - (lastPrice * discountPercentage) / 100;
  return (
    <MotionCard
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05, boxShadow: "5px 5px 20px rgba(0,0,0,0.2)" }}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "370px",
        width: "290px",
        margin: "auto",
        boxShadow: 4,
        position: "relative",
        borderRadius: "16px",
        padding: "12px",
        cursor: "pointer",
        overflow: "hidden",
      }}
    >
      {product.bestSeller && product.bestSeller.discount > 0 && (
        <Chip
          label={`% ${discountPercentage} تخفیف`}
          size="medium"
          sx={{
            fontSize: "12px",
            position: "absolute",
            top: 10,
            left: 10,
            bgcolor: "error.main",
            color: "white",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        />
      )}

      {product.colors?.length > 0 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: 10,
            display: "flex",
            gap: "4px",
          }}
        >
          {product.colors.map((color) => (
            <Box
              key={color.hexCode}
              sx={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                backgroundColor: color.hexCode,
                border: "1px solid #ccc",
              }}
            />
          ))}
        </Box>
      )}
      <Link href={`/products/${product.code}`}>
        {product.images?.main && (
          <CardMedia
            component="img"
            height={"240px"}
            image={product.images.main}
            alt={product.titleEn || "Product Image"}
            sx={{ objectFit: "contain", padding: "10px", borderRadius: "8px" }}
          />
        )}
      </Link>
      {product.titleFa && (
        <Typography
          variant="subtitle1"
          component="span"
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: "4px",
          }}
        >
          {UseTruncate(product.titleFa, 30)}
        </Typography>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: "4px",
        }}
      >
        {(product.bestSeller?.discount ?? 0) > 0 && (
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              textDecorationColor: "red",
              color: "gray",
              fontSize: "0.9rem",
            }}
          >
            {lastPrice.toLocaleString("fa-IR")} تومان
          </Typography>
        )}

        <Typography
          variant="body1"
          sx={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          {finalPrice.toLocaleString("fa-IR")} تومان
        </Typography>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",
          borderRadius: "50%",
          width: 36,
          height: 36,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 2,
        }}
      >
        <WishIcon />
      </Box>
    </MotionCard>
  );
};

export default ProductCard;
