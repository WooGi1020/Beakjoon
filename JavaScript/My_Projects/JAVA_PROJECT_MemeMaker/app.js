const eraserBtn = document.getElementById("eraser-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;


ctx.lineWidth = lineWidth;
let isPainting = false;
let isFilling = false;

/* 마우스가 이동하면 기준점도 이동시키며, 
마우스를 누른상태에서 선을 그림 */
function onMove(event) {
    if(isPainting){
        ctx.lineTo(event.offsetX, event.offsetY);
        ctx.stroke();
        return;
    }
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}

// 마우스를 누른 상태
function onmouseDown(){
    isPainting = true;
}
// 마우스를 뗀 상태
function onmouseUp(){
    isPainting = false;
}
// 마우스가 그림판 밖으로 이동할 경우
function cancelPainting(){
    isPainting = false;
}

// 선 굵기 수정
function onlineWidthChange(event){
    ctx.lineWidth = event.target.value;
}
// 선 색깔 변경
function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}
// 선 색깔 변경(심화)
function onColorClick(event){
    const colorValue = event.target.dataset.color;
    ctx.strokeStyle = colorValue;
    ctx.fillStyle = colorValue;
    color.value = colorValue;
}

// 캔버스 색 채우기 || 캔버스에 그리기 모드 변경
function onModeClick(event) {   
    if(isFilling){
        isFilling = false;
        modeBtn.innerText = "Fill";
    } else{
        isFilling = true;
        modeBtn.innerText = "Draw";
    }
}

// 캔버스 내부 클릭 이벤트로 색 채우기
function onCanvasClick() {
    if(isFilling){
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    }
}
// 캔버스 지우개
function onEraserClick() {
    ctx.strokeStyle = "white";s
    isFilling = false;
    modeBtn.innerText = "Fill";

}
// 이벤트 리스너
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onmouseDown);
canvas.addEventListener("mouseup", onmouseUp);
canvas.addEventListener("mouseleave", cancelPainting);

canvas.addEventListener("click", onCanvasClick);
lineWidth.addEventListener("change", onlineWidthChange);
color.addEventListener("change", onColorChange);

colorOptions.forEach(color => color.addEventListener("click", 
onColorClick));

modeBtn.addEventListener("click", onModeClick);
eraserBtn.addEventListener("click", onEraserClick);