document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = usernameInput.value;
        const password = passwordInput.value;
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location.href = "secondd.html";
    });
});