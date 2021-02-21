import { openNav } from './components/nav'
openNav()

const start = document.querySelector("#start");
const banner = <HTMLElement>(document.querySelector("#banner"));
const bannerText = <HTMLElement>(document.querySelector("#bannerText"));
const history = <HTMLElement>(document.querySelector("#history"));
const changeSlide = <HTMLElement>(document.querySelector("#changeSlide"));
const info = <HTMLElement>(document.querySelector("#info"));
const apollo = <HTMLElement>(document.querySelector("#apollo"));
const hubble = <HTMLElement>(document.querySelector("#hubble"));
const ongoing = <HTMLElement>(document.querySelector("#ongoing"));
const prevSlideBtn = <HTMLElement>(document.querySelector("#prevSlideBtn"));
const nextSlideBtn = <HTMLElement>(document.querySelector("#nextSlideBtn"));

const slides = [history, apollo, hubble, ongoing] as HTMLElement[];

const bannerSlides = [banner, bannerText] as HTMLElement[];

slides.unshift(bannerSlides);

start.addEventListener("click", showSlides);

let slideCounter = 1;

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
  } else if (slideCounter > 1) {
    slides[slideCounter].style.display = "none";
    slideCounter--;
    console.log(slideCounter);
    slides[slideCounter].style.display = "grid";
    nextSlideBtn.style.display = "inline";
  }
}

nextSlideBtn.addEventListener("click", showNextSlide)

function showNextSlide() {
  if (slideCounter >= 3) {
    nextSlideBtn.style.display = "none"
  }
  slides[slideCounter].style.display = "none"
  slideCounter++
  console.log(slideCounter)
  slides[slideCounter].style.display = "grid"
}
