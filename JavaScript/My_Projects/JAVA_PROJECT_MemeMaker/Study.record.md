- canvas rect 기본 이론
```javascript
 ctx.moveTo(50, 50); 

 ctx.lineTo(150, 50);

 ctx.lineTo(150, 150);

 ctx.lineTo(50, 150);

 ctx.lineTo(50, 50);

 ctx.fill();
```
```MarkDown
기본적으로 fillRect()는 x, y축으로 기준점을 이동하는 moveTo()와 x, y축으로 선을 그리는 lineTo(), 이를 통해 만든 사각형 형태 안을 채우는 fill()로 구현되어있다.
```

- 간단한 집 만들기
```javascript
ctx.fillRect(200,200,50,200);

ctx.fillRect(400,200,50,200);

ctx.lineWidth = 2;

ctx.fillRect(300,300,50,100);

ctx.fillRect(200, 200, 200, 20);

ctx.moveTo(200, 200);

ctx.lineTo(325, 120);

ctx.lineTo(450, 200);

ctx.stroke();

ctx.fill();
```

- 간단한 사람 만들기
```javascript
ctx.fillRect(260, 200, 20, 100); 

ctx.fillRect(340, 200, 20, 100);

ctx.fillRect(280, 200, 60, 200);

ctx.fillRect(270, 400, 80, 30);

ctx.arc(310, 170, 30, 0, 2*Math.PI); // 시작점의 기준을 0(도형의 오른쪽), 최대 2*PI의 원

ctx.fill();

ctx.beginPath(); // 새로운 경로 지정

ctx.fillStyle = 'white';

ctx.arc(300, 170, 5, 0, Math.PI, 2*Math.PI);

ctx.arc(320, 170, 5, 0, Math.PI, 2*Math.PI);

ctx.fillRect(305, 180, 10, 3);

ctx.fill();
```

- 그림판 기초(찐)
```javascript
ctx.lineWidth = 2; == Light_Attack


const colors = [

    "#ff4d4d",

    "#ffaf40",

    "#fffa65",

    "#32ff7e",

    "#18dcff",

    "#7d5fff",

    "#cd84f1"

]


function onclick() {

    ctx.beginPath();

    ctx.moveTo(0, 0);

    const color = colors[Math.floor(Math.random() * colors.

    length)];

    ctx.strokeStyle = color;

    ctx.lineTo(event.offsetX, event.offsetY);

    ctx.stroke();

}

canvas.addEventListener("mousemove", onclick)
```