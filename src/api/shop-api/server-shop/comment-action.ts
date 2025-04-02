"use server";

import { createComments } from "@/api/shop-api/server-shop/create-comments";
import { ensureAuthenticated } from "@/lib/session";
import { CommentFormState, CommentSchemaZod } from "@/lib/validations";
import { ApiError } from "next/dist/server/api-utils";

export async function createOrUpdateCommentAction(
  state: CommentFormState,
  formData: FormData
): Promise<{
  errors?: { [key: string]: string[] };
  message?: string;
  success?: boolean;
}> {
  await ensureAuthenticated();

  const productCode = formData.get("product");
  const product = Number(productCode);
  const rate = formData.get("rate");
  const rating = Number(rate);
  const text = formData.get("text");
  const validatedFields = CommentSchemaZod.safeParse({
    product,
    text,
    rating,
  });

  if (!validatedFields.success) {
    const fieldErrors = validatedFields.error.flatten().fieldErrors;
    console.log("Validation Errors:", fieldErrors);
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    if (product) {
      await createComments(validatedFields.data);
    }

    return { success: true, message: "کامنت با موفقیت ثبت شد!" };
  } catch (e) {
    console.log("Error:", e);

    if (e instanceof ApiError) {
      return {
        message: e.message,
        errors: { message: [e.message] },
      };
    } else {
      return {
        message: "خطا در ارسال کامنت",
        success: false,
      };
    }
  }
}
