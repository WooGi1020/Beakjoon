const loginForm = document.querySelector('.login-form');
const idContainer = document.querySelector('.id-container input');
const pwContainer = document.querySelector('.pw-container input');

const idicon = idContainer.querySelector('.fa-solid');
const pwicon = pwContainer.querySelector('.fa-solid');

const SIGN_KEY = 'sign';

function isValidInfo() {
  try{
    const arr = localStorage.getItem(SIGN_KEY);
    const userInfo = JSON.parse(arr);
    const isValidId = userInfo.id;
    const isValidPw = userInfo.pw;
    let isValid = false;

    if(idContainer.value == isValidId && pwContainer .value== isValidPw){
      isValid = true;
      return isValid;
    }else{
      return isValid;
    }
  }catch (error){
    console.error('사용자 정보를 불러오는 중 오류 발생', error);
  }
}

function handleLogin(e){
  e.preventDefault();
  const btnContainer = document.querySelector('.btn-container');
  const loginBtn = document.querySelector('#login-btn');

  if(isValidInfo()){
    btnContainer.classList.add('logined');
    btnContainer.classList.remove('non-logined');
    loginBtn.textContent = 'Login Success!';
    loginBtn.style.color = "green";
    loginBtn.style.border = "none"; 

    setTimeout(() => {
      location.href = 'index.html';
    },1000)
  }else{
    btnContainer.classList.add('non-logined');
    btnContainer.classList.remove('logined');
    loginBtn.textContent = 'Login Fail!';
    loginBtn.style.color = "red";
    loginBtn.style.border = "none";

    setTimeout(() => {
      btnContainer.classList.remove('logined');
      btnContainer.classList.remove('non-logined');
      loginBtn.style.color = '#fff';
      loginBtn.style.border = "none";
      loginBtn.textContent = 'Login!';
    }, 1000);
  }
  
}

loginForm.addEventListener('submit', handleLogin);
