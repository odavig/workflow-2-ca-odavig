const nameInput = document.querySelector("#nameInput")
const nameError = document.querySelector("#nameError")

const emailInput = document.querySelector("#emailInput")
const emailError = document.querySelector("#emailError")

const messageInput = document.querySelector("#messageInput")
const messageError = document.querySelector("#messageError")

const contactBtn = document.querySelector("#contactBtn")

contactBtn.addEventListener("click", validateForm)

function validateForm(evt) {
  evt.preventDefault()

  if (nameInput.value.length < 1) {
    nameError.style.display = "block"
  } else {
    nameError.style.display = "none"
  }

  if (emailInput.value.length < 1) {
    emailError.style.display = "block"
  } else {
    emailError.style.display = "none"
  }

  if (messageInput.value.length < 1) {
    messageError.style.display = "block"
  } else {
    messageError.style.display = "none"
  }
}


const openNavBtn = document.querySelector("#openNav")
const closeNavBtn = document.querySelector("#closeNav")
const nav = document.querySelector("#nav")
const header = document.querySelector("#header")
const sectionheading = document.querySelector(".sectionheading")

openNav.addEventListener("click", openNavFunc)
closeNav.addEventListener("click", closeNavFunc)

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
