const toggleButton = document.querySelector(".nav__icon");
const navbarLinks = document.querySelector(".nav__list");

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
});