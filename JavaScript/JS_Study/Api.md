```javaScript
// Api : 컴퓨터와 프로그램 사이의 연결 (커피숍에서 커피를 주문하고 받는 과정과 유사)  
const response = fetch("https://jsonplaceholder.typicode.com/posts")  
    .then((res) => console.log(res))  
    .catch((error) => console.log(error));  
  
console.log(response);  
const getData = async () =>{  
    try {  
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");  
        const data = await res.json();  
        console.log(data);  
    } catch(error){  
        console.log(console.log(error));  
    }  
}  
  
getData();
```