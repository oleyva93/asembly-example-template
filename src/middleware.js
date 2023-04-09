import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
const ACCESS_TOKEN_PARAM = "accessToken";
const LOGIN_PATH = "/login";
const INTROSPECT_PATH = "api/auth/introspect/";

export const httpFetch = (token, { url, ...others }) =>
  fetch(`${API_URL}${url}`, {
    ...others,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(others.body),
  });

export async function middleware(request) {
  const jwt = request.cookies.get(ACCESS_TOKEN_PARAM);

  if (!jwt) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  // Verify valid token
  try {
    const formData = new FormData();
    formData.set("token", jwt.value);
    await httpFetch(jwt.value, {
      url: INTROSPECT_PATH,
      method: "POST",
      body: formData,
    });
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }
}

export const config = {
  matcher: ["/", "/dashboard", "/log", "/admin", "/static-log"],
};
