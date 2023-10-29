```javaScript
// js 배열 내장함수_1  
let arr = [1,2,3,4,5];  
// forEach  
arr.forEach((elm, idx, array) => {  
    console.log(`${idx}번째 요소는 ${elm}입니다.`);  
    console.log(array);  
});  
  
//map  
let newArray = arr.map((elm) =>{  
    return elm * 10;  
});  
console.log(newArray);  
  
//at : 배열의 가장 마지막 요소에 쉽게 접근을 가능케함  
let colors = ['green', 'blue', 'purple'];  
console.log(colors.at(-1));  
  
//include : 특정 값이 존재하는지, 특정 인덱스값을 매개변수로 주면 그 수부터 끝까지 검사  
console.log(colors.includes('blue', 0));  
  
//indeoxOf : 특정 값이 존재하는 인덱스의 위치를 반환  
console.log(colors.indexOf('purple'));  
  
//findIndex : 특정 객체 안의 배열 안의 원소의 값을 찾는경우  
let colorss = [  
    {id : 1, color : 'green'},  
    {id : 2, color : 'blue'},  
    {id : 3, color : 'purple'},  
    {id : 4, color : 'yellow'}  
];  
colorss.findIndex((elm, idx, array) =>  
    console.log(`${idx} 번째 값은 id:${elm.id}, color : ${elm.color}`)  
);  
colors.findIndex((elm, idx, array) => console.log(array));  
  
//find : 배열의 원소가 특정 값인 요소 자체를 반환  
let idx = colorss.find((elm) => elm.color = 'purple');  
console.log(idx)  
  
//filter : 원하는 요소를 추출  
let filterArray = colorss.filter((elm, idx, array) => elm.id);  
console.log(filterArray);  
  
//slice : 특정 값에서 값까지 추출  
let sliceArray = colorss.slice(1,3);  
console.log(sliceArray);  
  
// js 배열 내장함수_2  
//concat : 특정 배열이나 원소가 두개 이상 있을 경우 하나로 합침  
let array1 = ["green", "blue"];  
let array2 = ["purple", "yellow"];  
console.log(array1.concat(array2));  
  
//join : 매개변수를 구분자로 넣어 공백을 어떻게 처리할지 결정  
let array3 = ["g", "y", "p", "b"];  
console.log(array3.join(" "));  
  
//sort : 배열을 정렬  
const compare = (a, b) => {  
    if(a>b) return -1;  
    else if(a<b) return 1;  
    else return 0;  
};  
  
let colors3 = ["blue", "purple", "green"];  
colors3.sort(compare);  
console.log(colors3);  
  
const compare_num = (a, b) => {  
    return b - a;  
};  
let numbers = [1,100,25,50,100];  
numbers.sort(compare_num);  
console.log(numbers);  
  
//reduce : 배열의 모든 원소를 확인하고 이를 합치고자 할 때 유용  
let numberss = [1,100,25,50];  
// let sum = 0;  
// numberss.forEach((elm) => {  
//     sum += elm;  
// });  
let sum = numberss.reduce((acc, cur, idx) => {  
    console.log(acc, cur, idx);  
    return acc + cur;  
}, );  
  
console.log(sum);  
  
//isArray : 전달받은 것이 배열인지 아닌지 확인해줌  
let a = Array.isArray([1,2,3]);  
let b = Array.isArray({ id : 1, color : "green"});  
let c = Array.isArray("string");  
let d = Array.isArray(undefined);  
  
console.log(a,b,c,d);
```