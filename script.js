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
  if (confirmPasswordInput.value.length == 0) return;

  if (passwordInput.value != confirmPasswordInput.value) {
    passwordInput.style.borderColor = "red";
    confirmPasswordInput.style.borderColor = "red";
  } else {
    passwordInput.style.borderColor = "rgb(236, 236, 236)";
    confirmPasswordInput.style.borderColor = "rgb(236, 236, 236)";
  }
}

main();
