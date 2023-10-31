import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Hook that scrolls to the top of the page when location is changed */
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
