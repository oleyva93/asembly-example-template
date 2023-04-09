import axios from "axios";
import { useMutation, useQuery } from "react-query";
import { httpClient } from "../config/http";

const fetchLogin = async (credentials) => {
  const response = await axios.post("/api/auth/login", credentials);
  return response;
};

const fetchProfile = async () =>
  httpClient()
    .get("api/v1/users/internal/profile/")
    .then((res) => res.data);

const fetchLogout = async () => axios.get("/api/auth/logout");

const useLogin = () => {
  return useMutation(["login"], (credentials) => fetchLogin(credentials), {
    onSuccess: (res) =>
      window.localStorage.setItem("accessToken", res.data.token),
  });
};

const useLogout = (options) => {
  return useMutation(["logout"], fetchLogout, options);
};

const useSession = (option) => {
  return useQuery(["session"], fetchProfile, { option });
};

export { useLogin, useLogout, useSession, fetchProfile };
