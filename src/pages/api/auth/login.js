import axios from "axios";
import { serialize } from "cookie";

export default async function loginHandler(req, res) {
  const { email, password } = req.body;
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
      { email, password }
    );

    const serialized = serialize("accessToken", response?.data?.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: false,
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: "/",
    });

    res.setHeader("Set-Cookie", serialized);

    return res.status(200).json({
      message: "Login successful",
      token: response?.data?.access_token,
    });
  } catch (e) {
    if (e.response.status === 400) {
      return res.status(400).json({ error: e.response.data.detail });
    }
    return res.status(401).json({ error: e });
  }
}
