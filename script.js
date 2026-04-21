if (window.LocomotiveScroll) {
    new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,
        smartphone: {
            smooth: true
        },
        tablet: {
            smooth: true
        }
    });
}

const elemC = document.querySelector("#elem-container");
const fixedImg = document.querySelector("#fixed-img");
const elements = document.querySelectorAll(".element");

if (elemC && fixedImg) {
    elemC.addEventListener("mouseenter", function () {
         fixedImg.style.display = "block";
    });

    elemC.addEventListener("mouseleave", function () {
        fixedImg.style.display = "none";
    });

    elements.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            const image = elem.getAttribute("data-image");

            if (image) {
                fixedImg.style.backgroundImage = `url(${image})`;
            }
        });
    });
}

 const swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 100,
     
    });


const menu = document.querySelector("nav h3")
const full = document.querySelector("#full-scr")
const navimg=document.querySelector("nav img")
const Flag =0
menu.addEventListener("click", function(){
    if(Flag==0){
        full.style.top = 0
        navimg.style.opacity= 0
        Flag = 1
    }else{
        full.style.top = "-100%"
        navimg.style.opacity= 1
        Flag = 0
    }
     
})