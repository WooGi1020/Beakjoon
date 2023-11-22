
### 4.1 CSS 문법 살펴보기

- 문법 형식
	CSS 문법은 크게 ==선택자==와 ==선언부==로 구분
	선택자 : CSS 스타일을 적용할 HTML의 태그 요소 선택 영역
	선언부 : 선택자에서 선택한 태그에 적용할 스타일 작성 영역
	```CSS
	/*기본형식*/
	h1{
		font-size:24px;
		color:red;
	}
```

---

### 4.2 CSS 적용하기

- 내부 스타일 시트 적용하기
	내부 스타일 시트 : HTML 파일 내부에 CSS 코드를 작성하는 방법
	보통 ==head==태그 안에 사용(웹 브라우저는 HTML을 첫번째부터 순차적으로 해석함)
	-> HTML 문서 해석 시마다 매번 다시 읽는 단점 존재.
	```html
	<!--예시-->
	<head>
		<title>사용자 지정 타이틀</title>
		<style>
			h1{
				color:blue;
			}
		</style>
	</head>
```

- 외부 스타일 시트 적용하기
	별도의 CSS 작성 파일을 HTML 문서와 연결s
	link 태그 사용
	```html
	<link rel = "stylesheet" href = "css 파일 경로">
```

- 인라인 스타일 사용하기
	HTML 문서의 style 속성에 직접 CSS 코드를 작성
	==선택자 부분 필요X==
	```html
	<태그 style = "CSS 코드"></태그>

	<!--예시-->
	<body>
		<h1 style = "color:red, font-size:24px">사용자 지정</h1>
	</body>
```

