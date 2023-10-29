```javaScript
//spread : ...을 통해 객체나 배열에서 반복적인 값을 퍼트림  
const toy = {  
    type:"bear",  
    price : 15000  
};  
const blueToy = {  
    ...toy,  
    color : "blue"  
};  
const yellowToy = {  
    ...toy,  
    color : "yellow"  
};  
console.log(blueToy);  
console.log(yellowToy);  
  
//rest : 특정 부분을 하나의 객체나 배열로 묶어줌, 순서를 지키며 항상 마지막에 입력  
const blueToy = {  
    type : "bear",  
    price : 15000,  
    color : "blue"  
};  
// const { type, price, color} = blueToy;  
// console.log(type, price, color);  
// 위 코드의 price와 color 부분을 rest로 묶음  
const { type, ...rest} = blueToy;  
console.log(type, rest);

/// spread 와 rest 모두 사용한 경우  
const print = (a,...rest) =>{  
    console.log(a,...rest);  
}  
const numbers = [1,2,3,4,5,6];  
print(...numbers);
```