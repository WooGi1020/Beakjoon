const resetBtn = document.getElementById("reset-btn");
const textInput = document.getElementById("text");
const fileInput = document.getElementById("file");
const saveBtn = document.getElementById("save");
const eraseBtn = document.getElementById("eraser-btn");
const modeBtn = document.getElementById("mode-btn");
const colorOptions = Array.from(document.getElementsByClassName("color-option"));
const color = document.getElementById("color");
const eraserWidth = document.getElementById("eraser-width");
const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 800;

ctx.lineCap = "round";
ctx.lineWidth = lineWidth.value;
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
// 지우개 크기 수정
function oneraserWidthChange(event){
    ctx.eraserWidth = event.target.value;
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
// 캔버스 리셋
function onResetClick() {
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}
// 캔버스 지우개
function onEraseClick() {
    ctx.strokeStyle = "white";
    isFilling = false;
    modeBtn.innerText = "Fill";
}
// 파일 업로드 및 변경
function onFileChange() {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.src = url;
    image.onload = function() {
        ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fileInput.value = null;
    }
}
// 캔버스 텍스트 삽입(더블클릭)
function onDoubleClick() {
    if(text !== ""){
        ctx.save();
        const text = textInput.value;
        ctx.lineWidth = 1;
        ctx.font = "48px serif";
        ctx.fillText(text, event.offsetX, event.offsetY);
        ctx.restore();
    }

}
// 캔버스 이미지 저장
function onSaveClick() {
    const url = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = url;
    a.download = "myDrawing.png";
    a.click();
}

canvas.addEventListener("dblclick", onDoubleClick);
// 캔버스 붓 이벤트
canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", onmouseDown);
canvas.addEventListener("mouseup", onmouseUp);
canvas.addEventListener("mouseleave", cancelPainting);
canvas.addEventListener("click", onCanvasClick);

// 캔버스 제어 이벤트
lineWidth.addEventListener("change", onlineWidthChange);
color.addEventListener("change", onColorChange);

// 색 배열 선택 이벤트
colorOptions.forEach(color => color.addEventListener("click", 
onColorClick));

// 버튼 이벤트
modeBtn.addEventListener("click", onModeClick);
resetBtn.addEventListener("click", onResetClick);
eraseBtn.addEventListener("click", onEraseClick);

// 이미지 삽입
fileInput.addEventListener("change", onFileChange);

//이미지 저장
saveBtn.addEventListener("click", onSaveClick);