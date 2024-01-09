---
tistoryBlogName: coding-woogi
tistoryTitle: 3장_실무에서 자주 사용하는 HTML 필수 태그 다루기_2
tistoryVisibility: "0"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "16"
tistoryPostUrl: https://coding-woogi.tistory.com/16
---

### 3.7 표 만들기

- table 태그
	HTML에서 표를 생성하는 경우 사용
	```html
	// 기본 형식
	<table></table>
```

- caption 태그
	table 태그 안에 사용하며 표의 제목을 지정할 때 사용
	```html
	// 기본 형식
	<table>
		<caption>표 제목</caption>
	</table>
```

- tr 태그
	행 생성시 사용
	```html
	// 기본 형식
	<table>
		<tr></tr>
	</table>
```

- th, td 태그
	열 생성 시 사용
	th는 제목을 나타내는 열, td는 일반적인 데이터를 나타내는 열
	```html
	// 기본 형식
	<table>
		<tr>
			<th>제목</th>
			<td>내용</td>
		</tr>
	</table>
```

- rowspan, colspan 속성
	기본적으로 tr 태그 안에 tr과 th, td를 사용하여 행과 열을 통한 테이블 생성
	행과 행을 병합하는 경우 rowspan 사용
	열과 열을 병합하는 경우 colspan 사용
	```html
	// 기본 형식
	<table>
		<tr>
			<th>제목1</th>
			<td>내용1</td>
		</tr>
		<tr>
			<th>제목2</th>
			<td rowspan = "2">내용2</td>
		</tr>
		<tr>
			<th>제목3</th>
			<!-- 위 내용2를 합쳤으므로 생성X -->
		</tr>
		<tr>
			<td colspan = "2">최종내용</td>
		</tr>
	</table>
```

- thread, tfoot, tbody  태그
	이름을 따서 각각의 영역에 해당하는 태그들을 그룹화
	사용할 경우 순서는 반드시 thead, tfoot, tbody 순이어야함
	thead, tfoot은 한번만 사용, thead 태그로 그룹화한 행은 th 태그로 열 생성
	```html
	<!--기본형식-->
	<table>
		<thead>
			<th>...</th>
		</thead>
		<tfoot>
			<td>...</td>
		</tfoot>
		<tbody>
			<td>...</td>
		</tbody>
	</table>
```

- col과 colgroup 태그
	열을 그룹화할 경우 사용
	col은 하나의 열, colgroup은 하나 이상의 열을 그룹화
	(caption 태그를 사용했을 경우, caption을 사용한 후에 사용)
	```html
	<!--기본형식-->
	<col>
	<colgroup span = "그룹화할 열의 개수"></colgroup>
```

- scope 속성
	웹 접근성 향상만을 목적으로 사용
	제목을 나타내는 셀의 범위 지정(th태그에서만 사용가능)
	```html
	<th scope = "col"></th>
	<th scope = "row"></th>
```

---

### 3.8 멀티미디어 설정하기

- audio 태그
	항상 src 속성과 함께 사용하며, 삽입하려는 오디오 파일의 경로를 값으로 지정
	오디오 컨트롤 패널의 웹 브라우저 노출을 위해 constrols 속성 지정
	웹 브라우저마다 지원하는 오디오 파일 포맷이 다름
	```html
	<audio src = "오디오 파일 경로" controls></audio>
```

- video 태그
	웹 브라우저에 비디오 요소를 추가할 때 사용
	audio 태그와 사용형식은 동일
	audio 태그와 마찬가지로 웹 브라우저마다 지원하는 비디오 파일 포맷이 다름
	```html
	<video src = "비디오 파일 경로" controls></video>
```

- source 태그
	audio, video 태그에서 리소스의 경로, 미디어 타입 명시
	```html
	<audio controls>
		<source src = "파일 경로" type = "미디어 타입">
	</audio>
	<video controls>
		<source src = "파일 경로" type = "미디어 타입">
	</video>
```

---

### 3.9 웹 페이지 구조를 설계하는 시맨틱 태그

기계도 쉽게 이해할 웹 페이지 설계의 중요성 향상에 따른 ==시맨틱 웹==의 등장
이에 맞춘 ==시맨틱 태그==가 점차 활용되기 시작

- header 태그
	헤더 영역 구분을 위해 사용
	```html
	<header>
		<!-- 헤더 구성 요소 -->
	</header>
```

- nav 태그
	웹 페이지 내부의 다른 영역 혹은 외부 연결 링크 영역 구분을 위해 사용
	보통 웹 사이트의 주요 탐색 링크 영역만 포함시키면 OK
	```html
	<nav></nav>
```

- section 태그
	논리적으로 관련 있는 내용 영역 구분을 위해 사용
	보통 제목을 나타내는 hn 태그를 포함함
	```html
	<section></section>
```

- article 태그
	독립적인 영역 구분을 위해 사용
	section 태그와 비슷한 사용목적으로 혼동할 수 있으나, article 태그는 ==독립적==인 영역 구분을 위함
	```html
	<article></article>
```

- aside 태그
	위의 section 태그나 article 태그로 구분하기 애매한 영역을 위해 사용
	```html
	<aside></aside>
```

- footer 태그
	웹 페이지의 푸터 영역 구분을 위해 사용
	일반적으로 페이지 최하단에 위치

- main 태그
	웹 페이지의 주요 내용 지정을 위해 사용
	문서 내 반복 등장요소를 포함X
	-> 위에서 언급한 태그들의 하위에 포함할 수 없음

---

### 3.10 태그 종류에 상관없이 사용하는 글로벌 속성
태그의 종류와 상관없이 모든 태그에서 공통으로 사용가능

- class 속성
	요소에 클래스명을 지정할 때 사용
	CSS에서 클래스 선택자로 활용
	```html
	<p class = "클래스 명">...</p>
```

- id 속성
	요소에 아이디를 지정할 때 사용
	마찬가지로 CSS에서 아이디 선택자로 활용
	```html
	<h1 id = "아이디 명">...</h1>
```

- style 속성
	CSS 코드를 인라인으로 작성 시 사용

- title 속성
	요소에 정보를 추가할 때 사용
	```html
	<p><span title = "추가적인 정보">...</span>...</p>
```

- lang 속성
	요소에 사용한 텍스트의 언어 코드를 지정
	```html
	<html lang = "ko">
```

- data-* 속성
	사용자 커스텀 속성을 제작
	```html
	<p data-name = "사용자 지정" data-property = "사용자 지정">...</p>
```
