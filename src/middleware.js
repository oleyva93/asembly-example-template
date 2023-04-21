import { NextResponse } from "next/server";
import { isJwtExpired } from "./helpers/string";

const ACCESS_TOKEN_PARAM = "access_token";
const LOGIN_PATH = "/site/login";

export async function middleware(request) {
  const jwt = request.cookies.get(ACCESS_TOKEN_PARAM);

  if (!jwt || isJwtExpired(jwt.value)) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/logs", "/admin", "/static-logs"],
};
