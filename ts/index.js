"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nav_1 = require("./components/nav");
nav_1.openNav();
var start = document.querySelector("#start");
var banner = (document.querySelector("#banner"));
var bannerText = (document.querySelector("#bannerText"));
var history = (document.querySelector("#history"));
var changeSlide = (document.querySelector("#changeSlide"));
var info = (document.querySelector("#info"));
var apollo = (document.querySelector("#apollo"));
var hubble = (document.querySelector("#hubble"));
var ongoing = (document.querySelector("#ongoing"));
var prevSlideBtn = (document.querySelector("#prevSlideBtn"));
var nextSlideBtn = (document.querySelector("#nextSlideBtn"));
var slides = [history, apollo, hubble, ongoing];
var bannerSlides = [banner, bannerText];
slides.unshift(bannerSlides);
start.addEventListener("click", showSlides);
var slideCounter = 1;
function showSlides() {
    for (var i = 0; i < bannerSlides.length; i++) {
        bannerSlides[i].style.display = "none";
    }
    changeSlide.style.display = "block";
    info.style.display = "block";
    slides[slideCounter].style.display = "grid";
}
prevSlideBtn.addEventListener("click", showPreSlide);
function showPreSlide() {
    if (slideCounter <= 1) {
        for (var i = 0; i < bannerSlides.length; i++) {
            bannerSlides[i].style.display = "block";
            slides[slideCounter].style.display = "none";
        }
        changeSlide.style.display = "none";
        info.style.display = "none";
    }
    else if (slideCounter > 1) {
        slides[slideCounter].style.display = "none";
        slideCounter--;
        console.log(slideCounter);
        slides[slideCounter].style.display = "grid";
        nextSlideBtn.style.display = "inline";
    }
}
nextSlideBtn.addEventListener("click", showNextSlide);
function showNextSlide() {
    if (slideCounter >= 3) {
        nextSlideBtn.style.display = "none";
    }
    slides[slideCounter].style.display = "none";
    slideCounter++;
    console.log(slideCounter);
    slides[slideCounter].style.display = "grid";
}
