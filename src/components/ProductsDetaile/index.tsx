"use client";

import {
  Box,
  Typography,
  Button,
  IconButton,
  Divider,
  Chip,
  Rating,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import { useState } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <Box sx={{ pt: 12, maxWidth: "1440px", px: 2 }}>
      {/* Breadcrumb */}
      <Typography variant="subtitle2" sx={{ color: "gray", mb: 3 }}>
        خانه / دسته‌بندی / لپ‌تاپ
      </Typography>

      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {/* Product Images */}
        <Box sx={{ flex: "1 1 40%", maxWidth: "570px" }}>
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
                width={172}
                height={142}
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
        <Box sx={{ flex: "1 1 50%" }}>
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
            fontSize={"36px"}
            gutterBottom
          >
            لپ‌تاپ 14 اینچی ایسوس
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography
            variant="subtitle2"
            sx={{ color: "gray", mb: 2, fontSize: "24px", fontWeight: "700" }}
          >
            ASUS Laptop 14-Inch
          </Typography>

          {/* Category */}
          {/* <Chip
            label="دسته‌بندی: لپ‌تاپ"
            sx={{ mb: 2, fontSize: "0.875rem" }}
          /> */}

          {/* Availability
          <Typography
            variant="body2"
            sx={{ color: "green", mb: 3, fontWeight: "bold" }}
          >
            موجود در انبار
          </Typography> */}

          {/* Price */}
          <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
            1,200,000 تومان
          </Typography>
          <Typography
            variant="body2"
            sx={{ textDecoration: "line-through", color: "gray", mb: 3 }}
          >
            1,500,000 تومان
          </Typography>

          {/* Product Description */}
          <Typography
            variant="body1"
            sx={{ mt: 3, mb: 3, lineHeight: 1.8, fontWeight: "400" }}
          >
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوال و آینده
            شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت
            بیشتری
          </Typography>
          <Divider sx={{ mb: 2 }} />

          {/* Quantity */}
          {/* <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
            تعداد:
          </Typography> */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",

              alignItems: "end",
            }}
          >
            <Box
              sx={{
                width: "176px",
                height: "60px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                borderRadius: "8px",
                // border: "1px solid gray",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                // gap: 2,
                mb: 4,
              }}
            >
              <IconButton
                onClick={handleDecrease}
                size="small"
                // sx={{ border: "1px solid #ddd" }}
              >
                <RemoveIcon />
              </IconButton>
              <Typography sx={{ fontWeight: "600" }}>{quantity}</Typography>
              <IconButton
                onClick={handleIncrease}
                // sx={{ border: "1px solid #ddd" }}
              >
                <AddIcon />
              </IconButton>
            </Box>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ width: "262px", height: "60px" }}
            >
              افزودن به سبد خرید
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Comments Section */}
    </Box>
  );
};

export default ProductDetail;
