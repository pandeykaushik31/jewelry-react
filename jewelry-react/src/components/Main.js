import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.querySelector(".sticky-header");
      if (scroll < 100) {
        header?.classList.remove("sticky");
      } else {
        header?.classList.add("sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header sticky-header">
      <h1>Sticky Header</h1>
    </header>
  );
}

export default Header;
