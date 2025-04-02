import { BASE_URL } from "@/config.server";
import type { LoginType, RegisterType } from "@/lib/validations";
import { apiFetch } from "./base";
import type { LoginResponse, RegisterResponse } from "./type";

export async function loginRequest(params: LoginType) {
  const data = await apiFetch<LoginResponse>(`${BASE_URL}/auth/login`, {
    method: "post",
    body: JSON.stringify(params),
  });
  return data;
}
export async function registerAdminRequest(params: RegisterType) {
  const data = await apiFetch<RegisterResponse>(
    `${BASE_URL}/auth/admin/register`,
    {
      method: "post",
      body: JSON.stringify(params),
    }
  );
  return data;
}
export async function registerUserRequest(params: RegisterType) {
  const data = await apiFetch<RegisterResponse>(`${BASE_URL}/auth/register`, {
    method: "post",
    body: JSON.stringify(params),
  });
  return data;
}

export async function registerShopRequest(params: RegisterType) {
  const data = await apiFetch<RegisterResponse>(
    `${BASE_URL}/auth/seller/register`,
    {
      method: "post",
      body: JSON.stringify(params),
    }
  );
  return data;
}
