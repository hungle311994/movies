import { useEffect, useState } from "react";

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);
  const handleScrollY = () => {
    setScrollY(document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScrollY);
    return () => {
      window.removeEventListener("scroll", handleScrollY);
    };
  }, []);
  return [scrollY];
};
