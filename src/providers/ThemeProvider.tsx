import { createContext, useContext, useState } from "react";
import Theme from "../interfaces/Theme";

interface ThemeContextInterface {
  themeState: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextInterface>({ themeState: "dark", toggleTheme: () => {} });

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [themeState, setThemeState] = useState<Theme>("dark");

  function toggleTheme() {
    setThemeState((prevState) => (prevState === "light" ? "dark" : "light"));
  }

  return <ThemeContext.Provider value={{ themeState, toggleTheme }}>{children}</ThemeContext.Provider>;
};
