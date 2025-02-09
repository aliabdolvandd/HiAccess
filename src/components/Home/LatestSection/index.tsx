"use client";

import ProductList from "@/components/ProductList";
import { IProductCard } from "@/type";
import { Box } from "@mui/material";
const products: IProductCard[] = [
  {
    code: 1,
    image: "/image2.png",
    title: "لپ تاپ 14 اینچی ایسوس",
    rate: 4,
    price: 1500000,
    discount: 20,
    discountPrice: 1200000,
    badge: "پرفروش‌ترین",
  },
  {
    code: 2,
    image: "/image2.png",
    title: "لپ تاپ 15.5 اینچی لنوو",
    rate: 5,
    price: 2300000,
    discount: 15,
    discountPrice: 1900000,
    badge: "پیشنهاد ویژه",
  },
  {
    code: 3,
    image: "/image2.png",
    title: "لپ تاپ 14 اینچی ایسوس",
    rate: 4,
    price: 1500000,
    discount: 20,
    discountPrice: 1200000,
    badge: "پرفروش‌ترین",
  },
  {
    code: 4,
    image: "/image2.png",
    title: "لپ تاپ 15.5 اینچی لنوو",
    rate: 5,
    price: 2300000,
    discount: 15,
    discountPrice: 1900000,
    badge: "پیشنهاد ویژه",
  },
  {
    code: 5,
    image: "/image2.png",
    title: "لپ تاپ 14 اینچی ایسوس",
    rate: 4,
    price: 1500000,
    discount: 20,
    discountPrice: 1200000,
    badge: "پرفروش‌ترین",
  },
  {
    code: 6,
    image: "/image2.png",
    title: "لپ تاپ 15.5 اینچی لنوو",
    rate: 5,
    price: 2300000,
    discount: 15,
    discountPrice: 1900000,
    badge: "پیشنهاد ویژه",
  },
];
export default function LatestSection() {
  return (
    <Box>
      <ProductList products={products} title="جدید ترین های اخیر" />
    </Box>
  );
}
