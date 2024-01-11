const btn = document.querySelectorAll(".btn button");
const counter = document.querySelector("h1");

let count = 0

function checkColor(num){
    if(num < 0){
        counter.style.color = "red";
    }else if(num > 0){
        counter.style.color = 'green';
    }else if(num === 0){
        counter.style.color = 'black';
    }
}

function handleDecrease (){
    count--;
    counter.textContent = count;
    checkColor(count);;
}

function handleReset () {
    count = 0;
    counter.textContent = count;
    checkColor(count);
}
function handleIncrease () {
    count++;
    counter.textContent = count;
    checkColor(count);
}

btn[0].addEventListener("click", handleDecrease);
btn[1].addEventListener("click", handleReset);
btn[2].addEventListener("click", handleIncrease);