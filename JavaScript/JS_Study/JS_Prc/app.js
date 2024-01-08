const colorDiv = document.querySelector(".color-div");
const randomBtn = document.querySelector(".container input");

const Palette = [
    'white', 'red', 'blue', 'green', 'yellow', 'orange', 'purple', 'beige'
]

colorDiv.style.color = 'white';

function changeBgColor() {
    const bgColor = document.body;
    bgColor.style.backgroundColor = Palette[Math.floor(Math.random() * Palette.length)];
    colorDiv.innerText = `background-color = ${bgColor.style.backgroundColor}`;
    colorDiv.style.color = bgColor.style.backgroundColor;
    randomBtn.style.color = bgColor.style.backgroundColor;
}

randomBtn.addEventListener("click", changeBgColor);



