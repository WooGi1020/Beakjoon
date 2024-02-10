const signContainer = document.querySelector('.sign');


const SIGN_KEY = 'sign';

const arr = JSON.parse(localStorage.getItem(SIGN_KEY));

if(arr){
  signContainer.classList.remove('sign');
  signContainer.classList.add('signed');
  signContainer.innerHTML = `<p>${arr[4]}님, 환영합니다!</p>`;
  const logout = document.createElement('button');
  logout.classList.add('logout');
  logout.textContent = `로그아웃`;
  signContainer.appendChild(logout);

  const logoutBtn = signContainer.querySelector('.logout');
  logoutBtn.addEventListener('click', handleLogout);

}else{
  signContainer.classList.remove('signed');
  signContainer.classList.add('sign');

}

function handleLogout() {
  localStorage.removeItem(SIGN_KEY);
  location.reload();
}

const navEl = document.querySelector("nav");

window.addEventListener('scroll', function(){
    requestAnimationFrame(scrollCheck);
});

function scrollCheck(){
    let browserScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browserScrollY > 0){
        navEl.classList.add("active");
    }else{
        navEl.classList.remove("active");
    }
}
