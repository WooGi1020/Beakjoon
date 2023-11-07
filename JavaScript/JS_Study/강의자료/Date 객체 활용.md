```javaScript
// yyyy-mm-dd

const week = ["일", "월", "화", "수", "목", "금", "토"];

let nowDate = new Date();

let month = nowDate.getMonth() + 1;

let date = nowDate.getDate();

let day = nowDate.getDay();

let hours = nowDate.getHours();

let min = nowDate.getMinutes();

  

console.log(`${month}월 ${date}일 ${week[day]}요일 ${hours}시 ${min}분`);
```