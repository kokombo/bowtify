import { NextResponse, type NextRequest } from "next/server";
import {
  publicRoutes,
  authRoutes,
  loginRedirect,
  businessRedirectUrl,
  isBusinessAccount,
  apiAuthPrefix,
} from "../route";
import { getToken } from "next-auth/jwt";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { nextUrl } = req;
  const isLoggedIn = !!token;

  const isApiRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  if (isApiRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
    return null;
  }

  if (isLoggedIn && nextUrl.pathname === "/") {
    if (token.accountType === isBusinessAccount) {
      return NextResponse.redirect(new URL(businessRedirectUrl, nextUrl));
    }
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(loginRedirect, nextUrl));
  }

  return null;
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
