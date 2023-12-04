---
tistoryBlogName: coding-woogi
tistoryTitle: 6장_CSS 필수 속성 다루기_3
tistoryVisibility: "3"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPublished: 2023-11-29T00:25
tistoryPostId: "23"
tistoryPostUrl: https://coding-woogi.tistory.com/23
---
### 6.7 애니메이션 속성으로 전환 효과 제어하기
정지된 이미지를 ==연속적==으로 보여주어 움직이는 것처럼 적용

- 키 프레임 정의하기
애니메이션 효과를 전환 효과에 부여하기 위해 키 프레임을 정의
```CSS
/*기본 형식*/
@keyframes <키 프레임명>{
	0%{/*CSS 코드*/}
	n%{/*CSS 코드*/}
	100%{/*CSS 코드*/}
}

/*예시*/
@keyframes bgchange{
	0%{background-color:red;} /*시작 시점의 배경은 빨간색*/
	/*25%, 50% 등과 같이 중간 지점도 얼마든지 정의가능*/
	100%{background-color:blue;} /*종료 시점의 배경은 파란색*/
}

/*위 예시와 동일한 문법*/
@keyframes bgchange{
	from{background-color:red;}
	to{background-color:blue;}
}
```

- animation-name & duration 속성
특정 요소에서 ==적용할 키 프레임명==과 애니메이션의 ==지속 시간==을 설정
```CSS
/*기본 형식*/
animation-name:<키 프레임 명>;
animation-duration:<지속 시간>;

/*예시*/
div{
	...
	animation-name:bgchange;
	animation-duration:5s;
}
@keyframes bgchange{
	0%{background-color:red;}
	100%{background-color:blue;}
}
```

- animation-delay 속성
애니메이션 실행의 지연 시간 설정
```CSS
/*기본 형식*/
animaiton-delay:<지연 시간>;

/*예시*/
animation-delay:3s;
```

- animation-fill-mode 속성
애니메이션 효과 종료 후에도 종료 시점의 상태를 유지하고자 할때 사용

|   속성값   |  상태    |    설명  |
|:-----|:-----|:-----|
|  none    |   실행 전&후   |   시작시점의 스타일 적용X 대기, 실행 전 스타일로 돌아감   |
|   forwards   |  실행 전&후    |   시작시점의 스타일 적용X 대기, 키 프레임 정의 종료시점 스타일 적용 후 대기  |
|   backwards   |   실행 전&후   |   시작시점의 스타일 적용O 대기, 실행 전 스타일 스타일로 돌아감   |
|  both    |   실행 전&후   |  시작시점의 스타일 적용O 대기,  키 프레임 정의 종료시점 스타일 적용 후 대기  |

```CSS
div{
	...
	animation-name:bgchange;
	animation-duration:5s;
	animation-fill-mode:forwards;
}
```

- animation-iteration-count 속성
애니메이션의 기본적인 1회 실행 횟수를 사용자 지정으로 변경
```CSS
/*기본 형식*/
animation-iteration-count:<횟수>;

/*예시*/
animation-iteration-count:3;
animation-iteration-count:infinite; /*무한 반복*/
```

- animation-play-state 속성
애니메이션의 재생 상태 지정(==JS와 같이 사용하는 것이 용이==)

|   속성값   |   설명   |
|:-----|:-----|
|   paused   |  애니메이션 실행 일시정지   |
|   running   |   애니메이션 실행   |

- animation-direction 속성
애니메이션의 진행 방향 지정
```CSS
/*기본 형식*/
animation-direction:<속성값>;
```

|  속성값    |    설명  |
|:-----|:-----|
|   normal   |  애니메이션 진행 방향을 키 프레임 정의 시간 순서로 진행    |
|   reverse   |  애니메이션 진행 방향을 키 프레임 정의 시간 역순으로 진행    |
|   alternate   |   애니메이션이 1회 이상 실행되면 홀수 번째를 normal, 짝수 번째를 reverse로 진행   |
|   alternate-reverse   |   애니메이션이 1회 이상 실행되면 홀수 번째를 reverse로, 짝수 번째를 normal로 진행   |

- animation 속성으로 한 번에 지정하기
단축 속성 지정
```CSS
animation:<name> <duration> <timing-function> <delay> <iteration-count>    <direction> <fill-mode> <play-state>;
```

### 6.8 변형 효과 적용하기
요소의 크기 변경, 위치 이동과 회전 등 요소 자체의 변경을 위해 사용

- transfrom 속성
요소에 특정 변형 효과 지정
```CSS
/*기본 형식*/
transform:<함수>;
```

|   함수   |   설명   |
|:-----|:-----|
|  translate(x,y)   |   요소를 현재 위치에서 x,y축만큼 이동   |
|   translateX(n)   |   요소를 현재 위치에서 n만큼 x축 이동   |
|  translateY(n)    |   요소를 현재 위치에서 n만큼 y축 이동   |
|    scale(x, y)  |  요소를 x, y축만큼 확대 or 축소    |
|scaleX(n)|요소를 n만큼 x축으로 확대 or 축소|
|scaleY(n)|요소를 n만큼 y축으로 확대 or 축소|
|skew(xdeg, ydeg)|dythfmf x, y축으로 xdeg, ydeg(각도)만큼 기울임|
|skewX(deg)|요소를 deg(각도)만큼 x축으로 기울임|
|skewY(deg)|요소를 deg(각도)만큼 y축으로 기울임|
|rotate(deg)|요소를 deg(각도)만큼 회전|

```CSS
/*예시*/
<head>
	<Style>
		div{
			width:100px;
			height:100px;
			background-color:red;
		}
	</style>
</head>
<body>
	<div></div>
</body>
q
div:hover{
	/*오른쪽으로 100px, 왼쪽으로 200px 이동*/
	transform:translate(100px, 200px);
	/*x, y축 방향으로 2배 확대*/
	transform:scale(2, 2);
	/*x, y축 방향으로 30도씩 기울임*/
	transform:skew(30deg, 30deg); 
	/*(+)값은 오른쪽, (-)값은 왼쪽으로 회전*/
	transform:rotate(30deg);
}
```

- transform-origin 속성
위의 rotate() 함수의 회전의 중심점을 사용자 임의로 변경
```CSS
/*기본 형식*/
transform-origin:<x축 위치> <y축 위치>;
```

|  축    |   속성값   |
|:-----|:-----|
|  x축  |   left, center, right   |
|   y축   |  top, center, bottom    |


### 6.9 웹 폰트와 아이콘 폰트 사용하기
텍스트 속성 연계

- 구글 폰트 적용하기
```MarkDown
1. Google Fonts 에서 원하는 글꼴 검색
2. 굵기 선택 선택 후 "Select this style" 클릭
3. 글꼴 사용법 "link 태그"와 "@import 문" 중 선택하여 사용
4. style 태그의 최상단에 붙여넣기
```

- 아이콘 폰트 적용하기
```MarkDown
1. Font Awesome 사이트의 화면 중간에 있는 CDN 주소 복사
2. 복사 코드 HTML 파일 head 태그 안에 붙여넣기
3. 원하는 아이콘 검색 후 HTML 탭의 i 태그 복사, 붙여넣기
```


