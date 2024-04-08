const container = document.querySelector(".container");
const btn = container.querySelector(".btn");
const viewer = container.querySelector(".viewer");

const URL = "https://cataas.com/cat";

const handleGIF = () => {
  if (viewer.firstChild) {
    viewer.removeChild(viewer.firstChild);
  }
  const gifImg = document.createElement("img");
  gifImg.classList.add("cat");
  gifImg.src = URL;
  viewer.appendChild(gifImg);
};

btn.addEventListener("click", handleGIF);
