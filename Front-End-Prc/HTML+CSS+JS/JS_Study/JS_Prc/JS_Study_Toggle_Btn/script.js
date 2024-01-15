const toggleBtn = document.querySelector("#toggle-btn");
const container = document.querySelector(".container");

function changeMod() {
    container.classList.toggle("light-mod");
    container.classList.toggle("dark-mod");
}


toggleBtn.addEventListener("change", changeMod);