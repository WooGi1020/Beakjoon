### 기본 텍스트 태그

- 마크업의 의미
```HTML
<!-- 제목 태그 <h1>~<h6> -->
<h1>한국 영화</h1>

<h2>한국 영화의 역사</h2>
<h3>2000년대: 르네상스</h3>
<h3>2010년대: 최전성기</h3>
<h3>2020년대: 대격변</h3>

<h2>유명한 한국 감독</h2>
<h3>박찬욱</h3>
<h3>봉준호</h3>

<!-- 본문 <p> -->
<p> 1950년대에는 한국전쟁이 일어나면서 영화계는 침체를 맞게 됩니다. 하지만 1950년대 중반을 지나서 그 사이 발전된 기술에 힘입어 점점 많은 영화가 나오기 시작하더니 1950년대 후반에 들어서는 1년에 100편 가까이 제작되었습니다. </p>

<!-- 줄바꿈 <br> -->
<p> 1950년대에는 한국전쟁이 일어나면서 영화계는 침체를 맞게 됩니다. <br> 하지만 1950년대 중반을 지나서 그 사이 발전된 기술에 힘입어 점점 많은 영화가 나오기 시작하더니 1950년대 후반에 들어서는 1년에 100편 가까이 제작되었습니다. </p>

<!-- 중요 <strong> -->
<p> 1950년대에는 한국전쟁이 일어나면서 영화계는 침체를 맞게 됩니다. <br> 하지만 1950년대 중반을 지나서 그 사이 발전된 기술에 힘입어 점점 많은 영화가 나오기 시작하더니 1950년대 후반에 들어서는 1년에 <strong>100편</strong> 가까이 제작되었습니다. </p>

<!-- 강조 <em> -->
<p> 제 이름은 정 <em>우기</em>입니다. </p>

<!-- 취소 <s> -->
<p> <s>상가 임대</s>임대 완료 </p>

<!-- 인용 <blockquote>(긴 글), <q>(짧은 글) -->
<blockquote>우리끼리 경쟁할 순 없습니다. 오늘 제가 여기에 있는 것은 단지 조금 더 운이 좋았을 뿐이죠. 여러분보다 조금 더 운이 좋았네요.</blockquote>
<q> 제 데뷔작을 함께 했습니다. </q>

<!-- 위 첨자 <sub>, 아래 첨자 <sup> -->
<p> 물의 화학식은 H<sub>2</sub>O이고, 3의 제곱(3<sup>2</sup>)은 9이다. </p>

<!-- 주제 전환 <hr> -->
</p>
<hr> <!-- 가로 선을 그어줌 -->
<p>

<!-- 서식이 정해진 텍스트 <pre> -->
<pre>
    body {
        background-color: #000000;
        color: #ffffff;
    }
</pre>

<!-- 코드 <code> -->
code>body</code>
```


### 링크 정리

- 링크의 상대주소
🔖 ./ (현재 폴더), ../ (상위 폴더), / (최상위 폴더)
✅ index.html 파일은 이름 생략 가능 ( ex. ../esample/ )
```HTML
<a href = "../example.html"></a> <!--상위 폴더-->
<a href = "./example.html"></a> <!--현재 폴더-->
<a href = "/example.html"></a> <!--최상위 폴더-->
```

- URL 프래그먼트
🔖 페이지의 특정 부분을 가리키는 주소, 클릭 시 해당 위치로 이동
```html
<a href="#example">이동</a>
<p id="example">예시</p>
```
- [ ] 
- target 속성
🔖 새 창(새 탭)으로 열거나 현재 창 or 내가 원하는 창으로 열기 가능
```HTML
<a href = "#" target=_"blank"></a>
<a href = "#" target=_"blank"></a>
<a href = "#" target=_"blank"></a>
```

### 리스트 정리

- 순서 리스트
🔖 순서가 있는 리스트 , 순서가 없는 리스트로 구분
```HTml
<!-- 순서 있는 리스트 -->
<ol>
  <li>라라랜드</li>
  <li>명량</li>
  <li>극한직업</li>
  <li>신과함께: 죄와 벌</li>
  <li>국제시장</li>
  <li>어벤져스: 엔드게임</li>
</ol>
<!-- 순서 없는 리스트 -->
<ul>
  <li>한국 영화</li>
  <li>외국 영화</li>
  <li>드라마</li>
  <li>예능</li>
  <li>영화</li>
  <li>프로야구</li>
</ul>
```

- 리스트 스타일링
🔖 type 속성과 속성값을 통해 기호 변경 가능
```html
<!-- html -->
<ol type="I">

<!-- CSS -->
<style>
	list-style: none; /*disc, none, etc..*/
</style>
```

### 테이블
정보를 표로 나타내고자 할 때 사용하는 태그

- 머리글과 바닥글
```html
<table>
	<thead> 
		<tr> 
			<th>word</th> <!-- 제목으로 쓰는 칸 -->
			<th>word</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>word</td> 
			<td>word</td>
		</tr>
		<tr>
			<td>word</td>
			<td>word</td>
		</tr>
	</tbody>
</table>	
```

- 테이블 스타일링
🔖 border 속성을 이용해 테두리 설정
```CSS
/* 일반적인 border */
table{
border: solid 1px red;
}
/* 테두리 겹치기 */
table{
border: solid 1px red;
border-collapse: collapse;
}
/* 테두리 간격 */
table{
border: solid 1px red;
border-spacing: 10px;
}
```

### 멀티미디어

- 이미지
🔖 src 속성으로 파일 경로 지정, alt 속성으로 간단한 소개 명시
```html
<img src = "esample.png" alt = "esample">
```

- 비디오
🔖 src 속성으로 파일 경로 지정 및 부가적인 속성 활용
```html
<video src = "example.mp4" autoplay muted controls>
```

- 오디오
🔖 src 속성으로 파일 경로 지정 및 부가적인 속성 활용
```html
<audio src = "example.mp3" autoplay controls>
```

- iframe
🔖 인라인 프레임으로서 다른 HTML 문서를 문서 안에 불러올 때 사용
```html
<iframe src = "example.html">
```

### 폼 정리

- 기본적인 폼 형태
```HTML
<form>
  <label for="username">아이디</label>
  <input id="username" name="username">
  <label for="password">비밀번호</label>
  <input id="password" name="password" type="password">
  <button>로그인</button>
</form>
```

- 라벨
🔖 input 태그를 감싸는 태그로서 클릭시 포커싱
```HTML
<label for="username">아이디</label>
<input id="username" name="...">
```

- 인풋
🔖 입력할 수 있는 칸을 생성해주는 태그, type 속성을 이용해 다양하게 사용 가능
```html
<!-- 체크 박스 -->
<input name="agreement" type="checkbox">
<!-- 날짜 -->
<input name="example" type="date">
<!-- 파일 -->
<input name="example" type="file" accept=".png, .jpg" multiple(true or false)>
<!-- 이메일 -->
<input name="example" type="email">
<!-- 숫자 -->
<input type="number" min="100" max="1000" step="10">
<!-- 비밀번호 -->
<input type="password">
<!-- 라디오 -->
<input type="radio" name="example"value="0">
<!-- 범위 -->
<input id="example" name="example" type="range" min="0" max="10">
<!-- 옵션 선택 -->
<select>
	<option value="example">example</option>
</select>
<!-- 긴 글 -->
<textarea></textarea>
```

- head
페이지에 대한 정보를 담는 태그
```HTML
<head>
	<meta charset="utf-8">
	<title>example</title>
	<link rel="stylesheet" href="style.css">
	<link rel="favicon" href="icon.ico">
</head>
```

- 시맨틱 태그
div 태그와 동일한 기능을 가지나, SEO, A11y 등에 활용하기 용이한 태그
```HTML
<header> <!-- 영역 최상단의 도입부 -->
<main> <!-- 사이트의 본 내용(한번만 사용) -->
<footer> <!-- 사이트 하단에 위치하는 각종 정보용 태그 -->
<article> <!-- 하나의 완성된 독립적인 내용 -->
<section> <!-- 특정 부분의 일부분을 나타냄 -->
<figure> <!-- 이미지 및 이미지 설명 영역 -->
```

### 메타 태그
meta 태그를 이용해 작성하는 HTML의 설명을 목적으로 하는 데이터를 넣는 태그
```HTML
<!-- 문서의 문자 인코딩 작성 -->
<meta charset = "utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale, user-scalable=no">
<!--name="viewport" 설정으로 반응형 웹 사이트를 제작할 수 있어요.
width=device-width: 장치의 화면 너비를 따르도록 페이지 너비를 설정해요.
initial-scale=1: 브라우저에서 페이지를 처음 로드할 때 배율을 1로 설정해요.
minimum-scale=1: 최소사이즈를 1배로 처리해서 축소를 못하게 막아요.
maximum-scale=1: 최대사이즈를 1배로 처리해서 확대를 못하게 막아요.
user-scalable=no: 사용자크기변화를 no로 처리해서 크기변화를 못하게 막아요. -->

<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 인터넷 익스플로러에서 최신 표준 모드로 보여주는 코드에요. -->

<meta name="robots" content="noindex">
<!-- name="robots" 설정으로 크롤러의 동작에 대해 규칙을 정할 수 있어요.
검색결과에 이 페이지, 미디어 또는 리소스를 표시하지 않아요. 이 규칙을 지정하지 않으면 페이지, 미디어 또는 리소스가 색인 생성되어 검색결과에 표시될 수 있어요. -->
```

- 사이트를 설명하는 meta 태그 (검색결과창)
```html
<title>코드잇 | 코딩, 쉬워질 때도 됐다</title>
<meta
    name="description"
    content="월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!"
>
```

- SNS 공유 미리보기 (오픈그래프)
```html
<!-- 페이스북 -->
<meta property="og:image" content="/static/images/brand/og_tag.png">
<meta property="og:title" content="코드잇 | 코딩, 쉬워질 때도 됐다">
<meta
    property="og:description"
    content="월 2만원대로 Python, JavaScript, HTML/CSS 등 3,000개 이상 프로그래밍 강의를 배워보세요!"
>
<meta property="og:url" content="https://www.codeit.kr">

<!-- 트위터 -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="/static/images/brand/og_tag.png">
<meta
    name="twitter:title"
    content="JavaScript 프론트엔드 개발자 - 커리어 강의 | 코드잇"
>
<meta
    name="twitter:description"
    content="예쁘고 편리한 웹사이트를 뚝딱 만들어 내는 프론트엔드 개발자를 꿈꾸고 게신가요? ..."
>
```