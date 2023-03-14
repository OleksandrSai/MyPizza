let slide1 = document.querySelector("#r1");
let slide2 = document.querySelector("#r2");
let slide3 = document.querySelector("#r3");
let slider = document.querySelector(".slider")

try {
   slide1.checked = true;
   stepSlide()
   document.addEventListener("input", examination)

   function stepSlide() {
      setTimeout(() => {
         slide1.checked = true; examination();
         setTimeout(() => {
            slide2.checked = true; examination();
            setTimeout(() => { slide3.checked = true; examination(); stepSlide() }, 3000)
         }, 3000)
      }, 3000)
   }

   function examination() {
      if (slide1.checked) slider.style.marginLeft = "0%";
      if (slide2.checked) slider.style.marginLeft = "-100%";
      if (slide3.checked) slider.style.marginLeft = "-200%";
   }
}
catch {

}







