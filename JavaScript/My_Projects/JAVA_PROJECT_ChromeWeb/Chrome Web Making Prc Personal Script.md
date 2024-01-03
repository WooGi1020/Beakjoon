### HTML, CSS, JS 기본 매커니즘

==HTML은 CSS와 JS를 이어주는 접착제와도 같다.==
console을 활용하여 HTML을 JS의 관점에서 관찰하면 왜 JS가 HTML을 문서객체모델로서 인식하는지 이해할 수 있다.

```markdown
JS로 HTML element 가져오기
ex) 
 const a = document.getElementById("tagId");
 const a = document.querrySelector("#tagId");
 const a = document.getElementByClassName("tagClass");
```


```markdown
JS로 가져온 HTML element의 event 다루기

ex)
 const a = document.getElementById("tagId");
 a.addEventListener("click");
```

웹 브라우저의 작은 DB와도 같은 ==Local Storage== 활용하기
사용자의 이름이나 나이와 같은 간단한 정보를 웹에 저장해야 하는경우, ==Local Storage==를 활용하는 것이 가장 간편함
```JS
// Local Storage에 유저 이름 저장하고 화면에 나타내기

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello! ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else{
    paintGreetings(savedUserName);
}

```

==Setinteval()==의 중요성을 생각해라
만든 함수를 시간별로 반복 실행하는 경우 필수적인 메서드로 사용
==Settimeout()==과는 다르게 일정 시간주기마다 실행되기 때문에 시계와 같은 매커니즘에 용이
```JS
const clock = document.querySelector("h2#clock");

clock.classList.remove("hidden");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${second}`;
}
getClock();
setInterval(getClock, 1000);
```

