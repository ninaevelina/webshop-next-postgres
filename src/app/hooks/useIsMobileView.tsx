"use client";

import { useState, useEffect } from "react";

export default function useIsMobileView(): boolean {
  const [isMobileView, setIsMobileView] = useState(
    typeof window !== "undefined" ? window.innerWidth <= 769 : false
  );

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsMobileView(window.innerWidth <= 769);
      };
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return isMobileView;
}
