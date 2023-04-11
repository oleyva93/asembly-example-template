import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";
import { lightPalette } from "./const";

const ColorModeContext = createContext({
  toggleColorMode: () => {},
  mode: "light",
});

export const useSiteTheme = () => {
  return useContext(ColorModeContext);
};

const Layout = ({ children }) => {
  const context = useSiteTheme();
  return typeof children === "function" ? children(context) : children;
};

const Provider = ({ children }) => {
  const { theme, setTheme } = useTheme();

  const setSiteTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme]);

  const customTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: theme || "light",
          ...lightPalette,
        },
      }),
    [theme]
  );

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  return (
    <ColorModeContext.Provider value={{ setSiteTheme, theme }}>
      <MuiThemeProvider theme={customTheme}>
        <Layout>{children}</Layout>
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Provider;
