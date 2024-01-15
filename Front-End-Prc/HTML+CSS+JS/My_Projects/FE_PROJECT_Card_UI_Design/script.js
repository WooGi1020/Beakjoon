const togglebtn = document.querySelector("#toggle");
const container = document.querySelector(".container");

function changeMod(){
    container.classList.toggle("dark-mod");
}

togglebtn.addEventListener("change", changeMod);