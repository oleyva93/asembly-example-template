import jwtDecode from "jwt-decode";

export const capitalizeText = (text = "") => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

// TODO: add jwt helper
export const isJwtExpired = (token) => {
  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};
