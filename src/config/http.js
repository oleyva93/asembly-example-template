import Axios from "axios";
import ClientOAuth2 from "client-oauth2";

export const clientAuth = () =>
  new ClientOAuth2({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
    accessTokenUri: process.env.NEXT_PUBLIC_ACCESS_TOKEN_URI,
    scopes: ["read"],
  });

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
