password = document.getElementById("password")
confPassword = document.getElementById("conf-password")
notMatchPass = document.getElementById("not-matching-passwords")



addEventListener('input', (event) => {
    checkForMatch()
});

function checkForMatch() {
    if (password.value != confPassword.value && confPassword.value != "") {
        notMatchPass.textContent = "* Passwords do not match"
        password.classList.add("error");
        confPassword.classList.add("error");
    } else if (password.value == confPassword.value) {
        notMatchPass.textContent = ""
        password.classList.remove("error");
        confPassword.classList.remove("error");
    }
}