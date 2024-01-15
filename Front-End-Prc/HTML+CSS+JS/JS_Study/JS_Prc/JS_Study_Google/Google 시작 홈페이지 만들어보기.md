---
tistoryBlogName: coding-woogi
tistoryTitle: Google 시작 홈페이지 만들어보기
tistoryVisibility: "3"
tistoryCategory: "1417067"
tistorySkipModal: true
tistoryPostId: "45"
tistoryPostUrl: https://coding-woogi.tistory.com/45
---
![[내 구글.png]]
홈페이지 제작 연습 겸 Google 시작 홈페이지를 만들어보았다. 개발자 도구도 뜯어보고 직접 클릭도 해보며 이 간단해보이는 화면도 정말 디테일적이고 구현되어 있는 요소가 많다는 것을 느끼고 아직 한참 부족하다는 생각이 들었다.. 정진해야지 🙂

### 1. 헤더
처음 구글 홈페이지를 켰을 때 나오는 화면 중 최상단 부분 구현
```html
<header>
	<div class="header">
		<ul>
			<li class="google-info">
				<a href="#">Google 정보</a>
			</li>
			<li class="store">
				<a href="#">스토어</a>
			</li>
		</ul>
		<ul>
			<li class="email">
				<a href="#">Gmail</a>
			</li>
			<li class="image">
				<a href="#">이미지</a>
			</li>
			<li class="search-labs">
				<a href="#"><i class="fa-solid fa-flask"></i></a>
			</li>
			<li class="menu">
				<a href="#"><i class="fa-solid fa-bars"></i></a>
			</li>
		</ul>
	</div>
</header>
```
```CSS
.header{
    display:flex;
    justify-content:space-between;
    width:100%;
}

.header ul{
    display:flex;
    flex-direction: row;
    margin: 10px 20px;
}

.header ul li{
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    text-align:center;
}
.header ul li a{
    color: var(--letter-grey);
}
.header ul .google-info,
.header ul .store {
    font-size: 15px;
}

.header ul .email,
.header ul .image {
    font-size: 13px;
    margin-right: -3px;
}

.header ul .search-labs,
.header ul .menu {
    font-size: 20px;
    padding: 5px 12px;
}

.header ul .google-info:hover,
.header ul .store:hover,
.header ul .email:hover,
.header ul .image:hover {
    text-decoration: underline;
}

.header ul .search-labs:hover,
.header ul .menu:hover {
    background-color: var(--back-grey);
    border-radius: 50%;
}
```

### 2. 섹션
로고 이미지를 실제 구글 홈페이지의 로고 URL을 가져와 삽입하여 구현
```html
<div class="logo-container">
	<img src="https://www.gstatic.com/images/branding/
	googlelogo/svg/googlelogo_clr_74x24px.svg" alt="logo">
</div>
```
```CSS
.logo-container img{
    width:280px;
    margin-bottom: 40px;
}
```

검색창 부분 구현 + JS를 이용해 실제 검색창과 동일하게 검색 시 구글 검색 결과를 보여주게 구현
```html
<div class="search-btn">
	<i class="fa-solid fa-magnifying-glass"></i>
	<input type="text" class = "search" placeholder="Google 검색 또는 URL 입력">
	<i class="fa-solid fa-microphone"></i>
</div>
```
```CSS
.search-btn {
    display:flex;
    align-items: center;
    justify-content: center;
    position:relative;
}
.search-btn input{
    width:550px;
    height: 40px;
    border-radius: 20px;
    border:solid 1px rgba(0,0,0,0.1);
    font-size: 16px;
    padding-left: 50px;
    outline:none;
}
.search-btn input:hover{
    box-shadow: 0 1px 9px -5px; rgba(0,0,0,0.5);
}
.search-btn i:nth-child(1){
    position: absolute;
    z-index: 1;
    left:20px;
}
.search-btn i:nth-child(3){
    position: absolute;
    z-index: 1;
    right:20px;
    cursor: pointer;
}
```

addEventListener를 이용해 enterKey 메서드를 통한 키입력 요소를 받아온다음, 'Enter'키가 눌렸다면 showSearchResult() 함수를 실행, 내가 입력한 값의 실제 검색 결과 창을 URL을 통해 불러오도록 구현했다.
```js
const searchInput = document.querySelector(".search");

const showSearchResult = () => {
    let searchWord = searchInput.value;
    location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = "";
}
const enterKey = (event) => {
    if(event.code === "Enter"){
        showSearchResult();
    }
}
searchInput.addEventListener("keypress", (event) => {
    enterKey(event);
})
```
![[검색.png]]![[검색 결과.png]]
바로가기 버튼 구현
```html
<div class="fast-go">
	<div class="button">
		<a href="#">
			<div class="icon-back">
				<i class="fa-solid fa-plus"></i>
			</div>
			<p>바로가기 추가</p>
		</a>
	</div>
</div>
```
```CSS
.fast-go{
    font-size: 14px;
    margin-top: 30px;
    display:flex;
    align-items: center;
    justify-content: center;
}
.fast-go .button{
    width: 130px;
    height: 130px;
    text-align: center;
}
.fast-go .button .icon-back{
    display:flex;
    align-items: center;
    justify-content: center;
    background-color: var(--back-grey);
    margin-top:30px;
    width:50px;
    height:50px;
    margin:20px auto 0 auto;
    border-radius: 50%;
}
.fast-go .button p{
    margin-top:25px;
    color:#000;
}
.fast-go .button:hover{
    background-color: var(--grey);
    border-radius: 5px;
}
```

### 3. Chrome 맞춤 설정
이 부분은 홈페이지의 헤더, 섹션 부분과는 별개의 위치라고 생각하여 따로 빼서 구현했다.
```html
<div class="chrome-btn">
	<a href="#">
		<i class="fa-solid fa-pencil"></i>
		<p>chrome 맞춤설정</p>
	</a>
</div>
```
```CSS
.chrome-btn{
    font-size: 12px;
    position:fixed;
    padding: 5px 18px;
    bottom:20px;
    right:20px;
    border:none;
    border-radius: 20px;
    cursor: pointer;
    box-shadow: 0 3px 9px -6px rgba(0,0,0,0.5);
}
.chrome-btn:hover{
    background: var(--grey);
}
.chrome-btn a{
    display:flex;
    align-items: center;
    justify-content: center;
}
.chrome-btn i{
    margin-right:15px;
    color: rgb(99,133,236);
}
.chrome-btn p{
    color: rgb(99,133,236);
}
```

### 4. 반응형 처리
홈페이지 너비를 일정 픽셀 간격으로 두고, 검색창이 점점 작아지는것과 가장 작을 때 Chrome 맞춤 설정 버튼이 축소되도록 구현했다.
```CSS
@media screen and (max-width: 600px) {
    .search-btn input{
        width:350px
    }
    .chrome-btn{
        position: fixed;
        width:30px;
        height:30px;
        padding:5px;
    }
    .chrome-btn a{
        width:0;
    }
    .chrome-btn i{
        margin-left:35px;
        margin-top:5px;
    }
    .chrome-btn p{
        display:none;
    }
}

@media screen and (min-width:601px) and (max-width:1200px){
    .search-btn input{
        width:450px
    }
}
```
![[Pasted image 20240115183447.png]]

### 5. 마무리
지난번 메이플 로그인화면과 더불어 간단한 작업이지만 나름 JS 공부에 도움이 되었고, 미디어쿼리를 통해 반응형 웹 처리를 해보는 작업을 할 수 있어 충분히 도움이 되었다고 생각한다. 천천히 꾸준히! ✌️

👇내 구글화면과 실제 구글 화면
![[Pasted image 20240115183859.png]]