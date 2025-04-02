"use server";
import "server-only";
import type { FormState, LoginFormState, LoginType } from "@/lib/validations";
import { LoginFormSchema } from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";

import { ApiError } from "@/api/server-api/base";
import { chooseAuthRedirectPath } from "./helper";
import { LoginResponse } from "@/api/server-api/type";
import { loginRequest } from "@/api/server-api/auth";

export async function loginAction(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse(formDataToObject(formData));
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  let data: LoginResponse | undefined = undefined;
  try {
    data = await loginRequest(validatedFields.data);

    if (!data || !data.tokens || !data.user) {
      return { message: "ورود ناموفق بود. لطفاً دوباره تلاش کنید." };
    }
    const role = Number(data.user.role);
    await createSession({
      accessToken: data.tokens.accessToken,
      refreshToken: data.tokens.refreshToken,
      role,
    });
  } catch (e) {
    if (e instanceof ApiError) {
      console.log(e);
      return {
        message: e.message,
        errors: e.body as FormState<LoginType>["errors"],
      };
    }
  }

  const path = chooseAuthRedirectPath(data?.user.role);
  return redirect(path);
}
