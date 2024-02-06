const idDiv = document.querySelector(".id-container");
const pwDiv = document.querySelector(".pw-container");
const emailDiv = document.querySelector(".email-container");
const phoneDiv = document.querySelector(".phone-container");
const formDiv = document.querySelector(".login-form div");
const form = document.querySelector('.login-form');

const idInput = document.getElementById("id");
const pwInput = document.getElementById("pw");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const submitBtn = document.getElementById('submit-btn');

const idicon = idDiv.querySelector('.fa-solid');
const pwicon = pwDiv.querySelector('.fa-solid');
const emailicon = emailDiv.querySelector('.fa-solid');
const phoneicon = phoneDiv.querySelector('.fa-solid');

function submit(e) {
  e.preventDefault();
  alert("Login Success!");
}

function isValidId () {
  const isValid = /^[A-Za-z0-9]{4,12}$/;
  let test = isValid.test(idInput.value);

  if(test){
    idicon.classList.remove('fa-circle-exclamation');
    idicon.classList.add('fa-check');
    idDiv.classList.remove('fail')
    idDiv.classList.add('success');
  }else{
    idicon.classList.add('fa-circle-exclamation');
    idicon.classList.remove('fa-check');
    idDiv.classList.remove('success');
    idDiv.classList.add('fail');
  }
}
function isValidPw () {
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;
  let test = isValid.test(pwInput.value);

  if(test){
    pwicon.classList.remove('fa-circle-exclamation');
    pwicon.classList.add('fa-check');
    pwDiv.classList.remove('fail')
    pwDiv.classList.add('success');
  }else{
    pwicon.classList.add('fa-circle-exclamation');
    pwicon.classList.remove('fa-check');
    pwDiv.classList.remove('success');
    pwDiv.classList.add('fail');
  }
}
function isValidEmail () {
  const isValid = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  let test = isValid.test(emailInput.value);

  if(test){
    emailicon.classList.remove('fa-circle-exclamation');
    emailicon.classList.add('fa-check');
    emailDiv.classList.remove('fail')
    emailDiv.classList.add('success');
  }else{
    emailicon.classList.add('fa-circle-exclamation');
    emailicon.classList.remove('fa-check');
    emailDiv.classList.remove('success');
    emailDiv.classList.add('fail');
  }
}
function isValidPhone () {
  const isValid = /^[0-9]{10,}/;
  let test = isValid.test(phoneInput.value);

  if(test){
    phoneicon.classList.remove('fa-circle-exclamation');
    phoneicon.classList.add('fa-check');
    phoneDiv.classList.remove('fail')
    phoneDiv.classList.add('success');
  }else{
    phoneicon.classList.add('fa-circle-exclamation');
    phoneicon.classList.remove('fa-check');
    phoneDiv.classList.remove('success');
    phoneDiv.classList.add('fail');
  }
}

idInput.addEventListener('input', isValidId);
pwInput.addEventListener('input', isValidPw);
emailInput.addEventListener('input', isValidEmail);
phoneInput.addEventListener('input', isValidPhone);
form.addEventListener('submit', submit);


