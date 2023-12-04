---
tistoryBlogName: coding-woogi
tistoryTitle: 3장_실무에서 자주 사용하는 HTML 필수 태그 다루기_1
tistoryVisibility: "3"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "9"
tistoryPostUrl: https://coding-woogi.tistory.com/9
---

### 3.1 텍스트 작성하기

- hn 태그
	제목이나 주제를 나타내는 텍스트의 표현
	h1~h6까지 6가지로 이루어져있으며, h = heading, n = 중요도(숫자)를 나타냄
	1에서 6으로 갈 수록 글자가 작아지고 가늘어짐, 검색 엔진에서 "키워드"로 인식
	```html
	// 기본 형식
	<hn>제목</hn>
```

- p 태그
	본문의 문단을 작성할 때 사용
	제목, 주제가 아니면 대부분 본문이므로 자주 사용
	```html
	// 기본 형식
	<p>내용</p>
```

- br 태그
	문단에서 줄바꿈을 하는 경우 사용
	HTML은 ==모든 명령과 지시를 태그==로 해야하기 때문에 사용해야함
	```html
	// 기본 형식
	<p>
		안녕<br>
		하세요
	</p>
```

- blockquote 태그
	출처에서 인용한 문단 단위 텍스트 작성시 사용
	출처가 확실할 경우 cite 속성으로 경로 명시!
	```html
	// 기본 형식
	<blockquote cite = "출처 URL">문단 단위 텍스트</bockquote>
```

- q 태그
	문단 안에 짧은 텍스트의 인용문 작성 시 사용
	사용 콘텐츠를 "" 로 묶음
	```html
	// 기본 형식
	<q cite = "출처 URL">짧은 인용문</q>
```

- ins, del 태그
	ins : 새로 추가된 텍스트임을 나타냄
	del : 기존 텍스트가 삭제된 텍스트임을 나타냄
	```html
	// 기본 형식
	<ins>추가텍스트</ins>
	<del>삭제텍스트</del>
```

- sub, sup 태그
	각각 아래 첨자, 위 첨자 해당 텍스트 작성시 사용
	```html
	// 기본 형식
	<sub>아래 첨자</sub>
	<sup>위 첨자</sup>
```

---
### 3.2 그룹 짓기
==공간 분할 태그 활용==

- div 태그
	블록 요소와 인라인 요소를 그룹으로 묶을 때 사용
	```html
	// 기본 형식
	<div class = "movie">
		<p>...</p>
		<p>...</p>
	</div>
```

- span 태그
	인라인 요소를 그룹으로 묶을 때 사용
	텍스트 일부만 디자인을 다르게 적용하고 싶을 때 사용
	```html
	// 기본 형식
	<p>이번 영화의 <span>하이라이트</span>를 소개합니다!</p>
```

### 3.3 목록 만들기

- ul 태그
	순서가 없는 비순서형 목록 생성시 사용
	목록 내용마다 글머리 기호가 붙음
	```html
	// 기본 형식
	<ul>
		<li>목록 내용1</li>
		<li>목록 내용2</li>
		...
	</ul>
```

- ol 태그
	순서형 목록 생성시 사용
	마찬가지로 li 태그로 목록 구성
	```html
	// 기본 형식
	<ol>
		<li>목록 내용1</li>
		<li>목록 내용2</li>
		...
	</ol>
```

- dl 태그
	정의형 목록(용어와 용어 설명을 나열한 목록) 생성시 사용
	dt 태그로 용어, dd 태그로 용어 설명 작성
	```html
	// 기본 형식
	<dl>
		<dt>용어 1</dt>
		<dd>용어 설명</dd>
		...
	</dl>
```

### 3.4 링크와 이미지 넣기
==링크(link)는 문서 간 연결을 의미

- a 태그
	내부나 외부 링크를 생성하는 기본적인 태그
	href 속성 필수 사용, target이나 title 속성을 선택 사용
	```html
	// 기본 형식
	<a href = "대상 경로" target = "링크 연결 방식" title = "링크 설명"</a>
```
	href 속성 : 링크의 대상 경로 입력 시 사용, 속성값은 주소(URL) 혹은 내부 문서 id값
	-> 연결 대상의 주소가 불분명할시, 속성값에 ==#==넣어주기
	
	target 속성 : 링크 대상의 연결 방식 지정, 속성값으로 \_black, \_parent, \_self, \_top 사용(거의_black만 씀), 생략 가능
	
	title 속성 : 링크를 설명할 텍스트 작성, 생략 가능

- img 태그
	이미지 객체 삼입 희망시 사용
	src 속성과 alt 속성으로 구성
	```html
	// 기본 형식
	<img src = "이미지 경로" alt = "이미지 설명">
```
	src 속성 : 이미지의 경로 입력 속성(웹 브라우저에서 실행되는 HTML 파일 위치 기준)
	alt 속성 : 이미지 객체 설명 텍스트 작성 시 사용(필수 사용 권고)
	```html
	// 현재 폴더
	<img src = "./image/beach.jpg" alt = "아름다운 해변">
	// 상위 폴더(여러번 사용 가능)
	<img src = "../image/beach.jpg" alt = "아름다운 해변">
```

- 이미지 링크
	img 태그를 a 태그 안에 사용
	이미지 클릭시 특정 링크로 이동하게 만드는 것이 가능
	```html
	// 기본 형식
	<a href = "대상 경로">
		<img src = "이미지 경로" alt = "대체 텍스트">
	</a>
```

---

### 3.5 텍스트 강조하기

- strong 태그
	텍스트의 의미를 강조하고 싶을 때 사용(글자의 굵기)
	중첩 사용 가능
	```html
	<strong>중요 <strong>매우중요</storng> q텍스트</strong>
```

- em 태그
	마찬가지로 텍스트의 의미를 강조하고 싶을 때 사용(글자의 기울어짐)
	중첩 사용 가능
	```html
	<em> 강조 텍스트 </em>
```

---
### 3.6 폼 구성하기
폼(form)은 HTML에서 사용자와 상호작용하여 정보를 입력받은 후 서버로 전송하기 위한 양식

- form 태그
	폼 양식을 의미
	HTML의 폼을 구성하는 태그는 모두 form 태그 안에 작성
	```html
	// 기본 형식
	<form action = "서버 URL" method = "get 또는 post"></form>
```
	action 속성 : 폼 요소에서 상호작용으로 입력받은 값을 전송할 서버의 주소 작성
	method 속성 : 값 전송 시 송신 방식 작성(get(보안 미요구시) 또는 post(보안 요구시))

- input 태그
	입력받는 요소 생성시 사용
	```html
	// 기본 형식
	<input type = "종류" name = "이름" value = "초기값"> 
```
	type 속성 : 입력된 값에 따른 상호작용 요소 결정
	name 속성 : 입력 요소 이름 작성, 서버 전송 시 name 속성값이 이름으로 전송
	value 속성 : 입력 요소의 초기값을 설정해야 하는 경우

- label 태그
	상호작용 요소에 이름을 붙이는 경우 사용
	==웹 접근성 향상==
	명시적, 암묵적 방법으로 나뉨
	```html
	// 암묵적 방법
	<label>
		아이디
		<input type = "text"> // 상호작용 요소
	</label>

	// 명시적 방법
	<label for = "userpw">비밀번호</label>
	<input type = "password" id = "userpw"> // for과 id의 속성값을 일치시킴

	// 에외
	<label for = "username">
		<input type = "text" id = "username">이름 // 함께 사용한 경우
	</label>
```

- fieldset과 legend 태그
	상호작용 요소를 그룹화(fieldset) 하고 그룹지은 요소에 이름을 붙힘(legend)
	```html
	// 기본 형식
	<form action = "#">
		<fieldset>
		<legend>그룹 이름</legend>
		...
		</fieldset>
	</form>
```

- textarea 태그
	여러 줄의 입력 요소를 작성할 때 사용
	input과 다르게 닫는 태그 존재(초기값을 콘텐츠 영역에 정의)
	```html
	// 기본 형식
	<label for = "desc"> 내용
		<textarea id = "desc" name = "desc"></textarea>
	</label>
```
  
- select, option, optgroup 태그
	select 태그 사용 시 콤보 박스 생성, 콤보 박스 안에 항목 추가시 option 속성 사용
	option으로 생성한 항목을 그룹화하고자 할 때 optgroup 속성 사용
	```html
	// 기본 형식
	<select>
		<optgroup label = "그룹1">
			<option value = "옵션1">옵션1</option>
			<option value = "옵션2">옵션2</option>
			<option value = "옵션3">옵션3</option>
			...
		</optgroup>
	</select>
```
	size 속성 : 콤보 박스에서 화면에 노출되는 항목의 개수를 지정, 속성값=숫자, 생략 시 기본 1개 표시
	```html
	// 기본 형식
	<select name = "이름" id = "이름" size = "3">
		<option value = "옵션1">옵션1</option>
		<option value = "옵션2">옵션2</option>
		<option value = "옵션3">옵션3</option>
		...
	</select>
```
	multiple 속성 : 콤보 박스내의 항목 선택 개수는 기본적으로 1개이나, 이 속성으로 늘리기 가능
	항목을 선택한 상태로 "Ctrl"을 누르고 재선택
	```html
	// 기본 형식
	<select name = "이름" id = "이름" multiple>
		<option value = "옵션1">옵션1</option>
		<option value = "옵션2">옵션2</option>
		<option value = "옵션3">옵션3</option>
		...
	</select>
```
	selected 속성 : 콤보 박스의 초기값으로 기본 선택되어있는 option value 값을 변경할 때 사용
	```html
	// 기본 형식
	<select name = "이름" id = "이름" size = "3"> 
		<option value = "옵션1">옵션1</option> 
		<option value = "옵션2" selected>옵션2</option>
		<option value = "옵션3">옵션3</option>
		...
	</select>
```

-  button 태그
	기존의 input 태그에서 type 속성값을 submit, reset, button 으로 지정시 사용 가능
	별도의 button 태그로도 생성 가능
	type 속성을 가짐
	```html
	// 기본 형식
	<button type = "종류">버튼 내용</button>
```
	submit : 서버 전송 목적
	reset : 입력된 내용 초기화
	button : 단순 버튼

- 폼 관련 태그에서 사용 가능한 추가 속성
	disabled 속성 : 상호작용 요소의 비활성화, input, textarea, select, button 태그에 사용 가능
	```html
	// 기본 형식
	<input type = "text" disabled>
	<button type = "button" disabled>비활성</button>
```
	readonly 속성 : 상호작용 요소를 읽기 전용으로 변경, 입력은 불가하나 드래그나 복사는 가능
	```html
	// 기본 형식
	<input type = "text" readonly>
	<textarea readonly></textarea>
```
	maxlength 속성 : 입력할 수 있는 글자 수 제한, 속성값 = 숫자
	```html
	// 기본 형식
	<input type = "URL" maxlength = "4">
```
	checked 속성 : 요소를 선택된 상태로 표시, checkbox나 radio 요소에만 사용 가능
	```html
	// 기본 형식
	<fieldset>
		<legend>그룹 이름</legend>
		<input type = "checkbox" id = "banana" value = "banana">
		<label for = "banana">banana</label>
		<input type = "checkbox" id = "apple" value = "aplle" checked>
		<label for = "apple">apple</label>
		<input type = "checkbox" id = "melon" value = "melon">
		<label for = "melon">melon</label>
	</fieldset>
```
	placeholder 속성 : 입력 요소에 입력해야 하는 값의 힌트를 주는 목적으로 사용
	```javaScript
	<input type = "tel" placeholder = "전화번호를 입력해주세요.">
```











