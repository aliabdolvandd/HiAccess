import { apiFetch } from "@/api/server-api/base";
import { IComments } from "@/api/server-api/type";
import { BASE_URL } from "@/config.server";

export const createComments = async (body: Partial<IComments>) => {
  const data = await apiFetch(`${BASE_URL}/comments`, {
    method: "POST",
    body: JSON.stringify(body),
  });
  return data;
};
