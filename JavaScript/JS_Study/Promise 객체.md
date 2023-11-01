```javaScript
const workA =(value, callback) => {  
    setTimeout(()=>{  
        callback(value + 5);  
    }, 8000);  
};  
const workB =(value, callback) => {  
    setTimeout(()=>{  
        callback(value - 3);  
    }, 5000);  
};  
const workC =(value, callback) => {  
    setTimeout(()=>{  
        callback(value + 10);  
    }, 3000);  
};  
// callback 함수로 함수의 실행 순서를 알 수 있음(가독성이 떨어짐) => promise 객체로 해결  
workA(10, (resA) => {  
    console.log(`1. ${resA}`);  
    workB(resA, (resB) => {  
        console.log(`2. ${resB}`);  
        workC(resB, (resC) => {  
            console.log(`3. ${resC}`);  
        })  
    })  
})  
  
//promise 객체 : 성공 유무에 따라 resolve 혹은 reject 호출  
//성공  
const executor = (resolve, reject) => {  
    setTimeout(() =>{  
        resolve("성공");  
    }, 3000);  
};  
const promise = new Promise(executor);  
promise.then((res) =>{  
    console.log(res);  
})  
  
//실패  
const executor = (resolve, reject) => {  
    setTimeout(() =>{  
        reject("실패");  
    }, 3000);  
};  
const promise = new Promise(executor);  
promise.catch((err) => {  
    console.log(err);  
});
```