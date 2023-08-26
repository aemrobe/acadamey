const form = document.getElementById("form");
const username = document.getElementById("username");
const pass = document.getElementById("pass");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const passwordValue = pass.value.trim();

  if (usernameValue === "") {
    setErroFor(username, "Username can not blank");
  } else {
    setSuccessFor(username);
  }

  if (passwordValue === "") {
    setErroFor(pass, "Password can not blank");
  } else {
    setSuccessFor(pass);
  }
}

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
