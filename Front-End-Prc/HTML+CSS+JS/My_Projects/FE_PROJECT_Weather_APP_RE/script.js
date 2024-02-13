const container = document.querySelector('.weather-container');
const search = document.querySelector('.search-box input');
const detailBox = document.querySelector('.detail-box');
const detailOther = document.querySelector('.detail-other');
const errorBox = document.querySelector('.error-box');

function handleSearch(e) {
  if(e.key == 'Enter'){
    const API_KEY = '0e41118d3ed276d850c79fd62e832a9f';
    const city = document.querySelector('.search-box input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`

    if(city === '')
        return;

    fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.cod === '404'){
        container.style.height = '700px';
        detailBox.style.display = 'none';
        detailOther.style.display = 'none';
        errorBox.classList.add('fade-in');
        errorBox.style.display = 'flex';
        return;
      }
      errorBox.style.display = 'none';
      errorBox.classList.remove('fadeIn');

      const image = detailBox.querySelector('img');
      const weatherName = detailBox.querySelector('.weather-name');
      const text = detailBox.querySelector('.text');
      const temps = detailBox.querySelectorAll('p');
      
      const humidity = detailOther.querySelector('.humidity span');
      const wind = detailOther.querySelector('.wind span');
      const sunrise = detailOther.querySelector('.sunrise span');
      const sunset = detailOther.querySelector('.sunset span');
      
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
            image.src = 'img/fewcloud.png';
            break;
        case 'Haze':
            image.src = 'img/haze.png';
            break;
        default:
            image.src = '';
      }

      weatherName.innerHTML = `${data.weather[0].description}`; 

      temps[0].innerHTML = `최고 ${parseInt(data.main.temp_max)}<span>℃</span>`;
      temps[1].innerHTML = `현재 ${parseInt(data.main.temp)}<span>℃</span>`;
      temps[2].innerHTML = `최저 ${parseInt(data.main.temp_min)}<span>℃</span>`;

      humidity.innerHTML = `${data.main.humidity} %`;
      wind.innerHTML = `${data.wind.speed} m/s`;
      sunrise.innerHTML = `${timeStamp(data.sys.sunrise)}`;
      sunset.innerHTML = `${timeStamp(data.sys.sunset)}`;

      detailBox.style.display = 'flex';
      detailOther.style.display = 'flex';
      detailBox.classList.add('fade-in');
      detailOther.classList.add('fade-in');
      container.style.height = '700px';
  })}
}

function timeStamp(timeStamp) {
  const milliseconds = timeStamp * 1000;
  const dateObject = new Date(milliseconds);

  const options = { 
    hour: 'numeric', 
    minute: 'numeric', 
    second: 'numeric', 
    hour12: false
  };
  const formattedTime = dateObject.toLocaleString('en-US', options);
  return formattedTime;
}

search.addEventListener('keypress', handleSearch);