"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openNav = void 0;
var openNavBtn = document.querySelector("#openNav");
var closeNavBtn = document.querySelector("#closeNav");
var nav = (document.querySelector("#nav"));
var header = (document.querySelector("#header"));
var sectionheading = (document.querySelector(".sectionheading"));
function openNav() {
    openNavBtn.addEventListener("click", openNavFunc);
    closeNavBtn.addEventListener("click", closeNavFunc);
    function openNavFunc() {
        nav.style.display = "block";
        header.style.backgroundColor = "white";
        header.style.backgroundImage = "none";
        header.style.height = "100vh";
        sectionheading.style.display = "none";
    }
    function closeNavFunc() {
        nav.style.display = "none";
        header.style.backgroundColor = "transparent";
        sectionheading.style.display = "block";
        header.style.backgroundImage = "url(media/hubble-telescope.jpg)";
        header.style.height = "250px";
    }
}
exports.openNav = openNav;
