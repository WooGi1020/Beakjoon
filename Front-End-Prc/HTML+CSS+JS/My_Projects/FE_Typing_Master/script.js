const wordInput = document.querySelector('.input-container input');
const wordContainer = document.querySelector('.word-container');
const scoreContainer = document.querySelector('.score');
const timeContainer = document.querySelector('.time');
const btn = document.querySelector('.loading-btn');

let words = [];
const GAME_TIME = 5;
let score = 0;
let time = GAME_TIME;
let isPlaying = false;
let timeInterval;
let checkInterval;

const checkStatus = () => {
if(!isPlaying && time === 0){
    btnChange('게임 시작');
    clearInterval(checkInterval);
  }
}

const init = () => {
  getWords();
  wordInput.addEventListener('input', checkMatch);
}

// 단어 불러오기
const getWords = () => {
  words = ['Hello', 'Banna', 'Apple', 'grape'];
  btnChange('게임 시작');
}

// 단어 일치 체크
const checkMatch = () => {
  if(wordInput.value.toLowerCase() === wordContainer.innerText.toLowerCase()){
    wordInput.value = '';
    if(isPlaying){
      return;
    }
    score++;
    scoreContainer.textContent = score;
    const randomeindex = Math.floor(Math.random() * words.length);
    wordContainer.textContent = words[randomeindex];
  }
}

const countDown =() => {
  time > 0 ? time-- : isPlaying = false;
  if(isPlaying === false){
    clearInterval(timeInterval);
  }
  timeContainer.textContent = time;
}

const btnChange = (text) => {
  btn.textContent = text;
  btn.textContent === '게임 중 ..' ? btn.classList.remove('loading-btn') : btn.classList.add('loading-btn');
}

const run = () => {
  time = GAME_TIME;
  isPlaying = true;
  wordInput.focus();
  scoreContainer.textContent = 0;
  timeInterval = setInterval(() => {
    countDown()
  }, 1000);
  checkInterval = setInterval(() => {
    checkStatus()
  }, 50);
  btnChange('게임 중 ..');
}