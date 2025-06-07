// Table of contents
// ------------------------------------------------
// 01. header
// 02. Portfolio
// 03. form validation

// ------------------------------------------------
//  ------------01. header------------
let navLinks = document.getElementsByClassName("nav-link");
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("mouseover", function () {
    this.style.color = "#fe3f40";
  });
  navLinks[i].addEventListener("mouseout", function () {
    this.style.color = "black";
  });
  navLinks[i].addEventListener("click", function () {
    for (let j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove("active-nav");
    }
    this.classList.add("active-nav");
  });
}
let navButton = document.getElementById("navButton");
navButton.addEventListener("mouseover", function () {
  this.style.backgroundColor = "#03a4ed";
});
navButton.addEventListener("mouseout", function () {
  this.style.backgroundColor = "#fe3f40";
});
//  ------------03. form validation------------
let form = document.forms[0];
let formName = document.getElementById("name");
let formSurname = document.getElementById("surname");
let formEmail = document.getElementById("email");
let formMessage = document.getElementById("message");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // clear errors if needed
  ["nameError", "surnameError", "emailError", "messageError"].forEach((id) => {
    document.getElementById(id).innerHTML = "";
  });
  let nameReg = /[a-zA-Z]{4,8}$/;
  let surnameReg = /[a-zA-Z]{4,12}$/;
  let emailReg = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})$/;
  let messageReg = /^[a-zA-Z0-9 ]{20,}$/;
  let isvalid = true;
  // name validation
  if (!formName.value) {
    document.getElementById("nameError").innerHTML = "Name is required";
    isvalid = false;
  } else if (!nameReg.test(formName.value)) {
    document.getElementById("nameError").innerHTML = "Name length(4-8) & alphabetic character only";
    isvalid = false;
  }
  // surname validation
  if (!surnameReg.test(formSurname.value)) {
    document.getElementById("surnameError").innerHTML =
      "Surname lenght(4-12) & alphabetic character only";
    isvalid = false;
  }
  // email validation
  if (!formEmail.value) {
    document.getElementById("emailError").innerHTML = "Email is required";
    isvalid = false;
  } else if (!emailReg.test(formEmail.value)) {
    document.getElementById("emailError").innerHTML = "please enter a valid email";
    isvalid = false;
  }
  // message validation
  if (!formMessage.value) {
    document.getElementById("messageError").innerHTML = "Message is required";
    isvalid = false;
  } else if (!messageReg.test(formMessage.value)) {
    document.getElementById("messageError").innerHTML =
      "message length must be not less than 20 character";
    isvalid = false;
  }
  if (isvalid) {
    form.submit();
  }
});
