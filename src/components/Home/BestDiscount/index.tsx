import ProductList from "@/components/ProductList";
import { IProductCard } from "@/type";
import { Box } from "@mui/material";

const products: IProductCard[] = [
  {
    code: 1,
    image: "/image2.png",
    title: "لپ تاپ 14 اینچی ایسوس",
    rate: 4,
    price: 1500000, // ✅ به عدد تبدیل شد
    discount: 20, // ✅ به عدد تبدیل شد
    discountPrice: 1200000, // ✅ به عدد تبدیل شد
    badge: "پرفروش‌ترین", // 🔹 مقدار badge اضافه شد
  },
  {
    code: 2,
    image: "/image2.png",
    title: "لپ تاپ 15.5 اینچی لنوو",
    rate: 5,
    price: 2300000, // ✅ به عدد تبدیل شد
    discount: 15, // ✅ به عدد تبدیل شد
    discountPrice: 1900000,
    badge: "پیشنهاد ویژه", // 🔹 مقدار badge اضافه شد
  },
];

export default function BestDiscount() {
  return (
    <Box>
      <ProductList products={products} title="پر تخفیف ترین ها " />
    </Box>
  );
}
