import { NextResponse } from "next/server";

const ACCESS_TOKEN_PARAM = "accessToken";
const LOGIN_PATH = "/login";

export async function middleware(request) {
  const jwt = request.cookies.get(ACCESS_TOKEN_PARAM);

  if (!jwt) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/log", "/admin", "/static-log"],
};
