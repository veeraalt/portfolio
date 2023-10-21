import { useEffect, useState } from "react";

/* Hook to toggle between light and dark modes.
 * Light mode is the default, and dark mode preference is saved to
 * local storage. */
export const useColorScheme = () => {
  const darkModeSaved = window.localStorage.getItem("dark-mode");
  const [isDarkModeOn, setDarkModeOn] = useState(
    darkModeSaved === "true" ? true : false
  );

  const handleDarkModeToggle = () => {
    if (!isDarkModeOn) {
      window.localStorage.setItem("dark-mode", "true");
    } else {
      window.localStorage.removeItem("dark-mode");
    }
    setDarkModeOn(!isDarkModeOn);
  };

  useEffect(() => {
    if (isDarkModeOn) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkModeOn]);

  return {
    isDarkModeOn,
    handleDarkModeToggle,
  };
};
