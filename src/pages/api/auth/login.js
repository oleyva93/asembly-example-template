import { httpApi } from "@/config/http";
import { parse, serialize } from "cookie";

export default async function loginHandler(req, res) {
  const { email, password } = req.body;
  try {
    const response = await httpApi().post("/auth/login", { email, password });

    res.setHeader("Set-Cookie", serializeTokens(response));

    return res.status(200).json({
      message: "Login successful",
      token: response?.data?.access_token,
    });
  } catch (e) {
    if (e.response?.status === 400) {
      return res.status(400).json({ error: e.response.data.detail });
    }
    return res.status(401).json({ error: e });
  }
}

const serializeTokens = (response) => {
  const access_token = parse(response.headers["set-cookie"][0])?.access_token;
  const refresh_token = parse(response.headers["set-cookie"][1])?.refresh_token;
  const logged_in = parse(response.headers["set-cookie"][2])?.logged_in;

  const accessTokenSerialized = serialize("access_token", access_token, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  });

  const refreshTokenSerialized = serialize("refresh_token", refresh_token, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  });

  const loggedInSerialized = serialize("logged_in", logged_in, {
    httpOnly: false,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 3600,
    path: "/",
  });

  return [accessTokenSerialized, refreshTokenSerialized, loggedInSerialized];
};
