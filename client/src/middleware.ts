import { NextResponse, type NextRequest, userAgent } from "next/server";
import {
  publicRoutes,
  authRoutes,
  loginRedirect,
  businessRedirectUrl,
  isBusinessAccount,
  isIndividualAccount,
} from "./route";
import { getToken } from "next-auth/jwt";

export const middleware = async (req: NextRequest) => {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { nextUrl } = req;
  const isAuthenticated = !!token;
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isBusinessRoute = nextUrl.pathname.startsWith("/ba");
  const isIndividualRoute = nextUrl.pathname.startsWith("/ia");
  const { device, isBot, browser } = userAgent(req);

  if (isAuthenticated) {
    if (isAuthRoute) {
      if (token.accountType === isBusinessAccount) {
        return NextResponse.redirect(new URL(businessRedirectUrl, nextUrl));
      }

      if (token.accountType === isIndividualAccount) {
        return NextResponse.redirect(new URL("/", nextUrl));
      }
    }

    if (nextUrl.pathname === "/" && token.accountType === isBusinessAccount) {
      return NextResponse.redirect(new URL(businessRedirectUrl, nextUrl));
    }

    if (isIndividualRoute && token.accountType === isBusinessAccount) {
      return NextResponse.redirect(new URL(businessRedirectUrl, nextUrl));
    }

    if (isBusinessRoute && token.accountType === isIndividualAccount) {
      return NextResponse.redirect(new URL("/", nextUrl));
    }
  } else {
    if (isPublicRoute || isAuthRoute) {
      return null;
    }
    return NextResponse.redirect(new URL(loginRedirect, nextUrl));
  }
};

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
