// middleware.ts
import { NextRequest, NextResponse } from "next/server";

const LOCALES = ["zh", "en", "ja"] as const;
type Locale = (typeof LOCALES)[number];
const COOKIE_NAME = "NEXT_LOCALE";
const DEFAULT_LOCALE: Locale = "zh";

function detectLocale(req: NextRequest): Locale {
  // 1. Cookie takes priority
  const cookie = req.cookies.get(COOKIE_NAME)?.value as Locale | undefined;
  if (cookie && LOCALES.includes(cookie)) return cookie;

  // 2. Accept-Language header
  const acceptLang = req.headers.get("accept-language") ?? "";
  for (const part of acceptLang.split(",")) {
    const tag = part.split(";")[0].trim().toLowerCase();
    if (tag.startsWith("zh")) return "zh";
    if (tag.startsWith("en")) return "en";
    if (tag.startsWith("ja")) return "ja";
  }
  return DEFAULT_LOCALE;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Skip static files, _next, api, sitemap, robots
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/images") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    /\.(.*)$/.test(pathname)
  ) {
    return NextResponse.next();
  }

  // Check if pathname already has a locale prefix
  const pathnameLocale = LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );

  if (pathnameLocale) {
    // Update cookie to match current locale
    const res = NextResponse.next();
    res.cookies.set(COOKIE_NAME, pathnameLocale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
    return res;
  }

  // No locale prefix → redirect with detected locale
  const locale = detectLocale(req);
  const url = req.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  const res = NextResponse.redirect(url);
  res.cookies.set(COOKIE_NAME, locale, { path: "/", maxAge: 60 * 60 * 24 * 365 });
  return res;
}

export const config = {
  matcher: ["/((?!_next|api|images|favicon.ico|sitemap.xml|robots.txt).*)"],
};
