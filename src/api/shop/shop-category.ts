// import Axios from "../client-api/base";
// import { ICategory, PaginatedResultApi } from "../server-api/type";
// import { useQuery } from "@tanstack/react-query";

// async function getShopAllCategory() {
//   const res = await Axios.get<PaginatedResultApi<ICategory>>("/categories", {
//     params: { pageSize: 25 },
//   });
//   return res.data;
// }

// export const getCategoryBySlug = async (slug: string) => {
//   try {
//     const res = await Axios.get<ICategory>(`/categories/${slug}`);
//     return res.data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// export function useShopCategoryQuery() {
//   return useQuery({
//     queryKey: ["shop-products"],
//     queryFn: () => getShopAllCategory(),
//   });
// }
