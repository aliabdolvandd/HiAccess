"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Chip,
  Box,
  Rating,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IDiscount } from "@/type";

const BestDiscountCard: React.FC<{ product: IDiscount }> = ({ product }) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "446px",
        width: "334px",
        margin: "auto",
        boxShadow: 3,
        position: "relative",
        borderRadius: "16px",
        padding: "8px 16px",
      }}
    >
      {/* Discount percentage */}
      {product.discountedPrice && (
        <Chip
          label={`${product.discountedPrice}`}
          size="medium"
          sx={{
            fontSize: "12px",
            position: "absolute",
            top: 10,
            left: 10,
            bgcolor: "Accent.main",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
        />
      )}

      {/* Product image */}

      <CardMedia
        component="img"
        height={"228px"}
        image={product.image}
        alt={product.title}
        sx={{ objectFit: "contain", padding: "10px" }}
      />
      <Button
        variant="contained"
        sx={{
          padding: "12px 56px",
          mt: 2,
          bgcolor: "primary.main",
          color: "white",
          borderRadius: "8px",
          fontWeight: "bold",
          fontSize: "1rem",
          textTransform: "none",
          ":hover": {
            backgroundColor: "#2563eb",
          },
        }}
      >
        افزودن به سبد
      </Button>
      {/* Product rating */}
      <Rating
        name="read-only"
        value={product.rating}
        precision={0.5}
        readOnly
        size="small"
        sx={{ textAlign: "center", marginTop: "8px" }}
      />

      {/* Price section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          mt: 1,
          position: "absolute",
          bottom: 7,
          right: 13,
        }}
      >
        {product.originalPrice && (
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.2rem",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            {product.price}
          </Typography>
        )}
        <Typography
          variant="h6"
          sx={{
            textDecoration: "line-through",
            fontWeight: "bold",
            color: "gray",
            fontSize: "0.9rem",
            marginTop: "4px",
          }}
        >
          {product.originalPrice}
        </Typography>
      </Box>
      <Typography
        variant="subtitle1"
        component="span"
        sx={{ fontSize: "1rem", fontWeight: "bold", width: "auto" }}
      >
        {product.title}
      </Typography>
      {/* Favorite icon */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          right: 10,
          backgroundColor: "white",
          borderRadius: "50%",
          width: 32,
          height: 32,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: 1,
        }}
      >
        <FavoriteBorderIcon fontSize="small" color="action" />
      </Box>
    </Card>
  );
};
export default BestDiscountCard;
