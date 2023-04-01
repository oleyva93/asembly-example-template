import FormData from "form-data";
import { serialize } from "cookie";
import { httpApi } from "@/shared/config/http";

export default async function logoutHandler(req, res) {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(401).json({ error: "Not logged in" });
  }

  const formData = new FormData();
  formData.append("token", accessToken);
  formData.append("grant_type", "refresh_token");
  formData.append("client_id", process.env.NEXT_PUBLIC_CLIENT_ID);
  formData.append("client_secret", process.env.NEXT_PUBLIC_CLIENT_SECRET);

  await httpApi(accessToken).post("api/auth/revoke-token/", formData);

  const serialized = serialize("accessToken", null, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 0,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialized);
  return res.status(200).json({
    message: "Logout successful",
  });
}
