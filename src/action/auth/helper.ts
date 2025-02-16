import type { IUser } from "@/api/server-api/type";

export function chooseAuthRedirectPath(role: IUser["role"] | undefined) {
  switch (role) {
    case 1:
      return "/";
    case 2:
      return "/seller";
    case 3:
      return "/dashboard";
    default:
      return "/auth/login";
  }
}
