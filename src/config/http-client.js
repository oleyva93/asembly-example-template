"use client";

import { API_URL } from "@/constants/session";
import Axios from "axios";

export const httpClient = () =>
  Axios.create({
    baseURL: API_URL,
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
    },
  });
