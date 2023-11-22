
### 5.1 기본 선택자 사용하기

- 전체 선택자
	모든 요소를 한번에 선택자로 지정
	```CSS
	*{/*CSS 코드*/}
```

- 태그 선택자
	HTML 태그명으로 선택자를 지정
	태그명과 ==일치하는 모든 요소==를 한번에 선택
	```CSS
	태그명{/*CSS 코드*/}
	
	/*예시*/
	p{
		color:blue;
	}
```

- 아이디 선택자
	HTML 태그에서 사용하는 id 속성값을 사용해 선택
	==# 기호==를 사용하여 구분
	```CSS
	#id속성값{/*CSS*/}
	
	/*예시*/
	<style>
		#title{
			color:yellow;
		}
	</style>
	...
	<h1 id = "title">사용자 지정</h1> /*이 부분의 색상이 yellow로 적용*/
```

- 클래스 선택자
	HTML 태그에서 사용하는 class 속성값을 사용해 선택
	속성값을 중복할 수 있는 특징을 통해 여러 곳에서 사용 가능
	==. 기호==를 통해 구분
	```CSS
	.class속성값{/*CSS 코드*/}

	/*예시*/
	<style>
		.red{
			color:yellow;
		}
		.blue{
			color:blue;
		}
	</style>
	...
	<h1 class = "red">사용자 지정</h1> /*이 부분의 색상이 red로 적용*/
	<p class = "blue">사용자 지정</p> /*이 부분의 색상이 blue로 적용*/
```

- 기본 속성 선택자
	HTML 태그에서 사용 가능한 속성과 값을 사용해 지정
	==다른 선택자와 함께 사용 가능==
	```CSS
	[속성]{/*CSS 코드*/}
	[속성=값]{/*CSS 코드*/}

	/*예시*/
	<style>
		a[href]{
			color:red;
			display:block;
		}
		a[target="_blank"]{
			color:blue;
			display:block;
		}
	</style>
	...
	<a href = "#">사용자 지정</a> /*이 부분의 색상이 red로 적용*/
	<a href = "#" target = "_blank">사용자 지정</a> /*이 부분의 색상이 blue로 적용*/
```

---

### 5.2 조합 선택자 사용하기
==선택자의 의미를 풍부하게!==

- 그룹 선택자
	여러 선택자를 하나로 그룹지을 때 사용
	==, 기호==로 구분
	```CSS
	선택자1, 선택자2, ... , 선택자n{/*CSS 코드*/}

	/*예시*/
	p, #title, .red{
		color:red;
	}
```

- 자식 선택자
	부모 요소 하위의 자식 요소에 스타일 적용 시 사용(2개 이상 선택자 사용)
	==기호 > 로 구분==
	```CSS
	부모 선택자 > 자식 선택자{/*CSS 코드*/}

	/*예시*/
	.box > p{
		color:red;
	}
```

- 하위 선택자
	선택자의 범위를 특정 부모의 하위 요소로 한정(2개 이상 선택자 사용)
	==공백으로 구분==
	```CSS
	선택자1 선택자2 선택자3 ...{/*CSS 코드*/}

	/*예시*/
	<style>
		div p{
			color:red;
		}
	</style>
	...
	<div>
		<p>사용자 지정</p> /*이 부분만 red로 적용*/
		<a>사용자 지정<a>
	</div>
```

- 인접 형제 선택자
	앞에서 지정한 선택자 바로 다음 형제 요소를 지정(2개 이상 선택자 사용)
	==+ 기호로 구분==
	```CSS
	이전 선택자 + 대상 선택자{/*CSS 코드*/}

	/*예시*/
	<style>
		h1 + h2{
			color:red;
		}
	</style>
	...
	<h1>사용자 지정</h1>
	<h2>사용자 지정</h2>
```

- 일반 형제 선택자
	이전 선택자 뒤에 오는 모든 형제 요소를 지정(2개 이상 선택자 사용)
	==~ 기호로 구분==
	```CSS
	이전 선택자 ~ 대상 선택자{/*CSS 코드*/}

	/*예시*/
	<style>
		h1 ~ h3{
			color:red;
		}
	</style>
	...
	<h1>사용자 지정</h1>
	<h2>사용자 지정</h2>
	<h3>사용자 지정</h3>
```

---

### 5.3 가상 요소 선택자 사용하기

명시적 구성 요소는 아니나, 존재하는 것과 같이 취급해 선택하는 지정 방법
==:: 기호==, ==기준 선택자==를 이용해 사용(기준 선택자 생략 시 전체 선택자와 동일하게 적용)
```CSS
기준 선택자 :: 가상요소 선택자{/*CSS 코드*/}

/*실무 활용 예시*/
::before -> 콘텐츠 앞의 공간을 선택
::after -> 콘텐츠 뒤의 공간을 선택

	<style>
		p::before{
			content:'<before>'
		}
		p::after{
			content:'<after>'
		}
	</style>
	...
	<p>사용자 지정</p>

- 실행결과
	<before>사용자 지정<after>
```

---

### 5.4 가상 클래스 선택자 사용하기

- 링크 가상 클래스 선택자
	==요소의 상태를 이용==, 선택자를 지정
```CSS
기준 요소 : 가상 클래스 선택자{/*CSS 코드*/}

/*실무 활용 예시*/
:link -> 한번도 방문하지 않은 링크일 때 선택
:visited -> 한번이라도 방문한 링크일 때 선택

	<style>
			a:link{
				color:orange;
			}
			a:visited{
				color:green
			}
		</style>
		...
		<a href="#">사용자 지정</a>
```

- 동적 가상 클래스 선택자
	==사용자의 행동==에 따라 ==동적으로 변하는 상태== 이용
	```CSS
	/*예시*/
	:hover -> 요소에 마우스를 올릴 시 해당 태그가 선택자로 지정
	:active -> 요소를 마우스로 클릭하는 동안 태그가 선택자로 지정

	<style>
		p:hover{
			color:red;
		}
	</style>
	
	<style>
		button:actiove{
			color:red;
		}
	</style>
```

- 입력 요소 가상 클래스 선택자
	입력 요소의 ==특정 상태==를 이용, 선택자로 지정
	```CSS
	/*예시*/
	:focus -> 입력 요소에 커서 활성화 시 선택자로 지정
	:checked -> 체크박스 표시 시 선택자로 지정
	:disabled -> 상호작용 요소 비활성화 시 선택자로 지정
	:enabled -> 상호작용 요소 활성화 시 선택자로 지정

	<style>
		input:focus{
			color:red;
		}
	</style>

	<style>
		input:checked + label{
			color:red;
		}
	</style>

	<style>
		input:disabled,
		button:disabled{
			background-color:#ccc;
		}
	</style>
	...
	<input type = "text" disabled>
	<button disabled>버튼</button>
	/*enabled는 반대이므로 생략*/
```

- 구조적 가상 클래스 선택자
	==태그 사용 위치==, ==다른 태그와의 관계==에 따라 선택
	```CSS
	E:first-child -> E요소의 첫번째 자식 요소 선택자로 지정
	E:last-child -> E요소의 마지막 자식 요소 선택자로 지정
	E:nth-child(n) -> E요소가 부모 요소의 자식 요소 중 n번째 순서일 경우 선택
	E:nth-last-child(n) -> 위와 동일(역순)
	E:nth-of-type(n) -> 부모의 자식 요소 중 n번째로 등장하는 E요소 선택
	E:nth-last-of-type(n) -> 위와 동일(역순)
	E:first-of-type -> 부모의 자식 요소 중 첫번째로 등장하는 E요소 선택
	E:last-of-type -> 위와 동일(역순)
```

==이러한 선택자들을 다양하게 조합하여 사용하는 것이 효율적!!==
