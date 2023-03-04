let burgerButton = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu")

burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    headerMenu.classList.toggle("activeMenu")
})