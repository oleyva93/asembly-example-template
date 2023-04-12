import { httpApi } from "@/config/http";
import { serialize } from "cookie";

export default async function logoutHandler(req, res) {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(401).json({ error: "Not logged in" });
  }

  try {
    await httpApi(accessToken).get("/auth/logout");

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
  } catch (e) {
    return res.status(500).json({ error: "Server Error" });
  }
}
