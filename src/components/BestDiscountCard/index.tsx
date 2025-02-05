"use client";

import { Box, Button, Divider, Typography } from "@mui/material";
import BestDiscountCard from "./card";
import { IDiscount } from "@/type";
import Link from "next/link";

const products: IDiscount[] = [
  {
    id: 1,
    image: "/image2.png",
    title: "لپ تاپ 14 اینچی ایسوس",
    rating: 4,
    originalPrice: "1,500,000 تومان",
    discountedPrice: "20% تخفیف",
    price: "1,200,000 تومان",
  },
  {
    id: 2,
    image: "/image2.png",
    title: "لپ تاپ 15.5 اینچی لنوو",
    rating: 5,
    originalPrice: "2,300,000 تومان",
    discountedPrice: "15% تخفیف",
    price: "1,900,000 تومان",
  },
];
const BestDiscountList: React.FC = () => {
  return (
    <Box sx={{ pt: 3, px: "15px" }}>
      <Box
        sx={{
          textAlign: "center",
          width: screen,
          bgcolor: "primary.main",
          height: "68px",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: "10px",
          mb: 4,
        }}
      >
        {/* The title of the list*/}
        <Typography
          variant="h5"
          // gutterBottom
          sx={{ fontWeight: 700, fontSize: 36, color: "white" }}
        >
          پر تخفیف ترین ها
        </Typography>
        <Button sx={{ bgcolor: "white", padding: "8px 16px" }}>
          <Typography fontSize={"16px"} fontWeight={700}>
            مشاهده بیشتر
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {products.map((product) => (
          <Link
            style={{ textDecoration: "none" }}
            key={product.id}
            href={`products/${product.id}`}
          >
            <Box sx={{ flex: "1 1 calc(25% - 16px)", maxWidth: "300px" }}>
              <BestDiscountCard product={product} />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default BestDiscountList;
