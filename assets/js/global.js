const openNavMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelector(".mobile-link")
const closeNavMenu = document.querySelector(".close-menu")


openNavMenu.addEventListener("click", openNavMenuHandle);

function openNavMenuHandle() {
    mobileLinks.style.right = "0";
    mobileLinks.style.width = "100%";
}

closeNavMenu.addEventListener("click", closeMenuHandle);

function closeMenuHandle() {
    mobileLinks.style.right = "-800px";
    mobileLinks.style.width = "70%";
}