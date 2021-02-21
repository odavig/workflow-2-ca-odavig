import { openNav } from './components/nav'
openNav()

const nameInput = <HTMLInputElement>(document.querySelector("#nameInput"))
const nameError = <HTMLElement>(document.querySelector("#nameError"));

const emailInput = <HTMLInputElement>(document.querySelector("#emailInput"))
const emailError = <HTMLElement>(document.querySelector("#emailError"));

const messageInput = <HTMLInputElement>(document.querySelector("#messageInput"));
const messageError = <HTMLElement>(document.querySelector("#messageError"));

const contactBtn = document.querySelector("#contactBtn")

contactBtn.addEventListener("click", validateForm)

export function validateForm(evt) {
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
