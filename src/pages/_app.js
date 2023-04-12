import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CoreProvider from "@/components/theme";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";
import ReactQueryProvider from "@/components/providers/react-query-provider";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ReactQueryProvider dehydratedState={pageProps?.dehydratedState}>
      <CoreProvider>{getLayout(<Component {...pageProps} />)}</CoreProvider>
    </ReactQueryProvider>
  );
}
