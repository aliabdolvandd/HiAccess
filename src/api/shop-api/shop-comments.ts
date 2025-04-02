import { useQuery } from "@tanstack/react-query";
import Axios from "../client-api/base";
import { IComments, PaginatedResultApi } from "../server-api/type";
async function getAllCommentsProduct(productCode: number) {
  const res = await Axios.get<PaginatedResultApi<IComments>>(
    `/product/${productCode}/comments`,
    {
      params: { pageSize: 25 },
    }
  );
  return res.data;
}

export function UseAllComments(productCode: number) {
  return useQuery({
    queryKey: ["comments", productCode],
    queryFn: () => getAllCommentsProduct(productCode),
  });
}
