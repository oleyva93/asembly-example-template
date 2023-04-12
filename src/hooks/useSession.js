import { httpClient } from "@/config/http-client";
import { SESSION_TYPES } from "@/constants";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

// fetchers

const fetchLogin = async (credentials) =>
  await axios.post("/api/auth/login", credentials);

const fetchProfile = async () =>
  httpClient()
    .get("/users/me")
    .then((res) => res.data);

const fetchLogout = async () => axios.get("/api/auth/logout");

// hooks

const useLogin = () => {
  return useMutation(
    [SESSION_TYPES.USER_LOGIN],
    (credentials) => fetchLogin(credentials),
    {
      onSuccess: (res) =>
        window.localStorage.setItem("accessToken", res.data.token),
    }
  );
};

const useLogout = (options) => {
  return useMutation([SESSION_TYPES.USER_LOGOUT], fetchLogout, {
    ...options,
    onSettled: () => {
      window.localStorage.removeItem("accessToken");
    },
  });
};

const useSession = (options) => {
  return useQuery([SESSION_TYPES.USER_GET_ME], fetchProfile, options);
};

export { useLogin, useLogout, useSession, fetchProfile };
