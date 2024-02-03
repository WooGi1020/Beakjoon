const btn = document.querySelector('button');
const mainH1 = document.querySelector('h1');
const mainP = document.querySelector('p');




btn.addEventListener('click', function() {
  mainH1.textContent = '';
  mainP.textContent = '좋냐? ㅋ';
  mainP.style.fontSize = '5rem';
});