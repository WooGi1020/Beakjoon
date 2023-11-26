### 6.4 배경 속성으로 요소의 배경 설정하기

- background-color 속성
	요소의 배경에 색상을 입힐 때 사용
	```CSS
	background-color:<색상값>;

	/*예시*/
	div{
		width:100px;
		height:100px;
		background-color:red;
	}
```

- background-image 속성
	요소의 배경에 이미지를 삽입할 때 사용
	```CSS
	background-image:url('이미지 경로');

	/*예시*/
	div{
		width:160px;
		height:120px;
		background-image:url('이미지 경로');
	}
```
	< 주의사항 >
	1. 요소의 배경크기 작성
	2. 이미지의 크기를 배경 크기와 맞출것!

- background-repeat 속성
	요소의 배경 크기가 삽입 이미지보다 클 경우의 반복되는 특성을 변경 가능
	```CSS
	background-repeat:<속성값>;

	/*예시*/
	div{
		width:320px;
		height:120px;
		background-image:url('이미지 경로');
		background-repeat:non-repeat; /*reapeat, round, space*/
	}
```

- background-size 속성
	요소의 배경 크기가 이미지보다 작을 경우 이미지 크기 지정 처리
	```CSS
	background-size:<속성값>;

	/*예시*/
	background-size:auto; /*cover, contain, <직접 지정>*/
```

- background-position 속성
	배경  요소 삽입 이미지 크기 지정
	```CSS
	background-position:<x축 위치> <y축 위치>;
	```
	
|  위치    |   속성값   |  설명    |
|:-----|:-----|:-----|
|   x   |  left, center, right    |  x축(가로) 방향 위치 지정    |
|   y   |  top, center, bottom    |     y축(세로) 방향 위치 지정  |
|    공통  |    px, rem, em, &  |   위치 직접지정   |
	-> 한가지 속성만도 사용 가능, 하나만 사용 시 x축지정, y축은 자동 center 지정

- background-attachment 속성
	스크롤 시 요소 삽입 이미지의 작동 방식 지정
	```CSS
	background-attachment:<속성값>;
```
	
|  속성값    | 설명     |
|:-----|:-----|
|   local   |   삽입 이미지가 요소, 웹브라우저에서 모두 스크롤   |
|   scroll   |  삽입 이미지가 요소에선 고정, 웹브라이저에선 스크롤    |
|  fixed    |    삽입 이미지가 요소, 웹브라우저에서 모두 고정  |

- background 속성으로 한번에 지정하기
	위의 background 관련 속성을 한번에 지정가능
	```CSS
	background:<color 속성값> <image 속성값> <repeat 속성값> <position 속성값/size 속성값
	> <attachment 속성값>

	/*예시*/
	/*한번에 지정하기X*/
	div{
		background-color:red;
		background-image:url('이미지 경로');
		background-repeat:no-repeat;
		background-position:center;
		background-size:100% 100%;
		background-attachment:fixed;
	}
	/*한번에 지정하기O*/
	div{
		background:red url('이미지 경로') no-repeat center/100% 100% fixed; /*순서대로*/
	}
```

---
### 6.5 위치 속성으로 HTML 요소 배치하기
CSS는 HTML 요소를 ==기본 흐름==에서 벗어나 원하는 곳에 배치할 수 있게 하는 속성이 존재(위치 속성)

- position 속성
	HTML 요소를 좌표값에 따라 배치하는 경우
	```CSS
	position:<속성값>;
```
	
|  속성값  | 설명     |
|:-----|:-----|
|  static    |   요소를 기본 흐름에 따라 배치   |
|    relative  |    요소를 기본 흐름에 따라 배치, 좌표 속성 사용가능|
|   absolute   |   요소를 기본 흐름에서 벗어나 절대적 좌표 위치에 따라 배치   |
|   fixed   |   absolute 속성과 동일, 하지만 스크롤해도 해당 위치에 고정  |
|   sticky   |   static 값과 동일, 하지만 지정 좌표의 임계점 도달 시 fixed처럼 고정   |
	static : 아무런 변화X
	relative : 좌표 속성(top, right, bottom, left -> 좌표계의 원리)를 이용해 배치
	absolute : relative와 비슷하나 기준점이 ==웹 브라우저의 왼쪽 모서리==로 변경(margin의 여백X)
	fixed : fixed 값으로 설정한 요소가 스크롤 시에도 화면에 고정
	sticky : 스크롤시 움직이나 웹 브라우저의 임계점에 도달 시 고정
	z-index 속성 : position 속성으로 배치한 요소의 z축 위치(앞뒤) 결정 가능(속성값 : 정수값)

- float 속성
	```CSS
	float:<속성값>;
```
	
|   속성값   |  설명    |
|:-----|:-----|
|  none    |   float 속성 적용X   |
|   left   |   대상 요소를 공중에 띄워 왼쪽 배치, 다음 요소 자연스럽게 배치   |
|   right   |  대상 요소를 공중에 띄워 오른쪽 배치, 다음 요소 자연스럽게 배치   |
	블록 성격 요소를 인라인 요소처럼 배치하기
	 -> ==float 속성의 작동 원래이용==
```CSS
	<style>
		div{
			color:white;
		}
		.red-box{
			bacground-color:red;
			/*float 속성을 활용해 요소를 겹친것처럼 보이게*/
			float:left; /*red-box 요소가 공중에 떠 배치됨*/
		}
		.blue-box{
			background-color:blue;
		}
	</style>
	...
	<body>
		<div class = "red-box">red-box</div>
		<div class = "blue-box">blue-box</div>
	</body>
```
	< 주의점 >
	1. float 속성의 적용 대상이 원래 위치를 보장받지 못함
	2. float 속성을 적용한 요소를 부모요소가 제대로 인식하지 못함
	-> clear 속성과 overflow 속성을 사용해 해결 가능

- clear 속성
	float 속성을 해제하기 위해 사용
	```CSS
	clear:<속성값>;
```
	
|   속성값   |    설명  |
|:-----|:-----|
|  left    |   float 속성값의 left 해제   |
|    right  |   float 속성값의 right 해제   |
|   both   |   float 속성값의 left, right 모두 해제   |
	==float 속성이 마지막으로 적용된 요소 다음에 사용!==

---
### 6.6 전환 효과 속성 적용하기

- 전환이란
	==전환==은 한 요소에 적용된 스타일을 다른 속성값으로 변하게 하는 것
	```CSS
	:hover 와 같은 속성변경 선택자의 역할과 같이 전환 효과를 직접 지정
```

- tansition-property 속성
	전환 효과를 적용할 대상 속성 지정
	```CSS
	transition-property:<속성값>;
```
	
|  속성값    |   설명   |
|:-----|:-----|
|  none    |  전환효과 지정X    |
|   all   |   모든 속성 전환효과 대상 지정   |
	
```CSS
/*ex*/
tasition-property:background-color; /*전환 효과 지정*/
tasition-property:background-color, color, width; /*전환 효과 여러 속성 지정*/
tasition-property:all; /*전체 지정*
```

- transition-duration 속성
	전환 효과의 지속 시간 설정
	```CSS
	trasition-duration:<시간>;

	/*예시*/
	transition-duration:1s; /*전환 효과가 1초간 발생*/
```

- trasition-delay 속성
	전환 효과의 발생 지연
	```CSS
	trasition-delay:<시간>;

	/*예시*/
	transition-delay:1s; /*전환 효과가 1초간 지연*/
```

- transition-timing-function 속성
	전환 효과의 진행 속도 지정
	```CSS
	transition-timing-function:<지정키워드>|<cubic-bezier()>;
```
	
|   속성값   |  설명    |
|:-----|:-----|
|   linear   |   처음과 마지막 속도 일정   |
|    ease  |  처음 속도 빠름, 중간부터 점차 감소    |
|   ease-in   |   처음 속도 느림, 완료까지 점차 증가   |
|    ease-out  |  처음 속도 빠름, 완료까지 점차 감소    |
|  ease-in-out    |  처음 속도 느림, 점차 증가 후 감소    |
|   cubic-bezier(p1,p2,p3,p4)   |   사용자 정의 속도 지정   |

- transition 속성으로 한번에 지정하기
	단축속성인 transtition 속성으로 한번에 지정 가능
	```CSS
	transition:<property>, <duration>, <timing-function>, <delay>;
```
