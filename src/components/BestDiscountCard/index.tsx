"use client";

import { Box, Typography } from "@mui/material";
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
    <Box sx={{ padding: 3, justifyItems: "right" }}>
      {/* The title of the list*/}
      <Typography
        variant="h5"
        fontWeight="bold"
        gutterBottom
        sx={{ textAlign: "center", mb: 3 }}
      >
        لیست بیشترین تخفیف‌ها
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {products.map((product) => (
          <Link key={product.id} href={`products/${product.id}`}>
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
