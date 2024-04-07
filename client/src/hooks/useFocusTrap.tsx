import React, { useEffect } from "react";

/* Trap focus inside an element, such as a menu window */
export const useFocusTrap = (
  active: boolean,
  containerRef: React.RefObject<HTMLElement>
) => {
  useEffect(() => {
    if (active && containerRef.current) {
      const container = containerRef.current;
      container.focus();

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Tab") {
          const focusableElements = container.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [active, containerRef]);
};
