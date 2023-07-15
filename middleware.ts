import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicPath = ["/", "/login"];
const privatePath = ["/myPheed", "/bookmark", "/setting"];

export function middleware(req: NextRequest) {
  const hasCookie = !!req.cookies.get("auth");
  const pathname = req.nextUrl.pathname;

  if (publicPath.includes(pathname)) {
    if (pathname === "/login" && hasCookie) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  if (privatePath.includes(pathname)) {
    if (!hasCookie) {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }
}

export const config = {
  matcher: ["/login", "/myPheed", "/bookmark", "/setting"],
};
