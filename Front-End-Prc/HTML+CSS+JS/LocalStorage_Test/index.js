const Id = document.getElementById("id");
const Pwd = document.getElementById("pwd");
const Submit = document.getElementById("submit");
const userId = document.querySelector(".userId");
const userPwd = document.querySelector(".userPwd");

function submitUserInfo(){
    const info = {
        id: Id.value,
        pwd: Pwd.value
    };
    localStorage.setItem("user-info", JSON.stringify(info));
}

function paintUserInfo(){
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    
    userId.innerText = userInfo.id;
    userPwd.innerText = userInfo.pwd;
}

Submit.addEventListener("click", submitUserInfo);
paintUserInfo();
