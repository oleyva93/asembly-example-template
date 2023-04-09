import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ThemeProvider, useTheme } from "next-themes";
import {
  createContext,
  memo,
  useCallback,
  useContext,
  useEffect,
  useMemo,
} from "react";

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

const ThemeContainer = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Provider>{children}</Provider>
    </ThemeProvider>
  );
};

export default memo(ThemeContainer);

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

const lightPalette = {
  primary: {
    main: "#67bd4d",
    contrastText: "#fff",
  },
  secondary: {
    main: "#202639",
    contrastText: "#fff",
  },
  error: {
    main: "#ff604f",
    contrastText: "#fff",
  },
  gray: {
    main: "#999999",
    emphasis: "#575757",
    title: "#373737",
    map: "#d1d1d1",
    contrastText: "black",
  },
  border: {
    input: "#c4c4c4",
  },
};
