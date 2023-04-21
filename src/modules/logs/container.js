import createInternalCtx from "@/lib/create-context";
import Content from "./content";
import { memo } from "react";

const { Provider, useStore } = createInternalCtx({
  logs: [],
  tempLogs: [],
});

export const useLogsCtx = (selector) =>
  useStore(selector || ((state) => state));

const Container = () => {
  return (
    <Provider>
      <Content />
    </Provider>
  );
};

export default memo(Container);
