import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

/* Hook to decide whether light or dark mode should be used and to toggle between them.
 * It first checks if preference is saved to local storage (that is, if the user has visited
 * the website before with the same browser and used the dark mode switch. If no preference
 * was found that way, system preference is checked. If no preference was found from
 * system settings, light mode is used. */
export const useColorScheme = () => {
  /* Check system preference */
  const systemPrefersDark = useMediaQuery({
    query: "(prefers-color-scheme: dark)",
  });
  /* Ensure we're in a browser environment and check preference saved in local storage */
  const darkPreferenceSaved =
    typeof window !== "undefined"
      ? window.localStorage.getItem("data-theme")
      : null;

  const [isDark, setIsDark] = useState<boolean | null>(
    darkPreferenceSaved === null ? null : darkPreferenceSaved === "dark"
  );
  const value = isDark === null ? systemPrefersDark : isDark;

  const handleDarkModeToggle = () => {
    const newValue = !value;
    if (typeof window !== "undefined")
      window.localStorage.setItem("data-theme", newValue ? "dark" : "light");
    setIsDark(!value);
  };

  useEffect(() => {
    if (typeof document !== "undefined")
      document.body.setAttribute("data-theme", value ? "dark" : "light");
  }, [value]);

  return {
    isDark: value,
    handleDarkModeToggle,
  };
};
