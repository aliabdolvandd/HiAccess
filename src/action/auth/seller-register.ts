"use server";
import "server-only";

import {
  FormState,
  SellerRegisterFormState,
  SellerRegisterType,
  RegisterFormSellerSchema,
} from "@/lib/validations";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
import { formDataToObject } from "@/lib/utils";
import { ApiError } from "@/api/server-api/base";
import { registerShopRequest } from "@/api/server-api/auth";
import { LoginResponse } from "@/api/server-api/type";

export async function sellerRegister(
  state: SellerRegisterFormState,
  formData: FormData
) {
  const validatedFields = RegisterFormSellerSchema.safeParse(
    formDataToObject(formData)
  );
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  console.log("validatedFields.data", validatedFields.data);
  let data: LoginResponse | undefined = undefined;

  try {
    if (validatedFields.data.role === 2) {
      data = await registerShopRequest(validatedFields.data);
    }

    await createSession({
      accessToken: data!.tokens.accessToken,
      refreshToken: data!.tokens.refreshToken,
      role: data?.user.role,
    });
  } catch (e) {
    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: e.body as FormState<SellerRegisterType>["errors"],
      };
    }
  }

  redirect("/seller");
}
