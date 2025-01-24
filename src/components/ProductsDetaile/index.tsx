"use client";

import { Box, Typography, Button, IconButton, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Image from "next/image";
import { useState } from "react";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };

  return (
    <Box sx={{ pt: 16, maxWidth: "1200px", margin: "0 auto" }}>
      {/* Breadcrumb */}
      <Typography variant="subtitle2" sx={{ color: "gray", mb: 2 }}>
        خانه / دسته‌بندی / محصول
      </Typography>

      <Box sx={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
        {/* product*/}
        <Box sx={{ flex: "1 1 40%", maxWidth: "400px" }}>
          <Image
            src="/image2.png"
            alt="محصول"
            width={400}
            height={400}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              mt: 2,
            }}
          >
            <Image
              src="/image2.png"
              alt="محصول کوچک 1"
              width={60}
              height={60}
              style={{
                borderRadius: "4px",
                cursor: "pointer",
                border: "1px solid #ddd",
              }}
            />
            <Image
              src="/image2.png"
              alt="محصول کوچک 2"
              width={60}
              height={60}
              style={{
                borderRadius: "4px",
                cursor: "pointer",
                border: "1px solid #ddd",
              }}
            />
          </Box>
        </Box>

        {/* description*/}
        <Box sx={{ flex: "1 1 50%" }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            لپ‌تاپ 14 اینچی ایسوس
          </Typography>

          {/* Rating : need to be fix*/}
          {/* <Rating
          name="read-only"
          value={product.rating}
          precision={0.5}
          readOnly
          size="small"
        /> */}
          <Typography
            variant="body2"
            sx={{ color: "gray", mb: 2 }}
          >{`⭐⭐⭐⭐⭐ 11 نظر`}</Typography>

          {/*price*/}
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              mb: 2,
            }}
          >
            1,200,000 تومان
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textDecoration: "line-through",
              color: "gray",
            }}
          >
            1,500,000 تومان
          </Typography>

          {/* description*/}
          <Typography variant="body1" sx={{ mt: 3, mb: 3 }}>
            این لپ‌تاپ با مشخصات به‌روز و عملکرد بالا مناسب استفاده روزانه و
            حرفه‌ای می‌باشد. طراحی زیبا و سبک آن باعث حمل آسان شده است.
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Typography variant="body1" fontWeight="bold" sx={{ mb: 1 }}>
            تعداد:
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 4 }}>
            <IconButton
              onClick={handleDecrease}
              sx={{ border: "1px solid #ddd" }}
            >
              <RemoveIcon />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton
              onClick={handleIncrease}
              sx={{ border: "1px solid #ddd" }}
            >
              <AddIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{ flex: "1" }}
            >
              افزودن به سبد خرید
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="large"
              sx={{ flex: "1" }}
            >
              افزودن به علاقه‌مندی‌ها
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
