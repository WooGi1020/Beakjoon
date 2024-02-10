const signContainer = document.querySelector('.sign');

const SIGN_KEY = 'sign';

const arr = JSON.parse(localStorage.getItem(SIGN_KEY));

if(arr){
  signContainer.classList.remove('sign');
  signContainer.classList.add('signed');
  signContainer.textContent = `${arr[4]}님, 환영합니다!`;
}else{
  signContainer.classList.remove('signed');
  signContainer.classList.add('sign');
}