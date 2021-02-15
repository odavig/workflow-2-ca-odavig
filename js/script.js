/*
* OK, time for something NEW...
*
* you may self destruct these comments when you have completed the challenge 🕹 if you choose to accept 🤖
*
* you can code! :-) no doubt.
* SOOOoooo now to take things to next level, lets talk Design Patterns.
* Which we will cover more in next semester, but as i always say "there is no time like the present" so here we go
*
* I want you to think of you code as modules and in also in a functional way. think of all the different peices of code you have and break them down into single purpose functions(where possible).
*
* Design Pattern 1
* The revealing module pattern
*
* The basic idea is you can without having to use ES6 module imports or requires and bundlers (because they are not yet fully supported in ALL browsers yet (IE10,11...)),
* you can have code that is broken down into modules and nicely encapsulated in one blobal "app" object namespaced to your website or app or section of app.
*
* - take charge of global variables, create encapsulation
* - break up you code modules,
* - these modules can be single purpose functions, or multiple functions that are related to one feature exporeted as an object.
* - these functions can be re-usable
* - functions that you will be able to call from any where in your app
*   A minimal code example: https://github.com/mannuelf/js-scratch-pad/tree/master/src/revealing-module-pattern
*   - in my example i have app , but I could have called it whatever
*   - I have a generic fetch function doing the API call, if I were smarter I would make it so generic that I can call that method from any module and return what ever data I asked of it via the argument passed in (api endpoint url)
*   - it creates nice closures so you dont have global variables, it will give you a sense of organistaion, control.
*
*   so in our checkout app at superbalist we had modules like:
*   - addreess.js
*   - googlemaps.js
*   - returns.js
*   - forms.js
*   ..etc
*
*   hopefully you can see the benefit, now this is great for vanilla js apps like this one you built, no react/vue/insert-framework.
*
* Now there is much more to this pattern than I have explained here and demo'd  ☝️  there of course:
* some light reading: https://addyosmani.com/resources/essentialjsdesignpatterns/book/
*/

const start = document.querySelector("#start")
const banner = document.querySelector("#banner")
const bannerText = document.querySelector("#bannerText")
const history = document.querySelector("#history")
const changeSlide = document.querySelector("#changeSlide")
const info = document.querySelector("#info")
const apollo = document.querySelector("#apollo")
const hubble = document.querySelector("#hubble")
const ongoing = document.querySelector("#ongoing")
const prevSlideBtn = document.querySelector("#prevSlideBtn")
const nextSlideBtn = document.querySelector("#nextSlideBtn")
const openNavBtn = document.querySelector("#openNav")
const closeNavBtn = document.querySelector("#closeNav")
const nav = document.querySelector("#nav")
const header = document.querySelector("#header")

const slides = [history, apollo, hubble, ongoing]

const bannerSlides = [banner, bannerText]

slides.unshift(bannerSlides)

start.addEventListener("click", showSlides)

let slideCounter = 1

function showSlides() {
  for (var i = 0; i < bannerSlides.length; i++) {
    bannerSlides[i].style.display = "none"
  }
  changeSlide.style.display = "block"
  info.style.display = "block"
  slides[slideCounter].style.display = "grid"
}

prevSlideBtn.addEventListener("click", showPreSlide)

function showPreSlide() {
  if (slideCounter <= 1) {
    for (var i = 0; i < bannerSlides.length; i++) {
      bannerSlides[i].style.display = "block"
      slides[slideCounter].style.display = "none"
    }
    changeSlide.style.display = "none"
    info.style.display = "none"
  } else if (slideCounter > 1) {
    slides[slideCounter].style.display = "none"
    slideCounter--
    console.log(slideCounter)
    slides[slideCounter].style.display = "grid"
    nextSlideBtn.style.display = "inline"
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

openNav.addEventListener("click", openNavFunc)
closeNav.addEventListener("click", closeNavFunc)

function openNavFunc() {
  nav.style.display  = "block"
  header.style.backgroundColor = "white"
  header.style.height = "100%"
}

function closeNavFunc() {
  nav.style.display  = "none"
  header.style.backgroundColor = "white"
  header.style.height = "0%"
}
