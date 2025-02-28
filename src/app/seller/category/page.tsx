import { getSellerCategories } from "@/api/seller-api/catrgor";
import { Card, Typography } from "@mui/material";
import CategoryClientWrapper from "@/components/seller/seller-form/seller-category-wrapper";

export default async function CategoryPage() {
  const categories = await getSellerCategories();

  return (
    <Card>
      <Typography sx={{ pt: "20px" }}>مدیریت دسته‌بندی‌ها</Typography>
      <CategoryClientWrapper categories={categories} />
    </Card>
  );
}
