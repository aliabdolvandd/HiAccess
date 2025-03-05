import { SELLER_BASE_URL } from "@/config.server";
import { apiFetch } from "../server-api/base";
import { ISellerOrders, PaginatedResultApi } from "../server-api/type";

export const getSellerOrders = async (
  params?: unknown
): Promise<PaginatedResultApi<ISellerOrders>> => {
  const search = new URLSearchParams(params as Record<string, string>);

  return apiFetch<PaginatedResultApi<ISellerOrders>>(
    `${SELLER_BASE_URL}/orders?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};
