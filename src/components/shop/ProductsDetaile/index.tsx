"use client";
import {
  Box,
  Typography,
  IconButton,
  Divider,
  Rating,
  Container,
  Breadcrumbs,
  Tooltip,
} from "@mui/material";

import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import StorefrontIcon from "@mui/icons-material/Storefront";
import FeatureProduct from "./FeatureProduct";
import Comments from "./CommentSection";
import { IShopProducts } from "@/api/server-api/type";

import AddToCartButton from "./AddToCartButton";
import ProductQuantity from "./ProductQuantity";
import ProductColors from "./ProductColors";
import ProductImages from "./images";
import LoadMore from "@/components/buttons/loadButton";
import SimilarProducts from "./Similarproducts";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";
interface ProductDetailProps {
  product: IShopProducts;
}

const ProductDetail = ({ product }: Partial<ProductDetailProps>) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [selectColor, setSelectColor] = useState<string | null>(null);

  if (!product) return <Typography>محصولی یافت نشد.</Typography>;

  return (
    <Container maxWidth="xl" sx={{ pt: 14 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        sx={{ mb: 3 }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography sx={{ color: "#000" }}>خانه</Typography>
        </Link>
        <Link
          href={`/category/${product.category.slug}`}
          style={{ textDecoration: "none" }}
        >
          <Typography sx={{ color: "#000" }}>
            {product.category.titleFa}
          </Typography>
        </Link>
        <Typography color="gray">{product.titleFa}</Typography>
      </Breadcrumbs>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: { xs: "0 1 100%", sm: "0 1 40%" } }}>
          <ProductImages images={product.images} title={product.titleFa} />

          {product.category?.returnReasonAlert && (
            <Box sx={{ width: "90%" }}>
              <Typography sx={{ mt: 6, textAlign: "left", color: "gray" }}>
                {product.category.returnReasonAlert}
              </Typography>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            flex: { xs: "1 1 100%", sm: "1 1 50%" },
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
            sx={{ color: "gray", fontWeight: "700", alignSelf: "end" }}
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
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 1,
            }}
          >
            <Tooltip title="نام فروشنده محصول">
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <StorefrontIcon fontSize="small" sx={{ color: "#777" }} />
                <Typography
                  variant="subtitle2"
                  sx={{ color: "gray", fontWeight: 500 }}
                >
                  فروشنده:
                </Typography>
              </Box>
            </Tooltip>
            <Box
              sx={{
                backgroundColor: "#f9f9f9",
                color: "#333",
                px: 1.5,
                py: 0.5,
                borderRadius: "6px",
                fontSize: "0.875rem",
                fontWeight: 500,
                border: "1px solid #ddd",
              }}
            >
              {product.bestSeller?.seller.name}
            </Box>
          </Box>

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

      <SimilarProducts code={product.code} />
      <Comments value={{ product: product.code }} />
    </Container>
  );
};

export default ProductDetail;
