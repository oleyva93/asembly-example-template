import { httpClient } from "@/config/http";
import { SESSION_TYPES } from "@/constants";
import axios from "axios";
import { useMutation, useQuery } from "react-query";

// fetchers

const fetchLogin = (credentials) => axios.post("api/auth/login", credentials);

const fetchProfile = () =>
  httpClient()
    .get("/users/me")
    .then((res) => res.data);

export const fetchLogout = async () => axios.get("api/auth/logout");

// hooks

const useLogin = () => {
  return useMutation([SESSION_TYPES.USER_LOGIN], (credentials) =>
    fetchLogin(credentials)
  );
};

const useLogout = (options) =>
  useMutation([SESSION_TYPES.USER_LOGOUT], fetchLogout, options);

const useSession = (options) => {
  return useQuery([SESSION_TYPES.USER_GET_ME], () => fetchProfile(), options);
};

export { useLogin, useLogout, useSession };
