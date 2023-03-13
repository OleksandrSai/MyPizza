let burgerButton = document.querySelector(".header__burger");
let headerMenu = document.querySelector(".header__menu")
colorMenu()


burgerButton.addEventListener("click", ()=>{
    burgerButton.classList.toggle("active");
    headerMenu.classList.toggle("activeMenu")
})
function colorMenu(){
    document.querySelectorAll("a").forEach(el=> {
       
        let path = window.location.pathname
        if(path == "/" && el.textContent == "Home" ) el.style.color = "gold";
        if(`/MyPizza/${el.textContent.toLowerCase()}.html` == path) {
            el.style.color = "gold";
        }
    })
}



