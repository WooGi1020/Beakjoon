const container = document.querySelector('.container');
const btn = container.querySelector('.btn');
const viewer = container.querySelector('.viewer');

const URL = 'https://cataas.com/cat';

const handleGIF = () => {
  while(viewer.firstChild){
    viewer.removeChild(viewer.firstChild);
  }
  const gifImg = document.createElement('img');
  gifImg.src = URL;
  gifImg.style.backgroundSize = 'cover';
  gifImg.style.width = '300px';
  gifImg.style.height = '250px'
  viewer.appendChild(gifImg);
}

btn.addEventListener('click', handleGIF);


