import { useEffect, useState } from "react";
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

/* Hook to decide whether light or dark mode should be used and to toggle between them.
 * It first checks if preference is saved to local storage (that is, if the user has visited
 * the website before with the same browser and used the dark mode switch. If no preference
 * was found that way, system preference is checked. If no preference was found from
 * system settings, light mode is used. */
export const useColorScheme = () => {
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
  const handleDarkModeToggle = () => {
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

  return {
    isDark: currentTheme,
    handleDarkModeToggle,
  };
};
