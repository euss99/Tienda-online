const menuEmail = document.querySelector(".navbar-email");
const menuHamIcon = document.querySelector(".menu");
const menuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const aside = document.querySelector(".product-detail");

menuEmail.addEventListener("click", toggleDesktopMenu);
menuHamIcon.addEventListener("click", toggleMobileMenu);
menuCarritoIcon.addEventListener("click", toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClose = aside.classList.contains("inactive"); // Si esta cerrado el carrito de compras

    if (!isAsideClose) {
        aside.classList.add("inactive"); // Cerrar el carrito de compras
    }

    desktopMenu.classList.toggle("inactive"); // Para activar la clase inactive del desktop-menu
}
function toggleMobileMenu() {
    const isAsideClose = aside.classList.contains("inactive"); // Si esta cerrado el carrito de compras

    if (!isAsideClose) {
        aside.classList.add("inactive"); // Cerrar el carrito de compras
    }

    mobileMenu.classList.toggle("inactive");
}
function toggleCarritoAside() {
    const isMobileMenuClose = mobileMenu.classList.contains("inactive"); // Si esta cerrado el menu mobile
    const isDesktopMenuClose = desktopMenu.classList.contains("inactive"); // Si esta cerrado el menu desktop
    
    if (!isMobileMenuClose) {
        mobileMenu.classList.add("inactive"); // Cerrar el mobile menu
    }
    if (!isDesktopMenuClose) {
        desktopMenu.classList.add("inactive"); // Cerrar el desktop menu
    }

    aside.classList.toggle("inactive");
}