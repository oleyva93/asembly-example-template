import { API_URL } from "@/constants/session";
import Axios from "axios";
import cookieCutter from "cookie-cutter";

export const httpClient = () =>
  Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${cookieCutter.get("accessToken")}`,
    },
  });

export const httpApi = (token) =>
  Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
