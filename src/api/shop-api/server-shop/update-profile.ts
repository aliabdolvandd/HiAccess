import { apiFetch } from "@/api/server-api/base";
import { IAddress, IUserShop } from "@/api/server-api/type";
import { BASE_URL } from "@/config.server";

export async function UpdateAddress(body: IAddress) {
  try {
    const userProfile = await apiFetch<IUserShop>(`${BASE_URL}/auth/profile`);

    if (!userProfile || !userProfile.profile) {
      throw new Error(" اطلاعات کاربر دریافت نشد");
    }

    const updatedAddressList = [...userProfile.profile.addressList, body];

    const updatedProfile: IUserShop = {
      ...userProfile,
      profile: {
        ...userProfile.profile,
        addressList: updatedAddressList,
      },
    };

    const data = await apiFetch<IUserShop>(`${BASE_URL}/auth/profile`, {
      method: "POST",
      body: JSON.stringify(updatedProfile),
    });

    console.log("آدرس با موفقیت آپدیت شد:", data);
    return data;
  } catch (e) {
    console.error(" خطا در ویرایش آدرس:", e);
    throw e;
  }
}
