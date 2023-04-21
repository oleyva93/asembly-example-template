import { isomorphicHttpClient } from "@/config/http";
import queryClient from "@/config/query-client";
import { DASHBOARD_TYPES } from "@/constants";
import { useQuery } from "react-query";

// fetchers

const fetchReleases = (token, params) =>
  isomorphicHttpClient(token)
    .get("releases/current/", { params })
    .then((res) => res.data);

const fetchInventories = (token, params) =>
  isomorphicHttpClient(token)
    .get("inventory/", { params })
    .then((res) => res.data);

const fetchKeySettings = (token, key) =>
  isomorphicHttpClient(token)
    .get(`settings/${key}`)
    .then((res) => res.data);

// hooks

export const useReleases = (params, options) => {
  return useQuery(
    [DASHBOARD_TYPES.DASHBOARD_RELEASES, params],
    () => fetchReleases(null, params),
    options
  );
};

export const useKeySettings = (key, options) => {
  return useQuery(
    [DASHBOARD_TYPES.DASHBOARD_KEY_SETTINGS, key],
    () => fetchKeySettings(null, key),
    options
  );
};

export const useInventory = (params, options) => {
  return useQuery(
    [DASHBOARD_TYPES.DASHBOARD_INVENTORY, params],
    () => fetchInventories(null, params),
    options
  );
};

// pre-fetchers

export const prefetchReleases = (token) =>
  queryClient.prefetchQuery([DASHBOARD_TYPES.DASHBOARD_RELEASES], () =>
    fetchReleases(token)
  );

export const prefetchKeySettings = (token, key) =>
  queryClient.prefetchQuery([DASHBOARD_TYPES.DASHBOARD_KEY_SETTINGS, key], () =>
    fetchKeySettings(token, key)
  );
