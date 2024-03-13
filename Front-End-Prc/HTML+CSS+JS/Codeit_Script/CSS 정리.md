### CSS 기본 개념 및 속성

- 기본 개념
CSS 규칙
```CSS
선택자 {
	속성 : 속성값;
	속성 : 속성값;
}
```

- 선택자
태그이름, id, class 중 선택하여 사용
```CSS
h1 {
	...
}
#id {
	...
}
.class {
	...
}
```

- 색상 단위
```markdown
색상 이름
 => green, red, yellow, etc..
색상 코드
 => #fff, #000, etc..
RGB
 => rgb(255,255,255), rgb(0, 212, 20), etc..
RGBA
 => rgba(255,255,255,0.5), rgba(0,0,0,0.1), etc..
```

- 크기 단위
절대적인 단위
```markdown
px (픽셀)
 => 10px, 30px
```

상대적인 단위
```markdown
% (퍼센트)
 => 10%, 50%
em (최상위 태그 기준)
 => 1em, 10em
rem (html태그 기준)
 => 1rem, 2.5rem (보통 16px 기준)
```

- 배경 background
```CSS
/* 배경 삽입 시 url 문법 사용 */
background-image: url('???.png'); /* 여러개 중첩 사용 가능 */

/* 배경 컨트롤 속성 */
background-position
background-repeat
background-size
background-image: linear-gradient(#000, #fff);

/* box-shadow 속성 예시*/
box-shadow : 5px 10px 20px -5px rgba(0,0,0,0.2);

/*opacity 속성 예시*/
opacity: 0.5;
```

### 박스 모델
요소를 박스 형태로 나눈 것으로서, 바깥 여백 (마진), 테두리 (보더), 테두리와 내용 사이 여백 (패딩), 내용 (콘텐트)로 구성

- border
굵기, 테두리 종류, 색상 순서로 입력
```CSS
/* border 예시 */
border: 1px solid green;
```

- border-radius
border의 테두리 모양 변경
```CSS
border-radius : 50%; /* 원 형태 */
border-radius : 9999px; /* 알약 형태 */
```

- box-sizing 속성
직관적으로 크기를 지정하기 위해 테두리까지 합친 크기를 요소 자체의 크기로 지정
```CSS
box-sizing: border-box;
```

- overflow 속성
박스 모델 밖으로 빠져나온 내용을 감추는 속성
```CSS
overflow: hidden; /* 내용물 감추기 */
overflow: scroll /* 내용물을 감추지만 스크롤을 통해 확인 가능 */
```

==마진 상쇄== : 일반적으로 세로 마진이 더 큰 마진을 기준으로 겹쳐 나타나는 현상

### Display 정리

- 블록 (block)
위에서 아래로 차례대로 배치되는 요소
```CSS
display : block;

/* 예시 */
<h1~h6>, <p>, <div>
```

- 인라인 (inline)
글을 쓰는 방향으로 줄이 바뀌며 배치되는 요소 ==(크기 지정 불가)==
```CSS
display : inline;

/* 예시 */
<a>, <br>, <img>, <span> /* img 태그는 외부 데이터를 보여주기 때문에 크기 지정 가능 */
```

- 인라인 블록 (inline-block)
인라인처럼 배치하지만 블록처럼 크기를 가지고 싶을 때 사용하는 속성
```CSS
dislay: inline-block;
```

- float 속성
요소를 페이지 왼, 오른쪽으로 삽화처럼 배치, 그 주변에 인라인 요소를 배치하는 속성
```CSS
float : left;
```

### CSS 선택자 (CSS Selector)

- 선택자 목록
콤마 (,)로 선택자를 연결하여 여러 선택자에 동일 규칙 적용
```CSS
selector1,
selector2{
	...
}
```

- 선택자 붙여쓰기
여러 조건(ex.클래스 이름)을 동시에 만족하는 요소 선택 시 사용
```CSS
#id.class{
	...
}
.class.class{
	...
}
.class#id{
	...
}
```

- 자식, 자손 결합자
오른쪽 꺽쇠(자식) 혹은 스페이스(자손)을 사용해 요소 선택
```CSS
/* 자식 */
.class > element{
	...
}
/* 자손 */
.class element{
	...
}
```

- 가상 클래스
의사 혹은 가짜 클래스로도 지칭, 요소의 상태 선택 시 사용
```CSS
.class:hover{
	...
}
```

- 그 외의 선택자
```CSS
/* 모든 요소 */
*{
	...
}

/* n번째 자식 선택자 */
.class:nth-child(n){
	...
}
```

### 캐스케이드 (Cascade)
우선순위에 따라 속성을 적용

- 스타일시트의 종류
브라우저에서 기본 제공하는 스타일 시트의 우선순위 < 유저가 작성한 코드의 우선순위

- 코드 상의 순서
동일한 선택자인 경우 밑에 쓴 코드의 우선순위⬆️

- 명시도
```CSS
a.order{ /* 아이디 0 클래스 1 태그 1 = 0 1 1*/
	...
}
a#info{ /* 아이디 1 클래스 0 태그 1 = 1 0 1*/
	...
}
```

- 상속된 속성의 우선순위
가까운 조상에게 물려받은 속성일수록 우선순위⬆️
```markdown
< 대표적인 상속 가능 속성 >
color, font-family, font-size, font-weight, line-height, text-align, etc..
```