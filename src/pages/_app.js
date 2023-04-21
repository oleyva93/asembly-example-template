import CoreThemeProvider from "@/components/theme";
import AppProvider from "@/providers/app-provider";
import ReactQueryProvider from "@/providers/react-query-provider";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ReactQueryProvider dehydratedState={pageProps?.dehydratedState}>
      <AppProvider>
        <CoreThemeProvider>
          {getLayout(<Component {...pageProps} />)}
        </CoreThemeProvider>
      </AppProvider>
    </ReactQueryProvider>
  );
}
