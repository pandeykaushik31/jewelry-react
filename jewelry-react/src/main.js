import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "slick-carousel";
import "owl.carousel";
import { WOW } from "wowjs";

// Initialize WOW.js for animations
export const initializeWow = () => {
  new WOW().init();
};

// Sticky Navbar
export const stickyNavbar = () => {
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header_area");
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  });
};

// Background Image Setup
export const dataBackgroundImage = () => {
  $("[data-bgimg]").each(function () {
    const bgImgUrl = $(this).data("bgimg");
    $(this).css({
      "background-image": `url(${bgImgUrl})`,
    });
  });
};

// Mini Cart Toggle
export const miniCartToggle = () => {
  $(".cart_link > a").on("click", function () {
    $(".mini_cart").addClass("active");
  });

  $(".mini_cart_close > a").on("click", function () {
    $(".mini_cart").removeClass("active");
  });
};

// Product Sliders (Owl Carousel & Slick)
export const initializeSliders = () => {
  // Main Banner Slider
  $(".slider_area").owlCarousel({
    animateOut: "fadeOut",
    autoplay: true,
    loop: true,
    nav: false,
    autoplayTimeout: 6000,
    items: 1,
    dots: true,
  });

  // Product Row Slider
  $(".product_row1").slick({
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 5,
    arrows: true,
    prevArrow: '<button class="prev_arrow"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="next_arrow"><i class="ion-chevron-right"></i></button>',
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
    ],
  });

  // Blog Section Slider
  $(".blog_column3").owlCarousel({
    autoplay: true,
    loop: true,
    nav: true,
    autoplayTimeout: 5000,
    items: 3,
    dots: false,
    margin: 30,
    navText: [
      '<i class="ion-chevron-left"></i>',
      '<i class="ion-chevron-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  // Product Thumbnail Navigation
  $(".product_navactive").owlCarousel({
    autoplay: false,
    loop: true,
    nav: true,
    items: 4,
    dots: false,
    navText: [
      '<i class="ion-chevron-left arrow-left"></i>',
      '<i class="ion-chevron-right arrow-right"></i>',
    ],
    responsiveClass: true,
    responsive: {
      0: { items: 1 },
      250: { items: 2 },
      480: { items: 3 },
      768: { items: 4 },
    },
  });

  $(".modal").on("shown.bs.modal", function () {
    $(".product_navactive").resize();
  });

  $(".product_navactive a").on("click", function (e) {
    e.preventDefault();
    let $href = $(this).attr("href");
    $(".product_navactive a").removeClass("active");
    $(this).addClass("active");
    $(".product-details-large .tab-pane").removeClass("active show");
    $(".product-details-large " + $href).addClass("active show");
  });
};

// Initialize all functions when document is ready
$(document).ready(function () {
  initializeWow();
  stickyNavbar();
  dataBackgroundImage();
  miniCartToggle();
  initializeSliders();
});
