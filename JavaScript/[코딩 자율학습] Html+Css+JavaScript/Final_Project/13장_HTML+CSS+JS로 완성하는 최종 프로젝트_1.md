---
tistoryBlogName: coding-woogi
tistoryTitle: 13장_HTML+CSS+JS로 완성하는 최종 프로젝트_1
tistoryVisibility: "3"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "33"
tistoryPostUrl: https://coding-woogi.tistory.com/33
---

### 13.1 최종 프로젝트 개요

- 실무와 비슷한 단계적 웹 페이지 구현
헤더, 메인, 섹션 영역으로 구분되는 기본 구조를 채택한 웹페이지

### 13.2 헤더 영역 만들기
```HTML
    <!--start_header-->

    <header>

        <div class = "container"> <!--HTML 구조의 핵심 container 클래스 포함-->

            <h1>

                <button>COGI</button>

            </h1>

            <nav>

                <ul>

                    <li>

                        <button>About</button>

                    </li>

                    <li>

                        <button>Features</button>

                    </li>

                    <li>

                        <button>Portfolio</button>

                    </li>

                    <li>

                        <button>Contact</button>

                    </li>

                </ul>

            </nav>

        </div>

    </header>

    <!--end_header-->  
```

```CSS
/*헤더 영역*/

.container{

    width: 1140px;

    height:0 auto;

}

header{

    position: fixed;

    color:white;

    top:0;

    z-index: 1;

    width:100%;

    padding:1rem;

}

header .container{

    display:flex;

    justify-content: space-between;

    align-items: center;

    width:100%;

}

header nav ul{

    display:flex;

}

header nav ul li{

    padding:10px;

}

header button{

    background: transparent;

    border:0;

    cursor:pointer;

}

header h1 button{

    color:white;

    font-size: 2rem;

    font-weight: bold;

}

header nav ul li button{

    font-size: 1.2rem;

    color:white;

}
```

### 13.3 메인 영역 만들기
```HTML
<!--start_main-->

    <main id = "main">

        <div class = "container">

            <h4>Welcome🖐️</h4>

            <h2>I'M A <span>Front-End Developer.</span></h2>

            <p>시작이 반이다.</p>

            <button class = "download">DOWNLOAD CV</button>

            <button class = "mouse"><i class="fa-solid fa-computer-mouse"></i></button>

        </div>

    </main>

    <!--end_main-->
```

```CSS
/*main 영역*/

main{

    width:100%;

    height:100vh;

    color:white;

    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('images/me.jpg')

    center center;

    background-size: cover;

    display:flex;

    justify-content: center;

    align-items: center;

    text-align: center;

}

main h4{

    font-size: 2rem;

}

main h2{

    font-size: 3.5rem;

    margin:2rem 0;

    letter-spacing: 3px;

}

main p{

    max-width:500px;

    margin:0 auto;

    font-size:1.25rem;

}

main button.download{

    background-color:transparent;

    border:3px solid white;

    border-radius: 20px;

    padding : 1rem 2rem;

    margin-top: 3rem;

    color:white;

    font-weight: bold;

    cursor:pointer;

}

main button.mouse{

    background-color:transparent;

    border:none;

    color:white;

    font-size:2rem;

    position:absolute;

    bottom:1rem;

    left:50%;

    transform:translateX(-50%);

    animation:upDown 1s ease-in-out infinite;

    cursor:pointer;

  }

  @keyframes upDown{

    0%{

      bottom:1rem;

    }

    50%{

      bottom:1.5rem;

    }

    100%{

      bottom:1rem;

    }

  }

main h2 span::after{

    content:"";

    height:40px;

    width:3px;

    background-color: #fff;

    display: inline-block;

    animation: blink .7s ease-in-out infinite;

}

@keyframes blink{

    0%{

        opacity:1;

    }

    100%{

        opacity:0;

    }

}
```