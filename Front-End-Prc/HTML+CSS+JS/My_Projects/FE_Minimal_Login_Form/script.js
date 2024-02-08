const divs = document.querySelectorAll(".login-form div:not(:last-child)");

const form = document.querySelector('.login-form');

const inputs = document.querySelectorAll('.login-form input');

const idicon = divs[0].querySelector('.fa-solid');
const pwicon = divs[1].querySelector('.fa-solid');
const emailicon = divs[2].querySelector('.fa-solid');
const phoneicon = divs[3].querySelector('.fa-solid');

function handleClass (test, icon, div){
  if(test){
    icon.classList.remove('fa-circle-exclamation');
    icon.classList.add('fa-check');
    div.classList.remove('fail')
    div.classList.add('success');
  }else if(!test){
    icon.classList.add('fa-circle-exclamation');
    icon.classList.remove('fa-check');
    div.classList.remove('success');
    div.classList.add('fail');
  }else if(!div.classList.contains('success') || !div.classList.contains('fail')){
    icon.classList.add('fa-circle-exclamation');
    icon.classList.remove('fa-check');
    div.classList.remove('success');
    div.classList.add('fail');
  }
}

function submit(e) {
  e.preventDefault();
  const btnContainer = document.querySelector(".btn-container");
  const submitBtn = document.getElementById('submit-btn');
  const arr = Array.from(divs);

  if (arr.every(item => item.classList.contains('success'))) {
    btnContainer.classList.add('submitted');
    btnContainer.classList.remove("non-submitted");
    submitBtn.textContent = 'Submitted!';
    submitBtn.style.color = "rgba(1,169,1,0.8)";
    submitBtn.style.border = "solid 2px rgba(1,169,1,0.8)";
  }else{
    btnContainer.classList.add('non-submitted');
    btnContainer.classList.remove('submitted');
    submitBtn.textContent = 'Failed!';
    submitBtn.style.color = "rgba(215,0,0,0.8)";
    submitBtn.style.border = "solid 2px rgba(215,0,0,0.8)";
  }

  setTimeout(() => {
    submitBtn.textContent = 'Submit!';
    submitBtn.style.color = "rgba(256,256,256,0.8)";
    btnContainer.classList.remove('non-submitted');
    btnContainer.classList.remove('submitted');
    submitBtn.style.border = "solid 2px rgba(256,256,256,0.8)"
  }, 1000);
}

function isValidId () {
  const isValid = /^[A-Za-z0-9]{4,12}$/;
  let test = isValid.test(inputs[0].value);

  handleClass(test, idicon, divs[0]);
}
function isValidPw () {
  const isValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/; 
  let test = isValid.test(inputs[1].value);

  handleClass(test, pwicon, divs[1]);
}
function isValidEmail () {
  const isValid = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  let test = isValid.test(inputs[2].value);

  handleClass(test, emailicon, divs[2]);
}
function isValidPhone () {
  const isValid = /^[0-9]{10,}/;
  let test = isValid.test(inputs[3].value);

  handleClass(test, phoneicon, divs[3]);
}

inputs[0].addEventListener('input', isValidId);
inputs[1].addEventListener('input', isValidPw);
inputs[2].addEventListener('input', isValidEmail);
inputs[3].addEventListener('input', isValidPhone);
form.addEventListener('submit', submit);

