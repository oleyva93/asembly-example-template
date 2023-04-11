import Axios from "axios";

export const httpClient = () =>
  Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
  });

export const httpApi = (token) =>
  Axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
