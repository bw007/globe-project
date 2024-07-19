// Navbar fixed method
function handleScroll(): void {
  const navbar = document.querySelector(".header-nav") as HTMLElement | null;
  const header = document.querySelector(".header") as HTMLElement | null;

  if (navbar) {
    if (window.scrollY > 200 && window.innerWidth > 520) {
      navbar?.classList.add("header-nav__fixed");
      header?.classList.add("pt-90");
    } else if(window.scrollY > 200 && window.innerWidth < 520) {
      navbar?.classList.add("header-nav__fixed");
      header?.classList.add("pt-90");
    } else {
      navbar?.classList.remove("header-nav__fixed");
      header?.classList.remove("pt-75", "pt-90");
    }
  }
}

// Debounce for navbar fixed method
function debounce<T extends (...args: any[]) => void>(func: T, wait: number): T { 
  let timeout: NodeJS.Timeout | null = null;
  return function(this: any, ...args: Parameters<T>): void {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func.apply(this, args), wait);
  } as T;
}

const debouncedHandleScroll = debounce(handleScroll, 100);
window.addEventListener("scroll", debouncedHandleScroll);
