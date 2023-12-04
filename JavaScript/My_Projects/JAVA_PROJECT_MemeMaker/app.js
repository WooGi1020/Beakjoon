const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// ctx.moveTo(50, 50); == fillRect()
// ctx.lineTo(150, 50);
// ctx.lineTo(150, 150);
// ctx.lineTo(50, 150);
// ctx.lineTo(50, 50);
// ctx.fill();
 

// ctx.fillRect(200,200,50,200); == making_House
// ctx.fillRect(400,200,50,200);
// ctx.lineWidth = 2;
// ctx.fillRect(300,300,50,100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 120);
// ctx.lineTo(450, 200);
// ctx.stroke();
// ctx.fill();


// ctx.fillRect(260, 200, 20, 100); == making_Human
// ctx.fillRect(340, 200, 20, 100);
// ctx.fillRect(280, 200, 60, 200);
// ctx.fillRect(270, 400, 80, 30);
// ctx.arc(310, 170, 30, 0, 2*Math.PI);
// ctx.fill();

// ctx.beginPath();
// ctx.fillStyle = 'white';
// ctx.arc(300, 170, 5, 0, Math.PI, 2*Math.PI);
// ctx.arc(320, 170, 5, 0, Math.PI, 2*Math.PI);
// ctx.fillRect(305, 180, 10, 3);
// ctx.fill();


// ctx.lineWidth = 2; == Light_Attack

// const colors = [
//     "#ff4d4d",
//     "#ffaf40",
//     "#fffa65",
//     "#32ff7e",
//     "#18dcff",
//     "#7d5fff",
//     "#cd84f1"
// ]

// function onclick() {
//     ctx.beginPath();
//     ctx.moveTo(0, 0);
//     const color = colors[Math.floor(Math.random() * colors.
//     length)];
//     ctx.strokeStyle = color;
//     ctx.lineTo(event.offsetX, event.offsetY);
//     ctx.stroke();
// }
// canvas.addEventListener("mousemove", onclick)

