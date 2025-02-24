import { apiFetch } from "@/api/server-api/base";
import { IUserShop } from "@/api/server-api/type";
import { BASE_URL } from "@/config.server";

export async function GetUser() {
  const data = await apiFetch<IUserShop>(`${BASE_URL}/auth/user`, {
    method: "GET",
  });
  return data;
}
