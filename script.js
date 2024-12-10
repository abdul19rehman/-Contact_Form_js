"use strict";

const fname = document.querySelector(".fname");
const lname = document.querySelector(".lname");
const email = document.querySelector(".email");
const msgBox = document.querySelector("#textarea");
const submit = document.querySelector(".submit-btn");
const checkBox = document.querySelector(".checkbox");
const form = document.querySelector("form");

const errMsgfname = document.querySelector(".error-msg-fname");
const errMsglname = document.querySelector(".error-msg-lname");
const errMsgemail = document.querySelector(".error-msg-email");
const errMsgquery = document.querySelector(".error-msg-query");
const errorMsgbox = document.querySelector(".msg-error");
const errorcheckbox = document.querySelector(".error-msg-consent");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const radio1 = document.querySelector("#radio-btn-1").checked;
  const radio2 = document.querySelector("#radio-btn-2").checked;

  let valid = true;
  if (fname.value === "") {
    fname.classList.add("active");
    errMsgfname.classList.remove("hidden");
    valid = false;
  } else {
    fname.classList.remove("active");
    errMsgfname.classList.add("hidden");
  }

  if (lname.value === "") {
    lname.classList.add("active");
    errMsglname.classList.remove("hidden");
    valid = false;
  } else {
    lname.classList.remove("active");
    errMsglname.classList.add("hidden");
  }
  //   email
  if (!emailPattern.test(email.value)) {
    email.classList.add("active");
    errMsgemail.classList.remove("hidden");
    valid = false;
  } else {
    email.classList.remove("active");
    errMsgemail.classList.add("hidden");
  }

  //   queryyy

  if (!radio1 && !radio2) {
    errMsgquery.classList.remove("hidden");
    valid = false;
  } else {
    errMsgquery.classList.add("hidden");
  }

  //   Msgbox
  if (msgBox.value.trim() === "") {
    msgBox.classList.add("active");
    errorMsgbox.classList.remove("hidden");
    valid = false;
  } else {
    msgBox.classList.remove("active");
    errorMsgbox.classList.add("hidden");
  }

  if (!checkBox.checked) {
    errorcheckbox.classList.remove("hidden");
    valid = false;
  } else {
    errorcheckbox.classList.add("hidden");
  }

  if (valid === true) {
    e.preventDefault();
    alert(`
            First Name :${fname.value}
            Last Name : ${lname.value}
            Email : ${email.value}
            message:${msgBox.value}`);
    window.location.reload();
  }
});
