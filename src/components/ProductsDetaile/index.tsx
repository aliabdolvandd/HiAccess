"use client";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Rating,
  Container,
} from "@mui/material";

import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FeatureProduct from "./FeatureProduct";
import Comments from "./CommentSection";
import { IShopProducts } from "@/api/server-api/type";
import LoadMore from "../buttons/loadButton";
import AddToCartButton from "./AddToCartButton";
import ProductQuantity from "./ProductQuantity";
import ProductColors from "./ProductColors";
import ProductImages from "./images";
interface ProductDetailProps {
  product: IShopProducts;
}

const ProductDetail = ({ product }: Partial<ProductDetailProps>) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectColor, setSelectColor] = useState<string | null>(null);

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
        <ProductImages images={product.images} title={product.titleFa} />

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
            {product.bestSeller?.lastPrice.toLocaleString("fa-IR") ?? "نامشخص"}{" "}
            تومان
          </Typography>

          <ProductColors
            colors={product.colors}
            onColorSelect={setSelectColor}
          />

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 2,
            }}
          >
            <ProductQuantity quantity={quantity} setQuantity={setQuantity} />

            {product.bestSeller && (
              <AddToCartButton
                product={product}
                seller={product.bestSeller}
                color={selectColor ?? ""}
                quantity={quantity}
              />
            )}
          </Box>

          <Divider />
          {product.specifications.length > 0 && (
            <>
              <FeatureProduct Feature={product.specifications} />
              <Divider />
            </>
          )}

          {product.expert_review && (
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
          )}
        </Box>
      </Box>

      <Comments value={{ product: product.code }} />
    </Container>
  );
};

export default ProductDetail;
