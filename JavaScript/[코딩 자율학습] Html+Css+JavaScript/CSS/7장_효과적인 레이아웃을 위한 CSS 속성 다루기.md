---
tistoryBlogName: coding-woogi
tistoryTitle: 7장_효과적인 레이아웃을 위한 CSS 속성 다루기
tistoryVisibility: "3"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "24"
tistoryPostUrl: https://coding-woogi.tistory.com/24
---

### 7.1 플렉스 박스 레이아웃으로 1차원 레이아웃 설계하기
1차원 방식으로 고안된 효과적 레이아웃 설계 스타일 속성

- 플렉스 박스 레이아웃 살펴보기
```MarkDown
- 주축(main axis) : 플렉스 박스 진행 방향과 수평한 축
- 교차축(cross axis) : 주축과 수직한 축
- 플렉스 컨테이너(flex container) : display 속성값으로 flex, inline-flex가 적용된 요소
- 플렉스 아이템(flex item) : 플렉스 컨테이너의 자식요소
```

<기본 예제 코드>
```HTML
<!--기본 예제 코드-->
<head>
	...
	<link href = "flex-basic.css" rel = "stylesheet">
</head>
<body>
	<div class = "flex-container">
		<div class = "flex-item">item-1</div>
		<div class = "flex-item">item-2</div>
		<div class = "flex-item">item-3</div>
		<div class = "flex-item">item-4</div>
	</div>
</body>
```
```CSS
.flex-container{
	width:300px;
	height:200px;
	background-color:#c4c4c4;
	border:1px solid black;
}
.flex-item{
	color:white;
	background-color:#ff5252;
}
.flex-item:nth-child(2n){
	background-color:#bf5e5e;
}
```

- 플렉스 박스 레이아웃의 기본 속성
기본적으로 display 속성값을 flex 혹은 inline-flex로 지정하는 것으로 시작(기존 display 속성 무시)
```CSS
/*기본 형식*/
display:flex; /*inline-flex*/
```
flex : 적용 요소의 다음 요소가 항상 줄바꿈
inline-flex : 다음요소가 주변에 배치

==flex-direction 속성== : 레이아웃의 주축 방향 결정
```CSS
flex-direction:<속성값>;
```
	
|  속성값    | 설명     |
|:-----|:-----|
|    row  |   주축 방향을 왼->오로 지정(기본값)   |
|   row-reverse   |   주축 방향을 오->왼으로 지정   |
|   column   |   주축 방향을 위->아래로 지정   |
|   column-reverse   |    주축 방향을 아래->위로 지정  |

==flex-wrap 속성== : 플렉스 아이템이 컨테이너 영역을 벗어나는 경우 처리 결정
```CSS
flex-wrap:<속성값>;
```
	
|   속성값   |   설명   |
|:-----|:-----|
|   nowrap   |   플렉스 아이템이 컨테이너를 벗어나도 무시(기본값)   |
|  wrap    |   플렉스 아이템이 컨테이너를 벗어나면 줄바꿈   |
|   wrap-reverse   |   플렉스 아이템이 컨테이너를 벗어나면 wrap 역방향 줄바꿈   |

==flex-flow 속성== : 위 두 속성을 한번에 사용 가능한 단축 속성
```CSS
flex-flow:<flex-direction> <flex-wrap>;
```

- 플렉스 박스 레이아웃의 정렬 속성
==justify-content 속성== : 플렉스 아이템 주축 방향 정렬 속성
```CSS
justify-content:<속성값>;
```
	
|  속성값    |   설명   |
|:-----|:-----|
|  flex-start    |   주축 방향의 시작 기준 정렬   |
|   flex-end   |   주축 방향 끝 기준 정렬   |
|   center   |  주축 방향 중앙 정렬    |
|    space-between  |   플렉스 아이템 사이 간격 균일 정렬   |
|   space-around   |    플렉스 아이템 둘레 균일 정렬  |
|   space-evenly   |   플렉스 아이템 사이, 양끝 간격 균일 정렬   |

==align-items, align-content, align-self 속성== : 플렉스 아이템 교차축 방향 정렬 속성
```CSS
align-items:<속성값>;
```
	
|  속성값    |  설명   |
|:-----|:-----|
|   stretch   |  교차축 방향 플렉스 아이템 너비 or 높이 증가   |
|   flex-start   |   교차축 방향 시작 기준 정렬   |
|  flex-end   |   교차축 방향 끝 기준 정렬   |
|   center   |   교차축 방향 중앙 기준 정렬   |
|   baseline   |   플렉스 아이템 baseline 기준 정렬   |
==align-content 속성==도 동일 사용, flex-wrap 속성 때문에 플렉스 아이템이 두 줄 이상일 경우에만
각각 정렬하고자 할 시에 ==flex-self 속성== 이용

### 7.2 그리드 레이아웃으로 2차원 레이아웃 설계하기
2차원 방식으로 레이아웃을 설계 가능하도록 고안된 스타일 속성

- 그리드 레이아웃 살펴보기
```MarkDown
- 행(row) : 그리드 레이아웃에서 가로줄 의미
- 열(col) : 그리드 레이아웃에서 세로줄 의미
- 그리드 셀(grid cell) : 행과 열이 만나 이루어지는 하나의 공간
- 그리드 갭(grid gap) : 그리드 셀과 셀 사이 간격
- 그리드 아이템(grid item) : 그리드 셀 안에서 표현되는 콘텐츠
- 그리드 라인(grid line) : 그리드 행과 열을 그리는 선
- 그리드 넘버(grid number) : 그리드 라인에 붙는 번호
- 그리드 컨테이너(grid container) : 그리드 레이아웃의 전체 내용을 담은 최상위 부모요소
```

< 기본 예제 코드 >
```HTML
<head>
	...
	<link href = "grid-basic.css" rel = "stylesheet">
</head>
<body>
	<div class = "grid-container">
		<div class = "grid-item">item-1</div>
		<div class = "grid-item">item-2</div>
		<div class = "grid-item">item-3</div>
		<div class = "grid-item">item-4</div>
	</div>
</body>
```
```CSS
.grid-item{
	color:white;
	background-color:#ff5252;
}
.grid-item:nth-chile(2n){
	background-color:#bf5e5e;
}
```

- 그리드 레이아웃의 기본 속성
기본적으로 display 속성값을 grid 혹은 inline-grid로 지정하는 것으로 시작
```CSS
/*기본 형식*/
display:grid; /*inline-grid*/
```
속성값의 개념은 flex와 동일

==grid-template-column, grid-template-rows 속성== : 행과 열을 생성, 지정하여 그리드 셀 생성
```CSS
grid-template-column:<1열값> <2열값> ...;
grid-template-rows:<1행값> <2행값> ...;

/*응용*/
grid-template-columns:100px auto; /*auto 속성값을 이용해 1열값에 맞춤지정*/
grid-template-colums:repeat(2, 100px); /*repaet 함수를 이용해 100px 100px와 동일시*/
grid-template-colums:minmax(10px, 100px); /*minmax 함수를 이용해 최소,최대값 지정*/
grid-template-colums:repeat(2, minmax(10px, 100px)); /*중복 사용 가능*/
```

==row-gap, column-gap 속성== : 행과 행, 열과 열 사이 간격 지정
```CSS
row-gap:<크기>;
column-gap:<크기>;
```

- 그리드 레이아웃의 정렬 속성
==align-items, align-self 속성== : 그리드 셀의 높이가 아이템보다 큰 경우 각 그리드 셀의 세로 방향 정렬
```CSS
align-items:<속성값>;
```
	
|   속성값   |   설명   |
|:-----|:-----|
|   stretch   |  그리드 아이템이 셀을 꽉 채우도록 크기조정    |
|  start    |   그리드 아이템을 셀의 맨 위 배치   |
|    center  |   그리드 아이템을 셀 세로방향 중간 배치   |
|   end   |  그리드 아이템 셀 맨 아래 배치    |
각각 정렬하고자 할 시에 ==grid-self 속성== 이용

==justify-items, justify-self 속성== : 그리드 아이템을 각 셀의 가로 방향 정렬
```CSS
justify-items:<속성값>;
```
속성값은 ==align-items==와 동일

==placs-items, place-self 속성== : 위 두 속성을 한번에 사용 가능한 단축 속성
```CSS
place-items:<align-items> <justify-items>;
```

- 그리드 레이아웃의 배치 속성
==grid-template-areas, grid-areas 속성== : 그리드 레이아웃의 행과 열의 이름 지정 후 이름 아이템 배치
```CSS
.grid-container{
	display:grid;
	grid-template-areas:
	"header header header"
	"sidebar content content"
	"footer footer footer"
}
#header{
	grid-area:header;
}
#sidebar{
	grid-area:sidebar;
}
#content{
	grid-area:content;
}
#footer{
	grid-area:footer;
}
```

==grid-column-start, grid-column-end, grid-row-start, gird-row-end 속성== : 그리드 넘버를 이용한 열 시작과 종료 위치 지정
```CSS
.grid-container{
	display:grid;
	grid-template-columns:100px 100px 100px;
	grid-template-rows:100px 100px 100px;
}
.grid-item:nth-child(1){
	grid-column-start:1;
	grid-column-end:3;
}
.grid-item:nth-child(2){
	grid-column-start:3;
	grid-column-end:4;
}
.grid-item:nth-child(3){
	grid-column-start:2;
	grid-column-end:4;
}
.grid-item:nth-child(4){
	grid-column-start:2;
	grid-column-end:4;
	grid-row-start:2;
	grid-row-end:4;
}
```

==grid-column, grid-row 속성== : 위 열과 행 관련 속성을 한번에 사용 가능한 단축 속성
```CSS
grid-column:<start> <end>;
grid-row:<start> <end>;
```

### 7.3 반응형 웹을 위한 미디어 쿼리 사용하기

- 미디어 쿼리란
사이트에 접속하는 미디어 타입과 특징, 해상도에 따라 각기 다른 스타일 속성 적용
개발자 도구의 ==Toggle Device toolbar==를 통해 미리보기 가능

- 뷰포트 알아보기
웹 페이지가 접속한 기기에서 보이는 실제 영역의 크기
기존 지정 해상도 때문에 각기 다른 해상도에서 보여지는 괴리감을 제거
```CSS
<meta name = "viewport" content = "width=device-width, initial-scale=1.0">
```

- 미디어 쿼리의 기본 문법
```CSS
@media <not|only> <mediatype> and (<media feature>) <and|or|not> (<media feture>){
	/*CSS 코드*/
}
```

==not/only== : not은 모든 조건 부정, only는 미디어쿼리 지원 기기만 해석

==mediatype== : 미디어 쿼리가 적용될 타입 명시, 생략 가능(all로 인식), 생략X -> 뒤에 and연산자
	
|  타입    |  설명    |
|:-----|:-----|
|   all   |  모든 기기    |
|  print    |   인쇄 장치   |
|  screen    |   컴퓨터 화면 장치 or 스마트 기기   |
|   speech   |   보조 프로그램(웹 페이지를 소리내어 읽어주는 장치)   |

==media feature== : 미디어 쿼리가 적용될 조건 명시
	
|  조건    |   값   |    설명  |
|:-----|:-----|:-----|
|   min-width   |   <화면 너비>   |    미디어 쿼리 적용 최소 너비  |
|   max-width  |   <화면 너비>   |   미디어 쿼리 적용 최대 너비   |
|   orientation   |  portrait   |   세로 모드, 뷰포트 세로 높이가 가로보다 큰 경우   |
|   orientation   |  landscape    |   가로 모드, 뷰포트 가로 너비가 세로보다 큰 경우   |

