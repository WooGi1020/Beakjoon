---
tistoryBlogName: coding-woogi
tistoryTitle: 13장_HTML+CSS+JS로 완성하는 최종 프로젝트_4
tistoryVisibility: "3"
tistoryCategory: "1407661"
tistorySkipModal: true
tistoryPostId: "36"
tistoryPostUrl: https://coding-woogi.tistory.com/36
---

### 13.8 섹션 영역 만들기 : Contact

- HTML 코드 작성하기
왼, 오른쪽 영역을 구분하여 작성(div 태그 class명을 left, right로 분할)
```HTML
<section id = "contact" class = "contact">

        <div class = "container">

            <div class = "title">

                <h4>CONTACT</h4>

                <h2>CONTACT WITH ME</h2>

            </div>

            <div class = "contact-me">

                <div class = "left">

                    <div class = "card">

                        <div class = "icon">

                            <i class = "fa-solid fa-phone-volume"></i>

                        </div>

                        <div class = "info-text">

                            <h3>phone</h3>

                            <p>010-1234-5678</p>

                        </div>

                    </div>

                    <div class = "card">

                        <div class = "icon">

                            <i class = "fa-solid fa-envelope-open-text"></i>

                        </div>

                        <div class = "info-text">

                            <h3>e-mail</h3>

                            <p>jungwk1020@gmail.com</p>

                        </div>

                    </div>

                    <div class = "card">

                        <div class = "icon">

                            <i class = "fa-solid fa-location-crosshairs"></i>

                        </div>

                        <div class = "info-text">

                            <h3>address</h3>

                            <p>86 MILLER ANGOLA NY<br> 14006-1028 USA</p>

                        </div>

                    </div>

                </div>

                <div class = "right">

                    <form action = "#">

                        <div class = "form-group">

                            <label for = "name">name</label>

                            <input type = "text" id = "name">

                        </div>

                        <div class = "form-group">

                            <label for = "e-mail">e-mail</label>

                            <input type = "text" id = "e-mail">

                        </div>

                        <div class = "form-group">

                            <label for = "msg">messege</label>

                            <textarea id = "msg"></textarea>

                        </div>

                        <button type = "submit">send</button>

                    </form>

                </div>

            </div>

        </div>

    </section>
```

- CSS 코드 작성하기
```CSS
section.contact .contact-me::after{

    content:"";

    display:block;

    clear:both;

}

section.contact .contact-me .left{

    width:30%;

    float:left;

}

section.contact .contact-me .right{

    float:left;

    width:65%;

    margin-left:5%;

    margin-bottom:2rem;

    border:1px solid #ccc;

    padding:1rem;

}

section.contact .contact-me .left .card{

    border:1px solid #ccc;

    padding:1rem;

    display:flex;

    align-items: center;

    margin-bottom:1.25rem;

}

section.contact .contact-me .left .card .icon i{

    font-size:2rem;

    margin-right:15px;

}

/* form-group 사이 간격 지정*/

section.contact .contact-me .right .form-group{

    margin-bottom: 1.25rem;

}

/* label 태그가 인라인 성격이어서 외부 여백을 적용하기 위해 block으로 변경 */

section.contact .contact-me .right .form-group label{

    display:block;

    margin-bottom:0.85rem;

}

/* input 요소 꾸미기 */

section.contact .contact-me .right .form-group input{

    padding:0.625rem;

    width:100%;

    outline:none;

    border:1px solid #ccc;

    border-radius: 10px;

}

/* :focus 가상 클래스 선택자로 입력 요소에 커서가 활성화되면 파란색 테두리와 그림자효과 */

section.contact .contact-me .right .form-group input:focus{

    border:1px solid #719ECE;

    box-shadow:0 0 10px #719ECE;

}

/* textarea 요소 꾸미기 */

section.contact .contact-me .right .form-group textarea{

    height:300px;

    width:100%;

    resize:none;

    border:1px solid #ccc;

    border-radius: 10px;

}

/* textarea 요소에 커서가 활성화되면 파란색 테두리와 그림자 추가 */

section.contact .contact-me .right .form-group textarea:focus{

    outline:none;

    border:1px solid #719ECE;

    box-shadow:0 0 10px #719ECE;

}

/* 버튼 요소 꾸미기 */

section.contact .contact-me .right button{

    width:100%;

    padding:1rem;

    background-color: #f78b00;

    border:none;

    color:white;

}
```

### 13.9 반응형 코드 적용하기

- 코드 작성
변경되는 해상도마다 동적으로 반응하는 코드 작성
```CSS
@media screen and (max-width: 1140px){

  

    /* 메인 container 기준 1140 -> 992px */

    main .container{

      width: 992px;

    }

    /* 섹션 container 기준 1140 -> 600px */

    section .container{

      width:600px;

    }

    /* About me 영역 왼쪽을 너비를 50% -> 100% 변경 */

    section .about-self .left{

      width:100%;

      margin-bottom: 1.5rem;

    }

    /* About me 영역 오른쪽 너비를 50% -> 100% 변경 */

    section  .about-self .right{

      width:100%;

      padding:0;

    }

    /* What I Do 영역의 콘텐츠 박스의 너비를 30% -> 48% 변경 */

    section .do-me .do-inner{

      width:48%;

      margin-bottom: 1.5rem;

      margin-right: 0;

    }

    section .do-me .do-inner:nth-child(2n+1){

      margin-right:4%; /* 1, 3, 5...번째 본문 사각형에 margin-right 4% 적용 */

    }

    /* PortFolio 영역의 콘텐츠 박스 너비를 30% ->  48% 변경 */

    section .portfolio-me .portfolio-inner{

      width:48%;

      margin-right: 0;

    }

    section .portfolio-me .portfolio-inner:nth-child(2n+1){

      margin-right:4%;

    }

    /* Contact With Me 영역 */

    section.contact .contact-me .left{

      width:100%; /* 너비 변경 30% -> 100% */

    }

    section.contact .contact-me .right{

      width:100%;/* 너비 변경 65% -> 100% */

      margin-left: 0; /* margin 초기화 */

    }

  }

  @media (max-width: 992px){

    html{

      font-size: 14px;

    }

    /* 메인 영역 container 기준 너비 변경 */

    main .container{

      width: 768px; /* 992px -> 768px */

    }

    /* PortFolio 영역 */

    section .portfolio-me .portfolio-inner{

      width:100%; /* 48% -> 100% 변경 */

    }

  }

  @media (max-width: 768px){

    html{

      font-size: 13px;

    }

    /* 메인 영역 container 기준 너비 변경 */

    main .container{

      width: 576px; /* 768px -> 576px */

    }

    section .container{

      width:400px; /* 600px -> 400px */

    }

    section .do-me .do-inner{

      width:100%; /* 48% -> 100% */

      margin-right: 0; /* margin 초기화 */

    }

  }

  @media (max-width: 576px){

    html{

      font-size: 12px;

    }

    main .container{

      width: 400px; /* 576px -> 400px */

    }

    section .container{

      width:360px; /* 400px -> 360px */

    }

  }

  @media (max-width: 400px){

    html{

      font-size: 11px;

    }

    main .container{

      width: 320px;/* 400px -> 320px */

    }

    main h4{

      font-size: 1.5rem;

    }

    section .container{

      width: 320px;/* 360px -> 320px */

    }

    section .title h2{

      font-size: 3rem; /* 3.5rem -> 3rem */

    }

  }
```