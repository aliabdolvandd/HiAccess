import { useQuery } from "@tanstack/react-query";
import { IShopProducts, PaginatedResultApi } from "../server-api/type";
import Axios from "../client-api/base";
import { BASE_URL } from "@/config.server";
async function getShopAllProducts() {
  const res = await Axios.get<PaginatedResultApi<IShopProducts>>("/products", {
    params: { pageSize: 1000 },
  });
  return res.data;
}
export function useShopProductsQuery() {
  return useQuery({
    queryKey: ["shop-products"],
    queryFn: () => getShopAllProducts(),
  });
}

export const getProductByCode = async (code: number) => {
  try {
    const res = await Axios.get<IShopProducts>(`/products/${code}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
