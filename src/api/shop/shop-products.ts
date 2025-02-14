import { useQuery } from "@tanstack/react-query";
import { IShopProducts, PaginatedResultApi } from "../server-api/type";
import Axios from "../client-api/base";
import { BASE_URL } from "@/config.server";
import { error } from "console";
async function getShopAllProducts() {
  const res = await Axios.get<PaginatedResultApi<IShopProducts>>("/products", {
    params: { pageSize: 25 },
  });
  return res.data;
}
export function useShopProductsQuery() {
  return useQuery({
    queryKey: ["shop-products"],
    queryFn: () => getShopAllProducts(),
  });
}

// export async function getProductsByCode(code: number) {
//   const res = await Axios.get<PaginatedResultApi<IShopProducts>>(
//     `/products/${code}`,
//     {
//       params: { pageSize: 25 },
//     }
//   );
//   return res.data;
// }

// export function useGetProductsByCode(code: number) {
//   return useQuery({
//     queryKey: ["products-id", code],
//     queryFn: () => getProductsByCode(code),
//   });
// }
export const getProductByCode = async (code: number) => {
  try {
    const res = await Axios.get<IShopProducts>(`${BASE_URL}/products/${code}`);
    return res.data;
  } catch (error) {
    throw error instanceof Error ? error : new Error(String(error));
  }
};
