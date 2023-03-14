const home = "./index.html"
const menu = "./menu.html"
const order = "./contact.html"
const blog = "./blog.html"
const service = "./services.html"
const about = "./about.html"
const contact = "./contact.html"





let logo = document.querySelector(".header__logo")
.addEventListener("click", ()=> window.location.assign(home));

let sliderButtonOrder = document.querySelectorAll(".title__box__button__first")
.forEach(el=> el.addEventListener("click", ()=> window.location.assign(contact)));

let sliderButtonView = document.querySelectorAll(".title__box__button__second")
.forEach(el=> el.addEventListener("click", ()=> window.location.assign(menu)));

let menu2LinkMenu = document.querySelectorAll(".item__body__links")
.forEach(el=> el.addEventListener("click", ()=> window.location.assign(menu)));

let menu2AddtoCart = document.querySelectorAll(".bodyItems__cart")
.forEach(el=> el.addEventListener("click", ()=> window.location.assign(contact)));

let menuPageOrder = document.querySelectorAll(".about__button")
.forEach(el=> el.addEventListener("click", ()=> window.location.assign(contact)));



let footerAbout = document.querySelector(".footer__about__body")
.addEventListener("click", ()=> window.location.assign(about));

let footerService = document.querySelectorAll(".footer__service__item")
.forEach(el=> el.addEventListener("click", ()=> window.location.assign(service)));

let footerBlog = document.querySelectorAll(".footer__recent__blog")
.forEach(el=> el.addEventListener("click", ()=> window.location.assign(blog)));




