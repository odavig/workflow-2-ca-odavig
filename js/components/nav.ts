const openNavBtn = document.querySelector("#openNav");
const closeNavBtn = document.querySelector("#closeNav");
const nav = <HTMLElement>(document.querySelector("#nav"));
const header = <HTMLElement>(document.querySelector("#header"));
const sectionheading = <HTMLElement>(document.querySelector(".sectionheading"));

export function openNav() {
  openNavBtn.addEventListener("click", openNavFunc)
  closeNavBtn.addEventListener("click", closeNavFunc)


  function openNavFunc() {
    nav.style.display  = "block"
    header.style.backgroundColor = "white"
    header.style.backgroundImage = "none"
    header.style.height = "100vh"
    sectionheading.style.display = "none"
  }

  function closeNavFunc() {
    nav.style.display  = "none"
    header.style.backgroundColor = "transparent"
    sectionheading.style.display = "block"
    header.style.backgroundImage = "url(media/hubble-telescope.jpg)"
    header.style.height = "250px"
  }
}
