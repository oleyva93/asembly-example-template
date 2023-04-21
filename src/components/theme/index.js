import { ThemeProvider } from "next-themes";
import { memo } from "react";
import Provider from "./provider";

const CoreThemeProvider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
};

export default memo(CoreThemeProvider);
