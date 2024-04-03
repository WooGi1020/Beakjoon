🔖position은 문서 상의 요소를 배치하기 위한 속성이다.

---
### 1. static
🔖요소를 일반적인 문서의 흐름에 따라 배치하며, 기본값이다.
🔖position과 함께 사용하는 top, right, bottom, left 및 z-index 등의 속성에 영향을 받지 않는다.
```CSS
position: static; /*default*/
```

### 2. relative
🔖요소를 일반적인 문서 흐름에 따라 배치하며, 자기 자신을 기준으로 top, right, bottom, left 속성에 따라 오프셋을 적용한다.
🔖오프셋은 다른 요소에 영향을 주지 않으므로, static에서와 같이 기존 공간을 차지한다.
❗==쌓임 맥락== 생성에 주의!
```CSS
position: relative;
/* 함께 사용하는 속성 */
top: 10px;
left: 10px;
```

### 3. absolute
🔖요소를 문서 흐름에서 제거하고, 페이지 레이아웃의 공간도 배정하지 않는다. 대신 relative 속성이 적용된 가장 가까운 요소의 위치에 대해 상대적인 배치를 적용한다.
❗==쌓임 맥락== 생성에 주의!
```CSS
.parent-el {
	position: relative;
}
.child-el{
	position: absolute;
	/* 함께 사용하는 속성 */
	top: 10px;
	right: 20px;
}
```

### 4. fixed
🔖요소를 문서 흐름에서 제거하고, 페이지 레이아웃의 공간도 배정하지 않는다.  옵션을 사용해 배치 시 스크롤을 내리더라도 위치가 항상 똑같이 고정된다.
```CSS
position: fixed;
/* 함께 사용하는 속성 */
top: 0;
left: 0;
right: 0;
```

### 5. sticky
🔖요소를 일반적인 문서 흐름에 따라 배치한다. 일반적으로 relative와 같이 오프셋을 적용하는 것은 동일하나, 스크롤 동작이 실행 시 스크롤 되는 요소를 기준삼아 배치되며, 유지된다.
```CSS
postiion: sticky;
/* 함께 사용하는 속성 */
top: 10px;
left: 20px;
```