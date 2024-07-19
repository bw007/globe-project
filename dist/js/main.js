"use strict";
// Navbar fixed method
function handleScroll() {
    const navbar = document.querySelector(".header-nav");
    const header = document.querySelector(".header");
    if (navbar) {
        if (window.scrollY > 200 && window.innerWidth > 520) {
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("header-nav__fixed");
            header === null || header === void 0 ? void 0 : header.classList.add("pt-90");
        }
        else if (window.scrollY > 200 && window.innerWidth < 520) {
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.add("header-nav__fixed");
            header === null || header === void 0 ? void 0 : header.classList.add("pt-90");
        }
        else {
            navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("header-nav__fixed");
            header === null || header === void 0 ? void 0 : header.classList.remove("pt-75", "pt-90");
        }
    }
}
// Debounce for navbar fixed method
function debounce(func, wait) {
    let timeout = null;
    return function (...args) {
        if (timeout !== null) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}
const debouncedHandleScroll = debounce(handleScroll, 100);
window.addEventListener("scroll", debouncedHandleScroll);