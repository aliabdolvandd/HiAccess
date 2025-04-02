"use server";
import { ensureAuthenticated } from "@/lib/session";
import { formDataToObject } from "@/lib/utils";
import { AddressFormState, UpdateAddressSchema } from "@/lib/validations";
import { UpdateAddress } from "./update-profile";
import { ApiError } from "next/dist/server/api-utils";

export async function createOrUpdateAddressAction(
  state: AddressFormState,
  formData: FormData
): Promise<AddressFormState> {
  await ensureAuthenticated();

  const validatedFields = UpdateAddressSchema.safeParse({
    ...formDataToObject(formData),
    location: [
      Number(formData.get("locationLat")),
      Number(formData.get("locationLng")),
    ],
  });
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await UpdateAddress(validatedFields.data);

    return {
      success: true,
      message: "آدرس با موفقیت ویرایش شد",
    };
  } catch (e) {
    if (e instanceof ApiError) {
      console.log("eeeeeeeeeeeee", e.message);
      return {
        message: e.message,
        errors: {},
      };
    } else {
      return {
        message: "خطا در ویرایش آدرس",
        success: false,
      };
    }
  }
}
