import { NextResponse } from "next/server";
import jwt_decode from "jwt-decode";

const ACCESS_TOKEN_PARAM = "accessToken";
const LOGIN_PATH = "/login";

export async function middleware(request) {
  const jwt = request.cookies.get(ACCESS_TOKEN_PARAM);

  if (jwt) {
    const decoded = jwt_decode(jwt.value);
    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
      return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
    }
  } else {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard", "/log", "/admin", "/static-log"],
};
