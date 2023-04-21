import { API_URL } from "@/constants/session";
import { fetchLogout } from "@/hooks/useSession";
import Axios from "axios";
import cookieCutter from "cookie-cutter";

export const httpClient = () => {
  const client = Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${cookieCutter.get("access_token")}`,
    },
  });
  client.interceptors.response.use(...interceptorsResponse);
  return client;
};

export const httpApi = (token) =>
  Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const isomorphicHttpClient = (token) => {
  if (typeof window === "undefined") {
    return httpApi(token);
  }
  return httpClient();
};

const interceptorsResponse = [
  (response) => response,
  async (error) => {
    try {
      if (error.response.status === 401) {
        await fetchLogout();
      }
    } finally {
      window.location.href = "/site/login";
    }
    return Promise.reject(error);
  },
];
