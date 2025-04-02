import { getSellerCategories } from "@/api/seller-api/catrgor";
import CategoryClientWrapper from "@/components/seller/seller-form/seller-category-wrapper";

export default async function CategoryPage() {
  const categories = await getSellerCategories();

  return (
    <>
      <CategoryClientWrapper categories={categories} />
    </>
  );
}
