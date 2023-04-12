import { API_URL } from "@/constants/session";
import Axios from "axios";

export const httpApi = (token) =>
  Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
