export function handleScroll() {
    const navbar = document.querySelector('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('fixed');
    }
    else {
        navbar.classList.remove('fixed');
    }
    console.log(12);
}