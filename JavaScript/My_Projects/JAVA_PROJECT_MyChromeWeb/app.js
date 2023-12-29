const h1 = document.getElementById("title");

function handleTitleClick() {
    h1.innerText = "Holy shit!!!";
}
h1.addEventListener("click", handleTitleClick);

