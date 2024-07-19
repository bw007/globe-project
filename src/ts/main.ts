const DEBOUNCE_DELAY = 300;  // Global debounce delay constant
const SIDEBAR_OPEN_CLASS = "sidebar__open";

// Navbar fixed method
function handleScroll(): void {
  const navbar = document.querySelector(".header-nav") as HTMLElement | null;
  const header = document.querySelector(".header") as HTMLElement | null;

  if (navbar && header) {
    if (window.scrollY > 200 && window.innerWidth > 520) {
      navbar.classList.add("header-nav__fixed");
      header.classList.add("pt-90");
    } else if (window.scrollY > 200 && window.innerWidth < 520) {
      navbar.classList.add("header-nav__fixed");
      header.classList.add("pt-75");
    } else {
      navbar.classList.remove("header-nav__fixed");
      header.classList.remove("pt-75", "pt-90");
    }
  }
}

// Debounce method
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void {
  let timeout: number | undefined;
  return function(this: any, ...args: Parameters<T>): void {
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
const navbarMenuIcon = document.querySelector(".header-nav__bar3") as HTMLElement | null;
const sidebarCloseIcon = document.querySelector(".sidebar__close") as HTMLElement | null;

if (navbarMenuIcon) {
  navbarMenuIcon.addEventListener("click", debounce(sidebarToggler, DEBOUNCE_DELAY));
}

if (sidebarCloseIcon) {
  sidebarCloseIcon.addEventListener("click", debounce(sidebarToggler, DEBOUNCE_DELAY));
}

// Sidebar toggler
const sidebarOverlay = document.querySelector(".sidebar-overlay") as HTMLElement | null;
const sidebar = document.querySelector(".sidebar") as HTMLElement | null;
const bodyElement = document.body as HTMLElement;

if (sidebarOverlay && sidebar) {
  sidebarOverlay.addEventListener("click", function (): void {
    sidebarOverlay.classList.add("hidden");
    bodyElement.classList.toggle("overflow-hidden")
    sidebar?.classList.remove(SIDEBAR_OPEN_CLASS);
  })
}

function sidebarToggler(): void {
  bodyElement.classList.toggle("overflow-hidden")
  sidebarOverlay?.classList.toggle("hidden");
  sidebar?.classList.toggle(SIDEBAR_OPEN_CLASS);
}
