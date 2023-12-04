---
tistoryBlogName: coding-woogi
tistoryTitle: 2장_HTML 문서 작성을 위한 기본 내용 살펴보기
tistoryVisibility: "0"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "8"
tistoryPostUrl: https://coding-woogi.tistory.com/8
---
### 2.1 HTML의 기본 구성 요소

- 태그
	웹 페이지의 구성 요소를 정의하는 역할
	```html
	//기본 형식
	<태그명>
```

- 속성
	태그에 어떠한 의미나 기능을 보충하는 역할(옵션)
	```html
	//기본 형식
	<태그명 속성명 = "속성값">
	// ex)
	<html lang = "ko">
```

- 문법
	- 콘텐츠가 있는 문법
		콘텐츠의 앞뒤를 태그로 감싸는 형식
		앞 태그를 <시작태그>, 뒷 태그를 </종료태그> 라 칭함
		양 태그와 콘텐츠를 통틀어 ==요소==라고 칭함
		```html
		<title> Contents </title>
```
	 - 콘텐츠가 없는 문법
		 앞뒤로 감쌀 콘텐츠 존재X, 따라서 <시작태그>만 사용
		 이는 곧 요소자체가 <시작태그>임을 뜻함
		 ```html
		 <br>
```

- 주석
	실행결과에는 표시X, 코드에 어떠한 메모나 설명을 남기고 싶은 경우 사용
	```html
	<!-- 주석 내용 -->
```

---
### 2.2 HTML의 기본 구조

HTML은 일정한 구조 안에서 작성(기본 구조)

- DTD
	==문서형 정의==를 칭하는 말로, 웹 브라우저가 처리할 문서의 형식 정의
	```html
	<!DOCTYPE html>
```

- html 태그
	문서의 시작과 끝
	```html
	<html>
		...
	</html>
```

- head 태그
	html 문서의 ==메타데이터==를 정의하는 영역(웹 직접노출X)
	```html
	// meta
	<meta charset="utf-8"> // HTML 허용 문자집합 정의
	<meta http-equiv = "X-UA-Compatible" content = "IE=edge"> // 렌더링 엔진 최신화
	<meta name = "viewport" content = "width=device-width, initial-scale=1.0"> // 기기 화면 너비 맞추기
	
	// title (중복 허용X)
	<title> My WEB </title> 
	
	// body (내용 작성)
	<body>
		...
	</body>
```

---
### 2.3 HTML의 특징 파악하기

- 블록 요소와 인라인 요소
	body 태그 안에서 사용하는 태그 중 공간 유무와 상관없이 사용할때마다 줄바꿈 되는 태그
	-> 이러한 태그를 블록 요소라 칭함(hn태그, p태그)
	반대로 공간이 부족할 때만 줄바꿈되는 태그도 존재
	-> 이러한 요소를 인라인 요소라 칭함(span태그, a태그)

- 부모, 자식, 형제 관계
	태그를 사용할 때 성립되는 관계 지칭
	```html
	<html> // 부모
		<head> // 자식, body의 형제
			...
		</head>
		<body> // 자식, head의 형제
			...
		</body>
	</html>
```

==줄바꿈과 들여쓰기의 습관화는 코드의 "가독성"을 높임==

