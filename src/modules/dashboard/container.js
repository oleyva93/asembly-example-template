import createInternalCtx from "@/lib/create-context";
import Content from "./content";
import { memo } from "react";

const { Provider, useStore } = createInternalCtx({
  releases: [],
  inventory: [],
  filters: {
    releases: {
      limit: 10,
      page: 1,
    },
    inventory: {
      limit: 10,
      page: 1,
    },
  },
});

export const useDashboardCtx = (selector) =>
  useStore(selector || ((state) => state));

const Container = () => {
  return (
    <Provider>
      <Content />
    </Provider>
  );
};

export default memo(Container);
