"use strict";
document.addEventListener('DOMContentLoaded', () => {
    var _a, _b;
    const DEBOUNCE_DELAY = 300; // Global debounce delay constant
    const SIDEBAR_OPEN_CLASS = "sidebar__open";
    // Navbar fixed method
    function handleScroll() {
        const navbar = document.querySelector(".header-nav");
        const header = document.querySelector(".header");
        if (navbar && header) {
            if (window.scrollY > 200 && window.innerWidth > 520) {
                navbar.classList.add("header-nav__fixed");
                header.classList.add("pt-90");
            }
            else if (window.scrollY > 200 && window.innerWidth < 520) {
                navbar.classList.add("header-nav__fixed");
                header.classList.add("pt-75");
            }
            else {
                navbar.classList.remove("header-nav__fixed");
                header.classList.remove("pt-75", "pt-90");
            }
        }
    }
    // Debounce method
    function debounce(func, wait) {
        let timeout;
        return function (...args) {
            if (timeout !== undefined) {
                clearTimeout(timeout);
            }
            timeout = window.setTimeout(() => func.apply(this, args), wait);
        };
    }
    // Use debounced scroll handler
    const debouncedHandleScroll = debounce(handleScroll, DEBOUNCE_DELAY);
    window.addEventListener("scroll", debouncedHandleScroll);
    // Sidebar
    const navbarMenuIcon = document.querySelector(".header-nav__bar3");
    const sidebarCloseIcon = document.querySelector(".sidebar__close");
    if (navbarMenuIcon) {
        navbarMenuIcon.addEventListener("click", debounce(sidebarToggler, DEBOUNCE_DELAY));
    }
    if (sidebarCloseIcon) {
        sidebarCloseIcon.addEventListener("click", debounce(sidebarToggler, DEBOUNCE_DELAY));
    }
    // Sidebar toggler
    const sidebarOverlay = document.querySelector(".sidebar-overlay");
    const sidebar = document.querySelector(".sidebar");
    const bodyElement = document.body;
    if (sidebarOverlay && sidebar) {
        sidebarOverlay.addEventListener("click", function () {
            sidebarOverlay.classList.add("hidden");
            bodyElement.classList.toggle("overflow-hidden");
            sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.remove(SIDEBAR_OPEN_CLASS);
        });
    }
    function sidebarToggler() {
        bodyElement.classList.toggle("overflow-hidden");
        sidebarOverlay === null || sidebarOverlay === void 0 ? void 0 : sidebarOverlay.classList.toggle("hidden");
        sidebar === null || sidebar === void 0 ? void 0 : sidebar.classList.toggle(SIDEBAR_OPEN_CLASS);
    }
    // Menu activator
    const links = document.querySelectorAll('#menu-link');
    const pathSegments = window.location.pathname.split("/");
    const currentPath = (_b = (_a = pathSegments.at(-1)) === null || _a === void 0 ? void 0 : _a.replace(".html", "")) !== null && _b !== void 0 ? _b : "";
    links.forEach(link => {
        var _a;
        const pageName = (_a = link.getAttribute("data-page")) !== null && _a !== void 0 ? _a : "";
        console.log(currentPath);
        if (currentPath.includes(pageName) || currentPath == "index" && pageName == "flight") {
            link.classList.add('menu__link--active');
        }
    });
});