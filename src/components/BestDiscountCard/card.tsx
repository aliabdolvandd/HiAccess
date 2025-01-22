"use client";
import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
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
        height: "450px",
        maxWidth: 330,
        margin: "auto",
        boxShadow: 3,
        position: "relative",
      }}
    >
      {product.discountedPrice && (
        <Chip
          label={product.discountedPrice}
          size="small"
          color="error"
          sx={{ fontSize: "12px", position: "absolute", top: 10, right: 10 }}
        />
      )}
      {/* product image*/}
      <CardMedia
        component="img"
        height={240}
        // backgroundSize="cover"
        image={product.image}
        alt={product.title}
      />

      {/* card detaie*/}
      <CardContent>
        <Typography variant="h6" component="h2">
          {product.title}
        </Typography>

        {/* product rate*/}
        <Rating
          name="read-only"
          value={product.rating}
          precision={0.5}
          readOnly
          size="small"
        />

        {/*price section*/}
        <Box
          className="price-container"
          display="flex"
          alignItems="center"
          gap={1}
          mt={1}
        >
          {product.originalPrice && (
            <Typography
              variant="body2"
              sx={{
                textDecoration: "line-through",
                color: "gray",
                fontSize: "0.9rem",
              }}
            >
              {product.originalPrice}
            </Typography>
          )}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", color: "black", fontSize: "1.2rem" }}
          >
            {product.price}
          </Typography>
        </Box>
        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
          افزودن به سبد
        </Button>
      </CardContent>
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
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
