"use server";

import { ICreateOrder } from "@/api/server-api/type";
import { createOrder } from "@/api/shop-api/createOrder";
import { ensureAuthenticated } from "@/lib/session";
import { revalidatePath } from "next/cache";

export const createOrderAction = async (body: ICreateOrder) => {
  await ensureAuthenticated();
  try {
    await createOrder(body);
    revalidatePath("/checkout");

    return { success: true };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
};
