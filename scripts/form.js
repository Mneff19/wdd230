const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

confirmPassword.addEventListener("blur", () => {
    if (password.value != confirmPassword.value) {
        confirmPassword.value = "";
        confirmPassword.classList.add("mismatch");
        alert("Passwords do not match, please try again");
    } else {
        confirmPassword.classList.remove("mismatch");
    }
});