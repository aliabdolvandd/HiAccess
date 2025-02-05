// import { NextRequest, NextResponse } from "next/server";
// import { cookies } from "next/headers";
// import { refreshTokenAction } from "./action/auth/refresh-token";

// // 1. Specify protected and public routes
// const protectedRoutes = "/dashboard";
// const publicRoutes = "/";

// export default async function middleware(req: NextRequest) {
//   // 2. Check if the current route is protected or public
//   const path = req.nextUrl.pathname;
//   const isProtectedRoute = path.startsWith(protectedRoutes);
//   const isPublicRoute = path.includes(publicRoutes);

//   // 3. Decrypt the session from the cookie
//   const accessToken = (await cookies()).get("accessToken")?.value;
//   const refreshToken = (await cookies()).get("refreshToken")?.value;
//   const isLogin = accessToken && refreshToken;
//   const isLogout = !accessToken && !refreshToken;
//   const needToRefresh = !accessToken && refreshToken;
//   if (needToRefresh) {
//     await refreshTokenAction();
//     return NextResponse.redirect(new URL(req.nextUrl, req.nextUrl));
//   }
//   // 4. Redirect to /login if the user is not authenticated
//   if (isProtectedRoute && isLogout) {
//     return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
//   }

//   // 5. Redirect to /dashboard if the user is authenticated
//   if (isPublicRoute && !isProtectedRoute && isLogin) {
//     return NextResponse.redirect(new URL("/dashboard", req.nextUrl));
//   }

//   return NextResponse.next();
// }

// // Routes Middleware should not run on
// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { refreshTokenAction } from "./action/auth/refresh-token";

const roleRoutes: Record<string, string[]> = {
  3: ["/dashboard"], // ADMIN
  2: ["/sellerPanel"], //SELLER
  1: ["/"], // USER
};

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;
  const refreshToken = cookieStore.get("refreshToken")?.value;
  const userRole = Number(cookieStore.get("role")?.value);

  const isLogin = Boolean(accessToken && refreshToken);
  const isLogout = !accessToken && !refreshToken;
  const needToRefresh = !accessToken && refreshToken;

  if (needToRefresh) {
    await refreshTokenAction();
    return NextResponse.next();
  }
  if (
    isLogout &&
    (path.startsWith("/dashboard") || path.startsWith("/seller-panel"))
  ) {
    return NextResponse.redirect(new URL("/auth/login", req.nextUrl));
  }

  if (isLogin && userRole) {
    const allowedPaths = roleRoutes[userRole] || [];
    const isAllowed = allowedPaths.some((allowedPath) =>
      path.startsWith(allowedPath)
    );

    if (!isAllowed) {
      return NextResponse.redirect(
        new URL(allowedPaths[0] || "/", req.nextUrl)
      );
    }

    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard",
    "/dashboard/:path*",
    "/sellerPanel",
    "/sellerPanel/:path*",
    "/auth/:path*",
  ],
};
