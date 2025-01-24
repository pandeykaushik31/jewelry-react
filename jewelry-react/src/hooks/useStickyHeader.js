import { useEffect } from "react";

export const useStickyHeader = () => {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".sticky-header");
      if (window.scrollY < 100) {
        header?.classList.remove("sticky");
      } else {
        header?.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
};
