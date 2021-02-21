"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateForm = void 0;
var nav_1 = require("./components/nav");
nav_1.openNav();
var nameInput = (document.querySelector("#nameInput"));
var nameError = (document.querySelector("#nameError"));
var emailInput = (document.querySelector("#emailInput"));
var emailError = (document.querySelector("#emailError"));
var messageInput = (document.querySelector("#messageInput"));
var messageError = (document.querySelector("#messageError"));
var contactBtn = document.querySelector("#contactBtn");
contactBtn.addEventListener("click", validateForm);
function validateForm(evt) {
    evt.preventDefault();
    if (nameInput.value.length < 1) {
        nameError.style.display = "block";
    }
    else {
        nameError.style.display = "none";
    }
    if (emailInput.value.length < 1) {
        emailError.style.display = "block";
    }
    else {
        emailError.style.display = "none";
    }
    if (messageInput.value.length < 1) {
        messageError.style.display = "block";
    }
    else {
        messageError.style.display = "none";
    }
}
exports.validateForm = validateForm;
