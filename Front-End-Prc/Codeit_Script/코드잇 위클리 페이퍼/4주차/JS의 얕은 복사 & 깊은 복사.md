
### 자바스크립트의 값
---
🔖기본적으로 자바스크립트의 값은 원시값과 참조값으로 나뉜다.
- 원시값 : Number, String, Boolean, Null, Undefined
- 참조값 : Object, Symbol

✅원시값은 복사한 값을 다른 메모리에 할당하여 기존 값에 영향을 끼치지 않는다. (깊은 복사)
✅참조값은 주소를 복사하기 때문에 복사한 값을 변경하면 기존 값도 변경된다. (얕은 복사)

### 얕은 복사(Shllow Copy)
---
🔖객체의 참조(주소)값을 복사하는 것
```js
const a = {
	one : 'one',
	two : 'two',
}

const b = a;
b.one = 1;

console.log(a.one); // 1
```
✅객체의 주소를 복사하여 변수에 할당하기 때문에, 변수의 값을 수정하면 기존 객체도 변경된다.

```js
// 얕은 복사의 예시
// 전개 연산자
const obj = {
	a: 1,
	b: {
		c: 2,
	}
}
const copyObj = {...obj};

copyObj.b.c = 3;
console.log(obj.b.c) // 3
```

### 깊은 복사(Deep Copy)
---
🔖객체의 실제 값을 복사하는 것
```js
const a = 1;
const b = a;
b = 2;

console.log(a); // 1
console.log(b); // 2
```
✅객체의 실제 값을 복사하기 때문에, 변경하더라도 기존의 값에는 영향을 끼치지 않는다.

```js
// 깊은 복사의 예시
// JSON.stringify()
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};
const copiedObj = JSON.parse(JSON.stringify(obj));
copiedObj.b.c = 3

console.log(obj.b.c) // 2
```



