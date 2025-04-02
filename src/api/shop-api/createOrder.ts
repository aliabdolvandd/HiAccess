import { apiFetch } from "@/api/server-api/base";
import { ICreateOrder } from "@/api/server-api/type";
import { BASE_URL } from "@/config.server";

export const createOrder = async (body: ICreateOrder) => {
  const data = await apiFetch(`${BASE_URL}/orders`, {
    body: JSON.stringify(body),
    method: "POST",
  });
  return data;
};
