import { isomorphicHttpClient } from "@/config/http";
import { LOG_TYPES } from "@/constants";
import { useEffect, useRef, useState } from "react";
import { useQueries, useQuery } from "react-query";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

// fetchers

const fetchLogs = (token) =>
  isomorphicHttpClient(token)
    .get("logs/log/static")
    .then((res) => res.data);

const fetchTempLogs = (token) =>
  isomorphicHttpClient(token)
    .get("logs/temp-log/static")
    .then((res) => res.data);

// hooks

const splitLogs = (data) => data.split("\n");

export const useLogs = (options) => {
  return useQuery([LOG_TYPES.LOG_LOGS], () => fetchLogs(null), {
    ...options,
    select: splitLogs,
  });
};

export const useTemporalLogs = (options) => {
  return useQuery([LOG_TYPES.LOG_TEMP_LOGS], () => fetchTempLogs(null), {
    ...options,
    select: splitLogs,
  });
};

export const useLogsAndTemporalLogs = (callback) => {
  const refCallback = useRef(null);

  useIsomorphicLayoutEffect(() => {
    refCallback.current = callback;
  });

  return useQueries([
    {
      queryKey: [LOG_TYPES.LOG_LOGS],
      queryFn: () => fetchLogs(null),
      staleTime: Infinity,
      select: splitLogs,
      onSuccess: (res) => refCallback.current?.("logs", res),
    },
    {
      queryKey: [LOG_TYPES.LOG_TEMP_LOGS],
      queryFn: () => fetchTempLogs(null),
      staleTime: Infinity,
      select: splitLogs,
      onSuccess: (res) => refCallback.current?.("tempLogs", res),
    },
  ]);
};

// socket

const createSocket = (url) => new WebSocket(url);

export const useLogLive = (url, callback) => {
  const socket = useRef();
  const refCallback = useRef(null);

  const [logs, setLogs] = useState([]);
  const [isActive, setIsActive] = useState(false);

  useIsomorphicLayoutEffect(() => {
    refCallback.current = callback;
  });

  useEffect(() => {
    socket.current = createSocket(url);
    socket.current.addEventListener("open", () => {
      setIsActive(true);
    });

    socket.current.addEventListener("message", (event) => {
      setLogs((prevLogs) => [...prevLogs, event.data]);
      refCallback.current?.(event.data);
    });

    socket.current.addEventListener("close", () => {
      setIsActive(false);
    });

    return () => socket.current.close();
  }, []);

  return { logs, isActive };
};
