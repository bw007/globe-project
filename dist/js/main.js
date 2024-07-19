"use strict";
function handleScroll() {
    const navbar = document.querySelector(".header-nav");
    if (window.scrollY > 100) {
        navbar.classList.add("fixed");
    }
    else {
        navbar.classList.remove("fixed");
    }
    console.log(navbar);
}
handleScroll();