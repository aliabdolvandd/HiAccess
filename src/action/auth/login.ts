"use server";
import "server-only";
import { LoginFormSchema, LoginFormState } from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { AUTH_BASE_URL } from "@/config.server";
import { formDataToObject } from "@/lib/utils";

export async function loginAction(state: LoginFormState, formData: FormData) {
  /// validate input
  const role = Number(formData.get("role"));
  console.log(role);
  const validatedFields = LoginFormSchema.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  const res = await fetch(`${AUTH_BASE_URL}/auth/login`, {
    method: "post",
    body: JSON.stringify(validatedFields.data),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return {
      message: data.message,
      errors: data.errors,
    };
  }
  await createSession({
    accessToken: data.tokens.accessToken,
    refreshToken: data.tokens.refreshToken,
  });
  if (role === 1) {
    redirect("/");
  }
  if (role === 2) {
    redirect("/seller");
  } else {
    redirect("/dashboard");
  }
}
