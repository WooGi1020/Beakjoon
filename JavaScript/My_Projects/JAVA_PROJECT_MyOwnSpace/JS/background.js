const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bodyStyle = document.body.style;

bodyStyle.backgroundImage = `url('img/${chosenImage}')`;
