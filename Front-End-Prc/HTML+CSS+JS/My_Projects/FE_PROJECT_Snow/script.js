function createSnow(){
    const el = document.createElement("div");
    el.classList.add('snow');
    el.style.marginLeft = randomPositon() + 'px';
    document.body.appendChild(el);
}

function randomPositon(){
    return Math.floor(Math.random() * window.innerWidth);
}

for(let i = 0; i < 1000; i++){
    createSnow();
}