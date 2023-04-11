import { httpApi } from "@/config/http";

export default async function me(req, res) {
  const { accessToken } = req.cookies;

  if (!accessToken) {
    return res.status(401).json({ error: "Not logged in" });
  }

  try {
    const response = await httpApi(accessToken).get(
      `${process.env.NEXT_PUBLIC_API_URL}/users/me`
    );

    return res.status(200).json(response.data);
  } catch (e) {
    return res.status(500).json({ error: "Server Error" });
  }
}
