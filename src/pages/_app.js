import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CoreProvider from "@/components/theme";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CoreProvider>{getLayout(<Component {...pageProps} />)}</CoreProvider>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
