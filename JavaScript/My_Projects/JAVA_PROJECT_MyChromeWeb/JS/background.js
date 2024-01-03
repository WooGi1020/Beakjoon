const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${choosenImage}`;

document.body.appendChild(bgImage);