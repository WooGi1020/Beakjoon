
### 중복 선언 허용에서의 비교
---
🔖기본적으로 var, let은 중복 선언을 허용하며, const는 허용하지 않는다.
❗중복 선언은 허용하되, let은 재선언을 허용하지 않는다.
❗const는 선언과 동시에 초기화 해주어야 한다.
```js
// var 키드드
var a = 'JavaScript';
var a = 'Python'; // 허용
a = 'JAVA'; // 허용

// let 키워드
let a = 'JavaScript';
let a = 'Python'; // 미허용
a = 'JAVA'; // 허용

// const 키워드
const a = 'JavaScript';
const a = 'Python'; // 미허용
a = 'JAVA'; // 미허용
```
✅기존의 var 키워드는 중복 선언으로 인해 다양한 문제(버그, 출력값 오류 등)를 야기
➡️let과 const 키워드를 통해 변수를 업데이트하는 상황에선 let, 변경하지 않는 값은 const로 선언

### 스코프에서의 비교
---
🔖var는 함수 스코프, let과 const는 블록 스코프를 가진다.
❗블록 스코프는 심지어 따로 용도가 없더라도 중괄호로 감싸진 모든 블록문에서 스코프를 가진다.
```js
// var
const a = () => {
	var hi = 'hi';
}
console.log(hi); // 미허용

// let, const
{ // 모든 블록문 동일
	let a = 1;
	const b = 2;
}
console.log(a); // 미허용
console.log(b); // 미허용
```

### 호이스팅에서의 비교
---
🔖호이스팅이란 JS 엔진이 변수 선언을 포함하는 모든 선언문을 찾아내어 먼저 실행하는 것이다.
❗var, let, const 모두 호이스팅 가능, var의 경우 undefined로 초기화까지 실행, 나머지는 X
```js
console.log(a); // undefined 출력
var a = 1;

console.log(b); // 미허용
let b;

console.log(c); // 미허용
const c = 1;
```