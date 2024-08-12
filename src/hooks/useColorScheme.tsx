import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useMediaQuery } from "react-responsive";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

// Helper function to get theme from local storage
const getStoredTheme = (): Theme | null => {
  if (typeof window === "undefined") return null;
  const theme = window.localStorage.getItem("data-theme");
  return theme === Theme.LIGHT || theme === Theme.DARK ? theme : null;
};

// Helper function to store theme in local storage
const storeTheme = (theme: Theme) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("data-theme", theme);
  }
};

// Create a context
const ThemeContext = createContext({
  isDark: true,
  toggleDarkMode: () => {},
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Check system preference
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });

  // Check local storage
  const storedTheme = getStoredTheme();

  const [isDark, setIsDark] = useState<boolean | null>(
    storedTheme ? storedTheme === Theme.DARK : null
  );

  const currentTheme = isDark === null ? systemPrefersDark : isDark;

  // Change the theme
  const toggleDarkMode = () => {
    const newTheme = !currentTheme;
    storeTheme(newTheme ? Theme.DARK : Theme.LIGHT);
    setIsDark(newTheme);
  };

  /* Set 'data-theme' attribute to document body on the first render and
   * each time the theme is changed */
  useEffect(() => {
    if (typeof document !== "undefined")
      document.body.setAttribute(
        "data-theme",
        currentTheme ? Theme.DARK : Theme.LIGHT
      );
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ isDark: currentTheme, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the color scheme
export const useColorScheme = () => {
  return useContext(ThemeContext);
};
