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

  // اگر نیاز به ریفرش توکن باشد، آن را انجام می‌دهیم
  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.redirect(req.nextUrl);
  }

  // مسیرهای عمومی مانند لاگین و ثبت‌نام
  if (path.startsWith("/auth") && isLogin) {
    const redirectPath =
      Number(role) === 3 ? "/dashboard" : Number(role) === 2 ? "/seller" : "/";
    return NextResponse.redirect(new URL(redirectPath, req.nextUrl));
  }

  // بررسی مسیرهای محافظت‌شده
  if (Object.values(protectedRoutes).some((route) => path.startsWith(route))) {
    if (isLogout) {
      return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
    }

    // بررسی نقش‌های مجاز برای مسیرهای مختلف
    if (path.startsWith(protectedRoutes.admin) && Number(role) !== 3) {
      return NextResponse.redirect(new URL("/403", req.nextUrl));
    }
    if (path.startsWith(protectedRoutes.seller) && Number(role) !== 2) {
      return NextResponse.redirect(new URL("/403", req.nextUrl));
    }
  }

  return NextResponse.next();
}

// مسیرهایی که Middleware نباید روی آن‌ها اجرا شود
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
