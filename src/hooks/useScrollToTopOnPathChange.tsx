import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Scroll to the top of the page when location is changed */
export const useScrollToTopOnPathChange = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
