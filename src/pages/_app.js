import ThemeContainer from "@/shared/components/theme-container";
import React from "react";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "semantic-ui-css/semantic.min.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = React.useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeContainer>
          {getLayout(<Component {...pageProps} />)}
        </ThemeContainer>
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
