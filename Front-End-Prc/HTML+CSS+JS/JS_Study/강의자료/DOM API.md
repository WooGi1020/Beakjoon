```javaScript
/// index html
<!DOCTYPE html>

<html>

<head>

<title>Parcel Sandbox</title>

<meta charset="UTF-8" />

</head>

  

<body>

<div class="today-info">

<div class="date" id="date">

02.10.금요일

</div>

<div class="date" id="clock">

15:03

</div>

</div>

  

<script src="./index.mjs" type="module"></script>

</body>

</html>

/// index js
const buttonElement = document.createElement("div");

buttonElement.classList.add("button");

buttonElement.textContent = "버튼";

  

const todayInfoElement = document.querySelector("div.today-info");

todayInfoElement.appendChild(buttonElement);

  

buttonElement.addEventListener("click", () => {

window.alert("클릭");

});

  

buttonElement.style.backgroundColor = "gray";

buttonElement.style.color = "white";

buttonElement.style.width ="50px";

buttonElement.style.textAlign = "center";

buttonElement.style.cursor = "pointer";

  
  

console.log(document.getElementsByTagName("div"));
```