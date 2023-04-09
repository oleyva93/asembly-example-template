import { clientAuth } from "@/config/http";
import { serialize } from "cookie";

export default async function loginHandler(req, res) {
  const { email, password } = req.body;
  const auth = clientAuth();
  try {
    const response = await auth.owner.getToken(email, password);
    const serialized = serialize("accessToken", response?.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: false,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });
    res.setHeader("Set-Cookie", serialized);
    return res.status(200).json({
      message: "Login successful",
      token: response?.accessToken,
    });
  } catch (e) {
    return res.status(401).json({ error: e });
  }
}
