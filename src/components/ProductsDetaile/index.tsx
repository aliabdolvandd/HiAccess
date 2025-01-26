"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Rating,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import FeatureProduct from "./FeatureProduct";
import Comments from "./CommentSection";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <Box sx={{ pt: 12, maxWidth: "1440px", px: 2, mx: "auto" }}>
      {/* Breadcrumb */}
      <Typography variant="subtitle2" sx={{ color: "gray", mb: 3 }}>
        خانه / دسته‌بندی / لپ‌تاپ
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "space-between",
        }}
      >
        {/* Product Images */}
        <Box
          sx={{
            flex: "1 1 40%",
            maxWidth: "500px",
          }}
        >
          <Image
            src="/image2.png"
            alt="محصول"
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
            {[1, 2, 3].map((_, index) => (
              <Image
                key={index}
                src="/image2.png"
                alt={`محصول کوچک ${index + 1}`}
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

        {/* Product Details */}
        <Box
          sx={{
            flex: "1 1 50%",
            display: "flex",
            flexDirection: "column",
            gap: 1,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Rating
              value={4.5}
              readOnly
              sx={{ mb: 2, color: "black", width: "16px", height: "16px" }}
            />
            <IconButton>
              <FavoriteBorder />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            fontWeight="700"
            fontSize={"28px"}
            gutterBottom
          >
            لپ‌تاپ 14 اینچی ایسوس
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", fontSize: "16px", fontWeight: "700" }}
          >
            ASUS Laptop 14-Inch
          </Typography>
          <Divider />

          {/* Product Description */}
          <Typography
            variant="body1"
            sx={{ lineHeight: 1.8, fontWeight: "400", textAlign: "justify" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوال و آینده
            شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            بیشتری.
          </Typography>

          {/* Price */}
          <Box>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", mb: 2, fontSize: "24px" }}
            >
              1,200,000 تومان
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textDecoration: "line-through",
                textDecorationColor: "red",
                color: "gray",
              }}
            >
              1,500,000 تومان
            </Typography>

            {/* Product Colors */}
            <Box sx={{ mt: 3 }}>
              <Typography
                variant="subtitle1"
                sx={{ fontWeight: "bold", mb: 1, fontSize: "18px" }}
              >
                انتخاب رنگ:
              </Typography>
              <Box sx={{ display: "flex", gap: 2 }}>
                {["قرمز", "آبی", "سبز", "مشکی"].map((color, index) => (
                  <Button
                    key={index}
                    variant="contained"
                    sx={{
                      minWidth: "50px",
                      height: "50px",
                      backgroundColor:
                        color === "مشکی" ? "black" : color.toLowerCase(),
                      color: "white",
                      borderRadius: "50%",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      "&:hover": {
                        backgroundColor:
                          color === "مشکی"
                            ? "gray"
                            : `${color.toLowerCase()}CC`,
                      },
                    }}
                  >
                    {color}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>

          {/* Quantity and Add to Cart */}
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
          <Divider sx={{ my: 1 }} />
          <Box sx={{ flex: 2 }}>
            <FeatureProduct />
          </Box>
        </Box>
      </Box>
      <Comments />
    </Box>
  );
};

export default ProductDetail;
