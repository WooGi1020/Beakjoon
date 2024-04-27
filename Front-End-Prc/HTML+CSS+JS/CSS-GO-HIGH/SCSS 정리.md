### SCSS란
---
✏️SCSS는 CSS 전처리기 라이브러리 중 하나로, 컴파일을 통해 CSS의 확장 문법을 다룰 수 있다.
```scss
// 기존 CSS에선 불가능한 여러가지 문법을 지원
.container {
  width: 50px;
  .box { 
    color: red;
  }
}
```

### SCSS 데이터 종류
---

| 데이터      | 설명                             | 예시                                               |
| -------- | ------------------------------ | ------------------------------------------------ |
| Numbers  | 숫자                             | `1`, `.82`, `20px`, `2em`...                     |
| Strings  | 문자                             | `bold`, `relative`, `"/images/a.png"`, `"dotum"` |
| Colors   | 색상 표현                          | `red`, `blue`, `#FFFF00`, `rgba(255,0,0,.5)`     |
| Booleans | 논리                             | `true`, `false`                                  |
| Nulls    | 아무것도 없음                        | `null`                                           |
| Lists    | 공백이나 `,`로 구분된 값의 목록            | `(apple, orange, banana)`, `apple orange`        |
| Maps     | Lists와 유사하나 값이 `Key: Value` 형태 | `(apple: a, orange: o, banana: b)`               |
### 중첩
---
✏️SCSS는 중첩(Nesting) 기능을 지원한다.
```scss
.container {
  width: 100%;
  .box {
    padding: 20px;
  }
}
```

### Ampersand(&)
---
✏️중첩문 내부에서 "&" 키워드는 부모 선택자를 의미한다.
```scss
.container {
  width: 100%;
  .box {
    padding: 20px;
    &:hover{
	    background-color: red;
    }
  }
}
// 응용
.fs {
  &-small { font-size: 12px; }
  &-medium { font-size: 14px; }
  &-large { font-size: 16px; }
}
```

### @at-root
---
✏️중첩문 안의 변수를 사용하고 싶지만 중첩문에서 벗어난 선택자를 다룰 때 사용한다.
```scss
.container {
  $w: 10px;
  $h: 5px;
  .box1 {
    width: $w;
    height: $h;
  }
  @at-root .box2 {
    width: $w;
    height: $h;
  }
}

// postCSS로 나타낼 시
.container .box1{
	width: 10px;
	height: 5px;
}
.boxs2 {
	width: 10px;
	height: 5px;
}
```

### 중첩된 속성
---
✏️marign-, border- 등과 같은 동일한 네임 스페이스를 가질 시에 간략하게 사용한다.
```scss
.box {
  font: {
    weight: bold;
    size: 10px;
    family: sans-serif;
  };
  margin: {
    top: 10px;
    left: 20px;
  };
  padding: {
    bottom: 40px;
    right: 30px;
  };
}
```

### 변수
---
✏️반복적으로 사용되는 값은 변수로 지정 가능하다.
```scss
$color-primary: #e96900;
$url-images: "/assets/images/";
$w: 200px;

.container {
  width: $w;
  margin-left: $w;
  background: $color-primary url($url-images + "bg.jpg");
}
```

🚫변수는 블록 스코프이므로, 블록 내에서 선언한 변수는 밖에서 사용할 수 없다. 
```scss
.container1 {
  $color: #111;
  background: $color;
}
// 에러
.container2 {
  background: $color;
}
```

✅변수는 "재할당"이 가능하다. 
```scss
$new-color = $color-primary
```

➡️변수 키워드 : !global, !default
```scss
// !global
.container1 {
  $color: #111;
  background: $color !global;
}
// 정상적으로 동작
.container2 {
  background: $color;
}

// !default
$color-primary: red;
.box {
  $color-primary: blue !default;
  background: $color-primary;
}
```

### #{} (문자 보간)
---
✏️{}를 이용해 변수값을 넣을 수 있다.
```scss
$family: unquote("Droid+Sans");
@import url("http://fonts.googleapis.com/css?family=#{$family}");
// postCSS
@import url("http://fonts.googleapis.com/css?family=Droid-Sans");
```

### 가져오기
---
✏️@import 를 통해 외부의 SCSS 파일을 가져올 수 있고, 가져온 파일의 변수나 Mixin 등을 사용 가능하다.
```
< CSS @import 규칙으로 컴파일되는 사항 >
1. 파일 확장자가 css인 경우
2. 파일 이름이 http://로 시작할 경우
3. url()이 붙은 경우
4. 미디어쿼리가 있는 경우
```

✅","(콤마)를 사용하여 여러 파일을 한줄에 작성해 가져올 수 있다.
```scss
@import "header", "footer";
```

### 파일 분할
---
✏️파일 이름 앞에 "\_"(언더바)를 붙여 @import 사용 시 .css로 컴파일하지 않는다.
```bash
# 컴파일 전
|- scss
|   |- _header.scss
|   |- _side-menu.scss
|   └─ main.scss
```
```scss
@import "header", "side-menu";
```
```bash
# 컴파일 시
|- scss
|   |- css
|   |   └─ main.css # main + header + side-menu
|   |- _header.scss
|   |- _side-menu.scss
|   └─ main.scss 
```

### 연산
---
✏️기본적인 연산 기능을 지원한다.

< 산술 연산자 >

|종류|설명|주의사항|
|:-:|:-:|:-:|
|`+`|더하기||
|`-`|빼기||
|`*`|곱하기|하나 이상의 값이 반드시 숫자(Number)|
|`/`|나누기|오른쪽 값이 반드시 숫자(Number)|
|`%`|나머지|
< 비교 연산자 >

|종류|설명|
|:-:|:-:|
|`==`|동등|
|`!=`|부등|
|`<`|대소 / 보다 작은|
|`>`|대소 / 보다 큰|
|`<=`|대소 및 동등 / 보다 작거나 같은|
|`>=`|대소 및 동등 / 보다 크거나 같은|
< 논리 연산자 >

|종류|설명|
|:-:|:-:|
|`and`|그리고|
|`or`|또는|
|`not`|부정|

### 숫자
---
➡️상대적 단위 연산 : 일반적으로 px 단위 연산을 수행하나, 단위가 섞인다면 calc()를 사용한다.
```scss
width: 20% - 20px;  // 에러
width: calc(20% - 20px);  // 연산 가능
```

➡️나누기 연산 시 주의 : "/" 기호는 숫자를 분리하는 기호로 사용되므로, "/"를 나누기 기호로 사용하려면 조건을 충족해야한다.
- 값 or 값의 일부가 변수에 저장되거나 함수에 의해 반환되는 경우
- 값이 ()로 묶인 경우
- 값이 다른 산술 표현식의 일부인 경우
```scss
div {
  $x: 100px;
  width: $x / 2;  // 변수에 저장된 값을 나누기
  height: (100px / 2);  // 괄호로 묶어서 나누기
  font-size: 10px + 12px / 3;  // 더하기 연산과 같이 사용
}
```

### 문자
---
✏️문자 연산에는 "+" 기호가 사용된다.
```scss
div::after {
  content: "Hello " + World;
  flex-flow: row + "-reverse" + " " + wrap
}
```

### 색상
----
✏️색상 연산이 가능하다.
```scss
div {
  color: #123456 + #345678;
  // R: 12 + 34 = 46
  // G: 34 + 56 = 8a
  // B: 56 + 78 = ce
  background: rgba(50, 100, 150, .5) + rgba(10, 20, 30, .5);
  // R: 50 + 10 = 60
  // G: 100 + 20 = 120
  // B: 150 + 30 = 180
  // A: Alpha channels must be equal
}

// RGBA의 경우 A값은 계산X, A가 동일해야 RGB의 연산 가능, A값을 연산하고 싶다면 아래 사용
$color: rgba(10, 20, 30, .5);
div {
  color: opacify($color, .3);  // 30% 더 불투명하게 / 0.5 + 0.3
  background-color: transparentize($color, .2);  // 20% 더 투명하게 / 0.5 - 0.2
}
```

### Mixin (재활용)
---
✏️Mixin을 통해 CSS 선언 그룹을 정의하여 재사용이 가능하다. (매우 중요!!!)
```scss
// 선언
@mixin 믹스인이름 {
  스타일;
}
// 사용
@include 믹스인이름;

// 예시
@mixin large-text {
  font: {
    size: 22px;
    weight: bold;
    family: sans-serif;
  }

h1{
	@include large-text;
}
```

✅Mixin은 인수를 가질 수 있다. (함수의 기능)
```scss
@mixin 믹스인이름($매개변수) {
  스타일;
}
@include 믹스인이름(인수);

// 예시
@mixin dash-line($width, $color) {
  border: $width dashed $color;
}

.box1 { @include dash-line(1px, red); }
.box2 { @include dash-line(4px, blue); }

// 인수의 기본값 또한 설정 가능
@mixin dash-line($width: 1px, $color: black) {
  border: $width dashed $color;
}

.box1 { @include dash-line; }
.box2 { @include dash-line(4px); }
```

✅Mixin은 키워드 인수를 지원한다. (인수의 네이밍 커스텀 및 사용)
```scss
@mixin position(
  $p: absolute,
  $t: null,
  $b: null,
  $l: null,
  $r: null
) {
  position: $p;
  top: $t;
  bottom: $b;
  left: $l;
  right: $r;
}

.absolute {
  // 키워드 인수로 설정할 값만 전달
  @include position($b: 10px, $r: 20px);
}
.fixed {
  // 인수가 많아짐에 따라 가독성을 확보하기 위해 줄바꿈
  @include position(
    fixed,
    $t: 30px,
    $r: 40px
  );
}
```

✅Mixin은 가변인수를 지원한다. (전달할 인수의 개수가 불확실 할 경우)
```scss
@mixin 믹스인이름($매개변수...) {
  스타일;
}

@include 믹스인이름(인수A, 인수B, 인수C);

// 예시
// 인수를 순서대로 하나씩 전달 받다가, 3번째 매개변수($bg-values)는 인수의 개수에 상관없이 받음
@mixin bg($width, $height, $bg-values...) {
  width: $width;
  height: $height;
  background: $bg-values;
}

div {
  // 위의 Mixin(bg) 설정에 맞게 인수를 순서대로 전달하다가 3번째 이후부터는 개수에 상관없이 전달
  @include bg(
    100px,
    200px,
    url("/images/a.png") no-repeat 10px 20px,
    url("/images/b.png") no-repeat,
    url("/images/c.png")
  );
}
```

✅@content를 통해 해당 부분에 원하는 스타일 블록 전달이 가능하다.
```scss
@mixin 믹스인이름() {
  스타일;
  @content;
}

@include 믹스인이름() {
  // 스타일 블록
  스타일;
}

// 예시
@mixin icon($url) {
  &::after {
    content: $url;
    @content;
  }
}
.icon1 {
  // icon Mixin의 기존 기능만 사용
  @include icon("/images/icon.png");
}
.icon2 {
  // icon Mixin에 스타일 블록을 추가하여 사용
  @include icon("/images/icon.png") {
    position: absolute;
  };
}
```

### 확장
---
✏️특정 선택자가 다른 선택자의 스타일을 전부 가지고 있어야하는 경우 사용한다.
```scss
@extend 선택자

// 예시
.btn {
  padding: 10px;
  margin: 10px;
  background: blue;
}
.btn-danger {
  @extend .btn;
  background: red;
}
```

### 함수
---
✏️Mixin과 비슷한 개념으로 커스텀 함수를 정의하여 사용 가능하다. (Mixin은 값을, 함수는 return 값을 반환)
```scss
// Mixins
// 정의
@function 함수이름($매개변수) {
  @return 값
}
// 사용
함수이름(인수)

// 예시
$max-width: 980px;

@function columns($number: 1, $columns: 12) {
  @return $max-width * ($number / $columns)
}

.box_group {
  width: $max-width;

  .box1 {
    width: columns();  // 1
  }
  .box2 {
    width: columns(8);
  }
  .box3 {
    width: columns(3);
  }
}
```
🚫기존의 내장 함수와 충돌할 수 있어 함수 이름에 별도의 접두어를 붙히는 것이 좋다.

### 조건과 반복
---
➡️if 함수 : 조건의 불린 값에 따라 반환값이 달라진다.
```scss
$width: 555px;
div {
  width: if($width > 300px, $width, null);
}
```

➡️@if : if문과 유사하나 조금 더 복잡한 조건문 작성이 가능하다.
```scss
// @if
@if (조건) {
  /* 조건이 참일 때 구문 */
}

// @if @else
@if (조건) {
  /* 조건이 참일 때 구문 */
} @else {
  /* 조건이 거짓일 때 구문 */
}

// @if @else if
@if (조건1) {
  /* 조건1이 참일 때 구문 */
} @else if (조건2) {
  /* 조건2가 참일 때 구문 */
} @else {
  /* 모두 거짓일 때 구문 */
}

// @if 사용 시 () 생략 가능
$color: orange;
div {
  @if $color == strawberry {
    color: #FE2E2E;
  } @else if $color == orange {
    color: #FE9A2E;
  } @else if $color == banana {
    color: #FFFF00;
  } @else {
    color: #2A1B0A;
  }
}

// and, or, not 사용 가능
@function limitSize($size) {
  @if $size >= 0 and $size <= 200px {
    @return 200px;
  } @else {
    @return 800px;
  }
}

div {
  width: limitSize(180px);
  height: limitSize(340px);
}
```

➡️@for : 스타일을 반복적으로 출력한다. ("through" 사용과 "to" 사용 형식으로 나뉨)
```scss
// through
// 종료 만큼 반복
@for $변수 from 시작 through 종료 {
  // 반복 내용
}

// to
// 종료 직전까지 반복
@for $변수 from 시작 to 종료 {
  // 반복 내용
}

// 예시 (변수는 관례상 $i 사용)
// 1부터 3번 반복
@for $i from 1 through 3 {
  .through:nth-child(#{$i}) {
    width : 20px * $i
  }
}

// 1부터 3 직전까지만 반복(2번 반복)
@for $i from 1 to 3 {
  .to:nth-child(#{$i}) {
    width : 20px * $i
  }
}
```

➡️ @each : List와 Map 데이터 반복 시 사용한다. (for in 문과 유사)
```scss
@each $변수 in 데이터 {
  // 반복 내용
}

// 예시
$fruits: (apple, orange, banana, mango);

.fruits {
  @each $fruit in $fruits {
    li.#{$fruit} {
      background: url("/images/#{$fruit}.png");
    }
  }
}
```

➡️@while : 조건이 false로 평가될 때까지 내용을 반복한다.
```scss
@while 조건 {
  // 반복 내용
}

// 예시
$i: 6;

@while $i > 0 {
  .item-#{$i} {
    width: 2px * $i;
  }
  $i: $i - 2;
}
```