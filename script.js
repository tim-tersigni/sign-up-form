function main() {
  const passwordInput = document.querySelector("input[name='password']");
  const confirmPasswordInput = document.querySelector("input[name='confirmPassword']");
  passwordInput.addEventListener("change", () => {
    checkPasswordMatch(passwordInput, confirmPasswordInput);
  });
  confirmPasswordInput.addEventListener("change", () => {
    checkPasswordMatch(passwordInput, confirmPasswordInput);
  });
}

function checkPasswordMatch(passwordInput, confirmPasswordInput) {
  const message = document.querySelector(".alert");
  if (confirmPasswordInput.value.length == 0) return;

  if (passwordInput.value != confirmPasswordInput.value) {
    passwordInput.style.borderColor = "red";
    confirmPasswordInput.style.borderColor = "red";

    message.style.color = "red";
    const text = "* Passwords do not match";
    message.innerText = text;
  } else {
    passwordInput.style.borderColor = "rgb(236, 236, 236)";
    confirmPasswordInput.style.borderColor = "rgb(236, 236, 236)";

    message.style.color = "white";
    const text = "<br>";
    message.innerText = text;
  }
}

main();
