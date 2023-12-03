---
tistoryBlogName: coding-woogi
tistoryTitle: 6장_CSS 필수 속성 다루기_1
tistoryVisibility: "3"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "21"
tistoryPostUrl: https://coding-woogi.tistory.com/21
---

### 6.1 CSS의 특징 살펴보기

- 기본 스타일 시트
	HTML 자체에는 꾸밈을 담당하는 역할을 가진 태그나 기능X
	하지만 기본태그 각각의 속성값에 따른 스타일이 다른 이유 -> 내장된 기본 스타일 시트

- 적용 우선순위와 개별성
	사용자 별도 스타일 속성 정의 > 기본 스타일 시트의 스타일 속성 정의(우선적)
	```CSS
	h1{
		font-size:16px;
		font-weight:normal;
	}
```
	CSS는 스타일이 단계적으로 적용 -> 같은 스타일을 여러번 정의하면 마지막 속성이 적용
	 -> 단계적 적용(개별성 규칙)
	```CSS
	p{color:red;}
	p{color:blue;}
	p{color:orange};
	/*마지막 orange 스타일이 적용됨*/
```

< 개별성 규칙 점수 >

|  선택자    |   예   |   점수   |
|:-----|:-----|:-----|
|   전체선택자   |   *   |   0   |
|   태그선택자   |   div, p, h1   |   1   |
|   가상요소 선택자   |   ::before, ::after   |   1   |
|   클래스선택자   |   .box, .title   |   10   |
|   아이디 선택자   |   #title, #main   |   100   |
|   인라인 스타일   |   style = "..."   |   1000   |

```CSS
/*개별성 규칙에 따른 점수측정 예제*/
<style>
	.title{color:blue} /*0 0 1 0*/
	h1{color:red} /*0 0 0 1*/
</style>
```
```CSS
<style>
	p {
		color:blue !important /*점수가 10000점인 1순위 문법*/
	}
	nav > h2 {} /*0 0 0 2*/
	nav .title {} /*0 0 1 1*/
	#main .sub {} /*0 1 1 0*/
	a:hover {} /*0 0 1 1*/
	a:hover span::first-letter{} /*0 0 1 3*/
</style>
```

==현실적으로 정확한 점수계산은 어려움 -> 자세한 선택자의 작성이 점수와 비례한다 생각==

- 상속
	부모 요소에 적용된 스타일을 자식 요소가 물려받아 사용(전부는 X)
	``` CSS
	<style>
		div{
			color:red;
		}
	</style>
</head>
<body>
	<div>
		<p>inherit</p> /*div 태그의 자식인 p태그이므로 red 적용*/
	</div>
</body>
```

- 단위
	절대 단위 : 어떤 환경이라도 동일한 크기로 보이는 단위
	```markdown
	-절대 단위
	px : 모니터의 화면을 구선하는 사각형 1개의 크기(CSS의 크기 단위 중 가장 기본)
```
	상대 단위 : 부모 요소, 웹 브라우저의 창 크기에 따라 상대적으로 결정되는 단위
	```Markdown
	-상대 단위
	% : 해당 속성의 상위요소 속성값에 상대적인 크기를 가짐
	em : 부모 요소의 텍스트 크기에 상대적인 크기를 가짐
	rem : html 태그의 텍스트 크기에 상대적인 크기를 가짐
	vw : 뷰포트의 너비를 기준으로 상대적인 크기를 가짐
	vh : 뷰포트의 높이를 기준으로 상대적인 크기를 가짐
```

- 색상 표기법
	색상을 값으로 사용하는 속성
	키워드 표기법 : 색상의 영문명(ex.blue)를 속성값으로 사용하는 방법
	```CSS
	.box{
		color:blue;
	}
```
	RGB 색상 표기법 : R,G,B를 이용해 특정 색을 표현, 추가로 투명도를 조절하는 alpha값도 사용
	rgb, rgba 형식은 RGB값을 256개(0~255)의 숫자로 표현
	```CSS
	h1{
		color:rgb(255,0,0)
	}
	p{
		color:rgba(255,0,0,0.5)
	}
```
	hex 표기법 : R, G, B에 해당하는 값을 각각 16진수로 변환해 00~ff로 나타내는 방법
	```CSS
	h1{
		color:#001122; /*각각의 해당하는 값이 같다면 줄여서 표기 가능 = #012*/
	}
```

### 6.2 텍스트 속성으로 텍스트 꾸미기

- font-family 속성
	속성값으로 글꼴명을 작성해 글꼴 지정
	한글이나 공백이 있는 글꼴명은 ""(큰따옴표)로 감싸야함
	==,(쉼표) 로 구분==
	"글꼴 유형" 작성 권장(명시한 글꼴을 전부 불러오지 못할경우 유사한 형태로 이어줌)
	```CSS
	font-family:<글꼴1>, <글꼴2>, ...<글꼴 유형>;

	/*예시*/
	font-family:BatangChe, "Times New Roman", serif;
```

- font-size 속성
	텍스트의 크기 변경
	```CSS
	font-size:<크기>;

	/*예시*/
	font-size:14px;
```

- font-weight 속성
	텍스트의 굵기 변경
	```CSS
	font-weight:<숫자 표기법>|<키워드 표기법>;
```
	숫자 표기법 : 100단위로 표기하는 방법(100~900_숫자가 큰 순서)
	```CSS
	/*예시*/
	font-weight:100;
	font-weight:900;
```
	키워드 표기법 : 키워드로 표기하는 방법
	```CSS
	/*예시*/
	font-weight:lighter; /*normal, bold, bolder*/
```

- font-style 속성
	글꼴의 스타일 지정
	```CSS
	font-style:<속성값>;

	/*예시*/
	font-style:normal; /*italic, oblique*/
```

- font-variant 속성
	영문 텍스트를 크기가 작은 대문자로 변경
	```CSS
	font-variant:<속성값>;

	/*예시*/
	font-style:small-caps
```

- color 속성
	텍스트의 색상 지정
	```CSS
	p{
		color:red; /*rgba(0,0,0,0), #000000*/
	}
```

- text-align 속성
	텍스트를 정렬
	```CSS
	text-align:<속성값>;

	/*예시*/
	text-align:left /*right, center, justify*
```

- text-decoraition
	텍스트를 꾸미기위해(선을 긋기 위해) 사용
	```CSS
	text-decoration:<속성값>;

	/*예시*/
	text-decoration:none; /*line-through, overline, underline*/
```

- letter-spacing 속성
	자간 조절 시 사용(글자 사이 간격)
	```CSS
	letter-spacing:normal|<크기>;

	/*예시*/
	letter-spacing:15px;
```

- line-height 속성
	텍스트 한줄의 높이 지정 시 사용
	```CSS
	line-height:normal|<속성값>;

	/*예시*/
	line-height:normal; /*15, 15%, px*
```

### 6.3 박스 모델을 구성하는 속성 다루기
모든 HTML 요소가 ==박스==로 둘러쌓여 있다고 생각하는 개념
박스 형태의 요소들을 하나씩 ==원하는 곳에 배치==하여 웹 페이지를 완성시키고자 함
==margin==(외부여백), ==border==(테두리), ==padding==(내부여백), ==content==(내용)으로 구성

- margin 영역
	박스 모델의 외부 영역
	```CSS
	margin-top:<크기>;
	margin-right:<크기>;
	margin-bottom:<크기>;
	margin-left:<크기>;

	/*모든 방향을 통합해 margin 속성으로 사용도 가능*/
	margin:<margin-top> <margin-right> <margin-bottom> <margin-left>; /*순서*/
	margin:<margin-top & margin-bottom> <margin-right & margin-left>;
```
	margin 겹침 현상 : 인접한 margin 값 중 더 큰 값으로 통일되는 현상
	```CSS
	/*예시*/
	<style>
		.first{
			margin-bottom:20px;
		}
		.second{
			margin-top:30px; /*겹치는 구간 중 더 큰값인 30으로 적용*/
		}
	</style>
	...
```

- border 영역
	margin보다 안쪽에 있는 요소의 테두리(경계선) 영역
	```CSS
	border:<border-width> <border-style> <color>;
	/*margin과 마찬가지로 여러 속성 한번에 정의 가능(하나만 사용은 X)*/

	/*예시*/
	border-width:2px solid red;
```

- padding  영역
	margin, border 영역보다 안쪽에 있는 요소의 내부 영역
	```CSS
	/*margin의 속성값과 거의 동일*/

	/*예시*/
	p{
		border:1px solid black;
		padding:10px;
	}
```

- content 영역
	시작과 종료태그 사이의 콘텐츠가 속하는 영역
	==content 영역 자체==를 다루는 속성은 존재X, 영향을 주는 속성만 존재
	width, height 속성 : content  영역의 너비와 높이 지정
	```CSS
	width:<크기>;
	height:<크기>;

	/*예시*/
	div{
		width:100px;
		height:100px;
	}
```
	box-sizing 속성 : 웹 브라우저가 요소를 화면에 렌더링할 때, 기본적으로 내용뿐 아니라 border, padding의 영역까지 계산하여 이를 계산하지 않을 시 오차 발생 가능
	 -> 계산 방식을 개선한 box-sizing 속성 사용
	```CSS
	box-sizing:<속성값>;

	/*예시*/
	box-sizing:content-box; /*border-box*/
```
	-> border-box 속성값 사용 시 width, height 속성 지정 크기에 요소를 맞추기 위해 content 영역의 너비와 높이가 자동으로 조정(편리성 증가)

- 박스 모델의 성격과 display 속성
```Markdown
-블록 성격
	hn, p, div 태그 사용 시 요소 너비가 콘텐츠 유무와 상관없이 항상 가로 한줄을 차지
	여러번 사용 시 무조건 줄바꿈

-인라인 성격
	a, span, strong 태그 사용 시 요소 너비를 콘텐츠 크기만큼만 차지, 수평 공간이 남아있다
	면 한줄로 차지

-인라인 블록 성격
	요소의 너비가 콘텐츠의 크기만큼만 차지(인라인), 그 외는 전부 블록 성격을 띔

-블록 vs 인라인 vs 인라인 블록
	블록, 인라인 블록 -> width, height, margin, padding 전부 적용
	인라인 -> width, height 적용X, margin, padding은 왼, 오른쪽만 적용

-display 속성
	위 성격들을 속성값으로 하여 박스 모델의 성격을 변경
```














