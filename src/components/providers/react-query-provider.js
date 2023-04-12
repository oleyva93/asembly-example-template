import { memo, useState } from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const reactQueryOptions = {
  defaultOptions: {
    queries: {
      staleTime: 15 * 60 * 1000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      getNextPageParam: (lastPage) => lastPage.next,
      retry: false,
    },
  },
};

const ReactQueryProvider = ({ children, dehydratedState }) => {
  const [queryClient] = useState(() => new QueryClient(reactQueryOptions));

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={dehydratedState}>{children}</Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default memo(ReactQueryProvider);
