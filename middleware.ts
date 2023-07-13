import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  if (req.cookies.get("auth")) {
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: "/login",
};
