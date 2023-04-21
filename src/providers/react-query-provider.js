import { memo, useState } from "react";
import queryClient from "@/config/query-client";
import { Hydrate, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const ReactQueryProvider = ({ children, dehydratedState }) => {
  const [qc] = useState(() => queryClient);

  return (
    <QueryClientProvider client={qc}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default memo(ReactQueryProvider);
