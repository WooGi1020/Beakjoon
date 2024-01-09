const clock = document.querySelector("h2#clock");

clock.classList.remove("hidden");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}`;
}
getClock();
setInterval(getClock, 1000);