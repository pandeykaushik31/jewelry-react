// Example logic from your original `main.js`
export const stickyNavbar = () => {
    window.addEventListener("scroll", () => {
      const header = document.querySelector(".header_area");
      if (window.scrollY > 50) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  };
  