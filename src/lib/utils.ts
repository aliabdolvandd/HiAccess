import "server-only";
// import { set } from "lodash";
import { set } from "lodash";
export function formDataToObject<T extends Record<string, unknown>>(
  formData: FormData
): T {
  const obj: T = {} as T; // Important: Type assertion here

  for (const [key, value] of formData.entries()) {
    if (key === "role") {
      set(obj, key, parseInt(value as string, 10));
    } else {
      set(obj, key, value);
    }
  }

  return obj;
}
