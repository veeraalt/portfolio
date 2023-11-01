import { RefObject, useEffect } from "react";

/* Hook that detects whether user clicked outside a component, in which
case the callback function is triggered. Takes as parameters a list of refs
and the callback function. */
export const useOnClickOutsideRefs = (
  refs: Array<RefObject<HTMLElement>>,
  callback: () => void
) => {
  useEffect(() => {
    const refNotFound = refs.find((r) => !r?.current);
    if (refNotFound) {
      return;
    }

    const onClick = (e: MouseEvent) => {
      const targetElement = e.target as HTMLElement;
      const refHasTarget = refs.find((r) => r.current?.contains(targetElement));
      if (!refHasTarget) {
        e.preventDefault();
        callback();
      }
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
    };
  }, [refs, callback]);
};
