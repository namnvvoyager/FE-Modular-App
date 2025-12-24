import { NextRequest, NextResponse } from "next/server";

/**
 * Route config
 */
const PUBLIC_ROUTES = ["/login"];
const AUTH_ROUTES = ["/dashboard"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  /**
   * 1. Skip public routes
   */
  if (PUBLIC_ROUTES.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  /**
   * 2. Auth guard (cookie-based)
   */
  const accessToken = req.cookies.get("access_token")?.value;

  if (!accessToken && AUTH_ROUTES.some((p) => pathname.startsWith(p))) {
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  /**
   * 3. Tenant resolve (simple version)
   */
  const tenantId = req.headers.get("x-tenant-id") ?? "default";

  const requestHeaders = new Headers(req.headers);
  requestHeaders.set("x-tenant-id", tenantId);

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

/**
 * Apply middleware only for routes below
 */
export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
