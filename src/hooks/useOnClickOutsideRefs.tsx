import { RefObject, useEffect } from "react";

/* Hook that detects whether user clicked outside the mobile menu
 * when it's open, in which case it should close */
export const useOnClickOutsideRefs = (
  refs: Array<RefObject<HTMLElement>>,
  callback: () => void
) => {
  useEffect(() => {
    const refNotFound = refs.find((r) => !r?.current);
    if (refNotFound) {
      return;
    }

    const onDocumentMouseUp = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      const refHasTarget = refs.find((r) => r.current?.contains(targetElement));
      if (!refHasTarget) {
        callback();
      }
    };

    document.addEventListener("mouseup", onDocumentMouseUp);
    return () => {
      document.removeEventListener("mouseup", onDocumentMouseUp);
    };
  }, [refs]);
};
