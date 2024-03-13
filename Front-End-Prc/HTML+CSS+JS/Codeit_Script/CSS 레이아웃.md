
### position 속성
🔖 글의 흐름에서 벗어나 요소를 자유롭게 배치하고 싶을 때 사용, ==속성==에 따라 기준이 변화
```CSS
/* default값 */
position: static;
```

### 위치 정하기
🔖 position 속성으로 설정한 요소의 위치를 지정
```css
top : 10;
right: 10;
bottom: 10;
left: 10;

/* 위와 같이 전부 값이 동일할 경우 inset속성 사용 */
inset: 10;
```

### relative 포지션
🔖 요소의 원래 위치 기준 배치(기존의 공간은 그대로 차지)
```css
position: relative;
top: 10;
left: 10;
etc..
```

### absolute 포지션
🔖 가장 가까운 포지셔닝이 된 조상요소 기준 배치(기존 공간은 차지X)
```css
.parent-node{
	position: relative;
	top: 0;
	left: 0;
}
.child-node{
	position: absolute;
	right: 10;
	bottom: 10;
}
```

### fixed 포지션
🔖 브라우저 화면 기준 고정 (기존 공간은 차지X)
```CSS
postion: fixed;
top: 0;
left: 0;
width: 100%;
```

### sticky 포지션
🔖 static과 동일배치 후, 설정된 값에 위치 시 화면 고정 (기존의 공간은 그대로 차지)
```CSS
position: sticky;
top: 0;
width: 100%;
```

### z-index 값
요소의 z축을 설정할 때 사용, 속성값과 z축 크기 비례
```css
z-index: 1;
```

