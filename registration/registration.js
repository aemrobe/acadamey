// form validation js
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const age = document.getElementById("age");
const imageInput = document.getElementById("image");
const id = document.getElementById("id");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const club = document.getElementById("club");
const pass = document.getElementById("pass");
const newpass = document.getElementById("newpass");

form.addEventListener("submit", (e) => {
  // checkInputs();
  const fistnameValue = firstname.value.trim();
  const lastnameValue = lastname.value.trim();
  const agevalue = age.value.trim();
  const idValue = id.value.trim();
  const phoneValue = phone.value.trim();
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = pass.value.trim();
  const passwordValue2 = newpass.value.trim();

  if (fistnameValue === "") {
    e.preventDefault();
    setErroFor(firstname, "First name can not blank");
  } else {
    setSuccessFor(firstname);
  }

  if (lastnameValue === "") {
    e.preventDefault();
    setErroFor(lastname, "Last name can not blank");
  } else {
    setSuccessFor(lastname);
  }

  if (agevalue === "") {
    e.preventDefault();
    setErroFor(age, "Last name can not blank");
  } else {
    setSuccessFor(age);
  }

  if (imageInput.files.length === 0) {
    e.preventDefault();
    setErroFor(imageInput, "please select a file to upload");
  } else {
    setSuccessFor(imageInput);
  }

  if (idValue === "") {
    e.preventDefault();
    setErroFor(id, "Username can not blank");
  } else {
    setSuccessFor(id);
  }

  if (phoneValue === "") {
    e.preventDefault();
    setErroFor(phone, "Username can not blank");
  } else {
    setSuccessFor(phone);
  }

  if (usernameValue === "") {
    e.preventDefault();
    setErroFor(username, "Username can not blank");
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    e.preventDefault();
    setErroFor(email, "Email can not blank");
  } else if (!isEmail(emailValue)) {
    e.preventDefault();
    setErroFor(email, "Not a valid email");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    e.preventDefault();
    setErroFor(pass, "Password can not blank");
  } else {
    setSuccessFor(pass);
  }

  if (club.selectedIndex === 0) {
    e.preventDefault();
    setErroFor(club, "please select a club");
  } else {
    setSuccessFor(club);
  }

  if (passwordValue === "") {
    e.preventDefault();
    setErroFor(newpass, "New Password can not blank");
  } else if (passwordValue !== passwordValue2) {
    e.preventDefault();
    setErroFor(newpass, "Massword is not match");
  } else {
    setSuccessFor(newpass);
  }
});

function setErroFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  small.innerText = message;
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
// form validation js
