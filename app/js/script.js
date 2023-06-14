const header = document.querySelector("#Home");
const navToggle = document.getElementById("nav__toggle");
const navbar = document.querySelector(".nav");
const navLinks = document.querySelector(".nav__links");
const navLink = document.querySelectorAll(".nav__list");
const overlay = document.querySelector("#overlay");
const sections = document.querySelectorAll("section");
const fabButton = document.querySelector(".fab-button");

/** auto hide toggle menu and overlay when the user resize the window */
window.addEventListener("resize", () => {
  if (window.innerWidth > 500) {
    navbar.classList.remove("nav--open-menu");
    overlay.classList.remove("overlay");
  }
});

//set scroll padding top dynamically when smooth scrolling
document.documentElement.style.setProperty(
  "--scroll-padding",
  header.scrollY - 5 + "px"
);

// add an event listener for scroll
window.onscroll = function () {
  if (window.scrollY > 80 || navbar.classList.contains("nav--open-menu")) {
    header.classList.add("bg-dark", "box-shadow");
    navbar.classList.add("nav__brand--shrink");
  } else {
    header.classList.remove("bg-dark", "box-shadow");
    navbar.classList.remove("nav__brand--shrink");
  }
  //  navHighlighter();
  showFabButton();
};
// hide and show toggle menu using the hamburger menu
// navToggle.addEventListener("click", () => {
//   toggleMenu();
// });

/**
 * hide and show toggle menu using the links
 * set the active styling upon clicking the link
 */
// navLink.forEach((link) => {
//   link.addEventListener("click", () => {
//     // if (window.innerWidth > 768) {
//     //   navbar.classList.remove("nav--open-menu");
//     //   overlay.classList.remove("overlay");
//     // } else {
//     //   toggleMenu();
//     // }
//     console.log(link);
//     link.classList.add("nav__link--active");
//     let siblingLinks = [...navLink].filter((child) => child != link);
//     siblingLinks.forEach((element) => {
//       if (element.classList.contains("nav__link--active")) {
//         element.classList.remove("nav__link--active");
//       }
//     });
//   });
// });

// hide and show toggle menu function
function toggleMenu() {
  fabButton.style.display = "none";
  overlay.classList.toggle("overlay");
  navbar.classList.toggle("nav--open-menu");
  header.classList.add("bg-dark", "box-shadow");
}

/*
    this function will set the nav link to active when scrolling 
    to its section
*/

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  overlay.classList.remove("overlay");
  navbar.classList.remove("nav--open-menu");
  history.replaceState(null, "", location.origin);
}

// When the user scrolls down 60px  from the top , shrink the navbar and show the scroll top button
function showFabButton() {
  // if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
  //   fabButton.style.display = "block";
  // } else {
  //   fabButton.style.display = "none";
  // }
}

// swiper configurations
let swiper = new Swiper(".testimonials ", {
  slidesPerView: 1,
  spaceBetween: 35,
  slidesPerGroup: 1,
  grabCursor: true,
  centerSlide: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 2,
    },
    960: {
      spaceBetween: 60,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
  },
});
