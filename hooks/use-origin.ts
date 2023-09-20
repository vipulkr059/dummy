import { useState, useEffect } from "react";

export const useOrigin = () => {
  const [isMounted, setisMounted] = useState(false);
  useEffect(() => {
    setisMounted(true);
  }, []);

  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  if (!origin) {
    return "";
  }

  return origin;
};
