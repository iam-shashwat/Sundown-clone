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
