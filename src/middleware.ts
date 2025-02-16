import { NextRequest, NextResponse } from "next/server";
import { refreshTokenAction } from "./action/auth/refresh-token";
import { auth } from "./lib/session";

const protectedRoutes = {
  admin: "/dashboard",
  seller: "/seller",
  user: "/profile",
  checkout: "/checkout",
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const { isLogin, isLogout, needToRefresh, role } = await auth();

  // refresh token
  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(req.nextUrl);
  }

  // public route
  if (path.startsWith("/auth") && isLogin) {
    const redirectPath =
      Number(role) === 3 ? "/dashboard" : Number(role) === 2 ? "/seller" : "/";
    return NextResponse.redirect(new URL(redirectPath, req.nextUrl));
  }

  // protect route
  if (Object.values(protectedRoutes).some((route) => path.startsWith(route))) {
    if (isLogout) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
    }

    // check roles
    if (path.startsWith(protectedRoutes.admin) && Number(role) !== 3) {
      return NextResponse.redirect(new URL("/403", req.nextUrl));
    }
    if (path.startsWith(protectedRoutes.seller) && Number(role) !== 2) {
      return NextResponse.redirect(new URL("/403", req.nextUrl));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
