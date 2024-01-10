const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');

function handleSearch(){
    const API_KEY = '0e41118d3ed276d850c79fd62e832a9f';
    const city = document.querySelector('.search-box input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

    if(city === '')
        return;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        if(data.cod === '404'){
            container.computedStyleMap.height = '400px';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            return;
        }

        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity');
        const wind = document.querySelector('.weather-details .wind');

        switch(data.weather[0].main){
            case 'Clear':
                image.src = 'img/clear.png';
                break;
            case 'Rain':
                image.src = 'img/rain.png';
                break;
            case 'Snow':
                image.src = 'img/snow.png';
                break;
            case 'Clouds':
                image.src = 'img/clouds.png';
                break;
            case 'Haze':
                image.src = 'img/haze.png';
                break;

            default:
                image.src = '';
    }

    temperature.innerHTML = `${parseInt(data.main.temp)}<span>℃</span>`;
    description.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${parseInt(data.wind.speed)}Km/h`;

    weatherBox.style.display = '';
    weatherDetails.style.display = '';
    weatherBox.classList.add('fadeIn');
    weatherDetails.classList.add('fadeIn');
    container.style.height = '590px';
    })
}


search.addEventListener("click", handleSearch);