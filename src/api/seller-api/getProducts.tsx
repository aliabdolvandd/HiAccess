"use server";
import { SELLER_BASE_URL } from "@/config.server";
import { apiFetch } from "../server-api/base";
import { IProduct, PaginatedResultApi } from "../server-api/type";
import { revalidateTag } from "next/cache";
import { IProductForSeller } from "@/app/seller/set-price/page";

export const getSellerProducts = async (
  params?: unknown
): Promise<PaginatedResultApi<IProduct>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IProduct>>(
    `${SELLER_BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const updateSellerProduct = async (
  id: string,
  body: Partial<IProductForSeller>
): Promise<IProductForSeller> => {
  debugger;
  try {
    const data = await apiFetch<IProductForSeller>(
      `${SELLER_BASE_URL}/products/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(body),
      }
    );

    revalidateTag(`seller-products-${id}`);
    return data;
  } catch (e) {
    throw e;
  }
};
