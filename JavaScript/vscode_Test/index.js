//input form
const inputElement = document.getElementById("input");

inputElement.addEventListener("mouseover", () => {
    console.log(inputElement.value);
});

//select Tag
const selectElement = document.getElementById("color");
const resultElement = document.getElementById("result");

selectElement.addEventListener("change", () => {
    resultElement.textContent = selectElement.value;
})