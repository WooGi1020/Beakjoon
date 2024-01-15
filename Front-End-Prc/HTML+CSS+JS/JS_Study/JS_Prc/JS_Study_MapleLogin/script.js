const nexonIdBtn = document.querySelector(".login-container button:nth-child(1)");
const mapleIdBtn = document.querySelector(".login-container button:nth-child(2)");
const container = document.querySelector(".container");
const userId = document.querySelector(".login-container form input:nth-child(1)");
const option = document.querySelector(".other-option");

function handleMaple() {
    container.classList.add("active");
    userId.placeholder = "메이플ID";
}

function handleNexon() {
    container.classList.remove("active");
    userId.placeholder = "넥슨이메일ID";
}

nexonIdBtn.addEventListener("click", handleNexon);
mapleIdBtn.addEventListener("click", handleMaple);

