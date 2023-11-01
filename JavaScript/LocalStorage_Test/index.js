// local Storage : 브라우저를 종료하더라도 로컬 스토리지에 값 저장
// 보통 객체나 배열의 형태로 key 값을 저장

const idElement = document.getElementById("id");
const passwordElement = document.getElementById("password");
const loginElement = document.getElementById("loginbutton");

const userIdElement = document.getElementById("userId");
const userPwdElement = document.getElementById("userPwd");

const userLoginInfo = JSON.parse(localStorage.getItem("userinfo"));
console.log(userLoginInfo);

userIdElement.textContent = `id : ${userLoginInfo.id}`;
userPwdElement.textContent = `Pwd : ${userLoginInfo.pwd}`;

loginElement.addEventListener("click", () =>{
    let userinfo = {id : idElement.value, pwd : passwordElement.value};
    localStorage.setItem("userinfo", JSON.stringify(userinfo));
})
