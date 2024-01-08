const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const removeUser = document.querySelector("#remove-user");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreetings();
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY);
    SayHifunc(username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function SayHifunc(username){
    const currentHours = new Date().getHours();
    console.log(typeof currentHours);
    if(currentHours >= 6 && currentHours < 12 ){
        greeting.innerText = `Good Morning! ${username}.`;
    }
    else if(currentHours >= 12 && currentHours < 18){
        greeting.innerText = `Good Afternoon! ${username}.`;
    }else if(currentHours >= 18 && currentHours < 21){
        greeting.innerText = `Good Evening! ${username}.`;
    }else{
        greeting.innerText = `Good Night! ${username}.`;
    }
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings();
}

// function handleRemoveUser(){
//     localStorage.removeItem(USERNAME_KEY);
//     alert("REMOVE ACCESS!");
//     location.reload();
// }

// removeUser.addEventListener("click", handleRemoveUser);

