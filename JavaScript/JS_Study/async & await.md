```javaScript
// async, await  
const delay = (ms) =>{  
    return new Promise((resolve) =>{  
        setTimeout(() =>{  
            resolve();  
        }, ms);  
    });  
};  
// async  
const start = async () => {  
    return "대기";  
};  
start().then((res) => {  
    console.log(res);  
});  
  
// await  
const start = async () => {  
    await delay(2000);  
    console.log("대기");  
};  
  
start();  
  
// 에러 처리  
const start = async () => {  
    try {  
    await delay(2000);  
    console.log("대기");  
    } catch (error){  
        console.log(error);  
    }  
};  
  
start();
```