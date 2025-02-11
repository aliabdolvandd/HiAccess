"use server";
import { SELLER_BASE_URL } from "@/config.server";
import { apiFetch } from "../server-api/base";
import { IShopProducts, PaginatedResultApi } from "../server-api/type";
import { revalidateTag } from "next/cache";

export const getSellerProducts = async (
  params?: unknown
): Promise<PaginatedResultApi<IShopProducts>> => {
  const search = new URLSearchParams(params as Record<string, string>);
  return apiFetch<PaginatedResultApi<IShopProducts>>(
    `${SELLER_BASE_URL}/products?${search.toString()}`,
    {
      cache: "no-store",
    }
  );
};

export const updateSellerProduct = async (
  code: string,
  body: Partial<IShopProducts>
): Promise<IShopProducts> => {
  try {
    const data = await apiFetch<IShopProducts>(
      `${SELLER_BASE_URL}/products/${code}`,
      {
        method: "POST",
        body: JSON.stringify(body),
      }
    );

    revalidateTag(`seller/manage-products-${code}`);
    return data;
  } catch (e) {
    throw e;
  }
};
export const getSellerProductById = async (
  code: number
): Promise<IShopProducts> => {
  return apiFetch<IShopProducts>(`${SELLER_BASE_URL}/products/${code}`, {
    cache: "force-cache",
    next: {
      tags: ["allSingleProduct", `products-${code}`],
    },
  });
};
