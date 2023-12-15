---
tistoryBlogName: coding-woogi
tistoryTitle: 13장_HTML+CSS+JS로 완성하는 최종 프로젝트_3
tistoryVisibility: "3"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "35"
tistoryPostUrl: https://coding-woogi.tistory.com/35
---

### 13.5 섹션 영역 만들기 : What I Do

- HTML 코드 작성하기
사각형 모양의 3단 분리 본문 작성을 위해 div 태그를 활용한 영역 전개방식으로 작성
```HTML
<section id="features" class="do">

        <div class="container">

          <div class="title">

            <h4>Features</h4>

            <h2>What I Do</h2>

          </div>

          <div class="do-me">                

            <div class="do-inner">

              <div class="icon">

                <i class="fa-brands fa-html5"></i>

              </div>

              <div class="content">

                <h3>HTML5</h3>

                <p>HTML5 Study</p>

              </div>

            </div>        

            <div class="do-inner">

              <div class="icon">

                <i class="fa-brands fa-css3-alt"></i>        

              </div>

              <div class="content">

                <h3>CSS3</h3>

                <p>CSS3 Study</p>

              </div>

            </div>

            <div class="do-inner">

              <div class="icon">

                <i class="fa-brands fa-js"></i>

              </div>

              <div class="content">

                <h3>JavaScript</h3>

                <p>JavaScript Study</p>

              </div>

            </div>

          </div>

        </div>  

      </section>
```

- CSS 코드 작성하기
do-inner 클래스 그룹 본문 스타일 작성
```CSS
/*float 속성 해제*/

section .do-me::after{

    content:"";

    display:block;

    clear:both;

}

/* 사각형 크기와 간격, 내부 여백 설정 */

section .do-me .do-inner{

    background-color: #fff;

    width:30%;

    padding:2rem;

    float:left;

    margin-right: 5%;

    cursor:pointer;

}

/* 마지막 사각형 외부 여백 설정 */

section .do-me .do-inner:last-child{

    margin-right:0;

}
```

폰트를 비롯한 텍스트 크기 세부 조정
```CSS
/* HTML5, CSS3, JS 텍스트 크기와 간격 */

section .do-me .do-inner .content h3{

    font-size:2rem;

    margin:1rem 0;

}

/* 사각형 텍스트 크기 */

section .do-me .do-inner .content p{

    font-size:1.15rem;

}
```

가상 클래스 선택자를 활용해 세부 묘사 설정
```CSS
/* do-inner 클래스에 마우스를 올리면 배경색과 텍스트 색상 변경 */

section .do-me .do-inner:hover{

    background-color: lightcoral;

    color:white;

}

/* do-inner 클래스에 마우스를 올리면 아이콘 폰트 색상 변경 */

section .do-me .do-inner:hover{

    color:white;

}
```

### 13.6 배경 영역
```CSS
.bg{

    background: url('./images/background.jpg') center center;

    background-size: cover;

    background-attachment: fixed; /*스크롤 시 이색적 배경 느낌 강조*/

    height:650px;

}
```

### 13.7 섹션 영역 만들기 : PortFolio
다른 섹션 영역과 동일, 사각형 그룹 짓기 및 콘텐츠 표현
```HTML
<section id = "portfolio" class = "portfolio">

        <div class = "container">

            <div class = "title">

                <h4>PORTFOLIOBACK</h4>

                <h2>PortFolio</h2>

            </div>

            <div class = "portfolio-me">

                <div class = "portfolio-inner">

                    <img src = "images/portfolio1.png" alt = "이미지1">

                    <strong>CLONE CODING</strong>

                    <h3>PAINT BOARD</h3>

                </div>

                <div class = "portfolio-inner">

                    <img src = "images/portfolio2.png" alt = "이미지2">

                    <strong>CLONE CODING</strong>

                    <h3>MY CHROME WEB</h3>

                </div>

                <div class = "portfolio-inner">

                    <img src = "images/portfolio3.png" alt = "이미지2">

                    <strong>CLONE CODING</strong>

                    <h3>MY STUDY INTRO</h3>

                </div>

            </div>  

        </div>

    </section>
```

- CSS 코드 작성하기
위 섹션 영역과 기본 CSS 코드 동일
```CSS
/* clear 속성으로 float 속성값 해제 */

section.portfolio::after{

    content:"";

    display: block;

    clear:both;

}

/* portfolio-inner 사각형 꾸미기 */

section.portfolio .portfolio-inner{

    width:30%;

    margin-right:5%;

    padding:1rem 1rem 1.5rem 1rem;

    float:left;

    background-color: #f8f8f8;

    border:1px solid #ccc;

    margin-bottom:3rem;

}

/* 3번째마다 margin-right 0 적용 */

section.portfolio .portfolio-inner:nth-child(3n){

    margin-right:0;

}
```

사각형 내 삽입 이미지, 텍스트, 여백 크기 지정
```CSS
/* 이미지 크기가 부모 요소를 넘지 않도록 100%로 지정 */

section.portfolio .portfolio-inner img{

    width:100%;

    display: block;

}

/* strong 태그 색상과 간격 */

section.portfolio .portfolio-inner strong{

    color: #ff6a6a;

    margin:0.5rem 0;

    display: block;

}

/* h3 태그 색상과 간격 */

section.portfolio .portfolio-inner h3{

    font-size:1.75rem;

}
```
