"use client";

import { useEffect } from "react";

// custom hooks to be used to discard dialogs such as modal and dropdowns
export const useEscapeKeyListener = (
  callback: () => void,
  isEnabled: boolean = true
) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (isEnabled && event.key === "Escape") {
        callback();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [callback, isEnabled]);
};
