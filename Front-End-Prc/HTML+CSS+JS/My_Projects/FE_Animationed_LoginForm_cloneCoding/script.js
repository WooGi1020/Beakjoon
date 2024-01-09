const container = document.querySelector(".container");
const signUpBtn = document.querySelector(".signup-section header");
const loginBtn = document.querySelector(".login-section header");

function handleLoginBtn(){
    container.classList.add("active");
}
function handleSignUpBtn(){
    container.classList.remove("active");
}

loginBtn.addEventListener("click", handleLoginBtn);
signUpBtn.addEventListener("click", handleSignUpBtn);