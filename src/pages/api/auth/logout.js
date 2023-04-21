import { httpApi } from "@/config/http";
import { serialize } from "cookie";

export default async function logoutHandler(req, res) {
  const { access_token } = req.cookies;

  if (!access_token) {
    return res.status(401).json({ error: "Not logged in" });
  }

  try {
    await httpApi(access_token).get("/auth/logout");

    res.setHeader("Set-Cookie", serializeTokens());

    return res.status(200).json({
      message: "Logout successful",
    });
  } catch (e) {
    res.setHeader("Set-Cookie", serializeTokens());

    return res.status(500).json({ error: "Server Error" });
  }
}

const serializeTokens = () => {
  const accessTokenSerialized = serialize("access_token", null, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  const refreshTokenSerialized = serialize("refresh_token", null, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  const loggedInSerialized = serialize("logged_in", null, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  return [accessTokenSerialized, refreshTokenSerialized, loggedInSerialized];
};
