const API_KEY = "0e41118d3ed276d850c79fd62e832a9f";

var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0,  
  };

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        const weather = document.querySelector("#weather img:nth-child(1)");
        const city = document.querySelector("#weather span:nth-child(2)");
        const degree = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.src = iconUrl;
        degree.innerText = `${data.main.temp}\`C`;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError, options)