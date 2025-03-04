import { useQuery } from "@tanstack/react-query";
import Axios from "../client-api/base";
import { IGetProductsBySeller } from "../server-api/type";

async function getProductsBySeller(code: number) {
  const data = await Axios.get<IGetProductsBySeller[]>(
    `/products/${code}/sellers`
  );
  return data;
}

export default function useProductsBySeller(code: number) {
  return useQuery({
    queryKey: ["products-by-seller", code],
    queryFn: () => getProductsBySeller(code),
  });
}
