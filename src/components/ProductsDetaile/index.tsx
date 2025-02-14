"use client";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Rating,
  Container,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FeatureProduct from "./FeatureProduct";
import Comments from "./CommentSection";
import { IShopProducts } from "@/api/server-api/type";
import LoadMore from "../buttons/loadButton";

interface ProductDetailProps {
  product: IShopProducts;
}

const ProductDetail = ({ product }: Partial<ProductDetailProps>) => {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  if (!product) return <Typography>محصولی یافت نشد.</Typography>;

  return (
    <Container maxWidth="xl" sx={{ pt: 12 }}>
      <Typography variant="subtitle2" sx={{ color: "gray", mb: 3 }}>
        خانه / {product.category.titleFa} / {product.titleFa}
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        {/* بخش تصاویر */}
        <Box sx={{ flex: "1 1 40%", maxWidth: "500px" }}>
          <Image
            src={product.images.main}
            alt={product.titleFa}
            width={400}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
          >
            {product.images.list.map((img, index) => (
              <Image
                key={index}
                src={img}
                alt={`تصویر ${index + 1}`}
                width={120}
                height={100}
                style={{
                  borderRadius: "4px",
                  cursor: "pointer",
                  border: "1px solid #ddd",
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.08)",
                }}
              />
            ))}
          </Box>
        </Box>
        <Box
          sx={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Rating value={4.5} readOnly />
            <IconButton>
              <FavoriteBorder />
            </IconButton>
          </Box>

          <Typography variant="h5" fontWeight="700">
            {product.titleFa}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", fontWeight: "700" }}
          >
            {product.titleEn}
          </Typography>
          <Divider />

          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, textAlign: "justify" }}
          >
            {product.review}
          </Typography>

          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            {product.bestSeller?.lastPrice ?? "نامشخص"} تومان
          </Typography>

          {/* color picker*/}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold", mb: 1 }}>
              انتخاب رنگ:
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              {product.colors.map((color, index) => (
                <Button
                  key={index}
                  variant="contained"
                  sx={{
                    minWidth: "40px",
                    height: "40px",
                    backgroundColor: color.hexCode,
                    color: "white",
                    borderRadius: "50%",
                  }}
                ></Button>
              ))}
            </Box>
          </Box>

          {/* quantity*/}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 2,
            }}
          >
            <Box
              sx={{
                width: "176px",
                height: "50px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                px: 1,
              }}
            >
              <IconButton onClick={handleDecrease} size="small">
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ fontWeight: "600" }}>{quantity}</Typography>
              <IconButton onClick={handleIncrease} size="small">
                <AddIcon />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ height: "50px", minWidth: "292px" }}
            >
              افزودن به سبد خرید
            </Button>
          </Box>

          <Divider />
          <FeatureProduct Feature={product.specifications} />
          <Divider />
          <Box
            sx={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              padding: "10px",
            }}
          >
            <Typography variant="h6" sx={{ pb: "10px" }}>
              بررسی تخصصی:
            </Typography>
            <LoadMore review={product.expert_review} />
          </Box>
        </Box>
      </Box>

      <Comments />
    </Container>
  );
};

export default ProductDetail;
