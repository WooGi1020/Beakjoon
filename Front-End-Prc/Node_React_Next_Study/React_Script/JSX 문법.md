---
tistoryBlogName: coding-woogi
tistoryTitle: JSX 문법
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "49"
tistoryPostUrl: https://coding-woogi.tistory.com/49
---
### JavaScriptXML의 약자(JS + HTML)

```JS
// ex
export default function Body(){
  const num = 10;
  const string = "hello";
  const bool = true; // boolean 값은 자식요소로 작성 불가
  const obj = { // 객체는 자식요소로 작성 불가 obj.a는 가능(number 값이기 때문)
	  a:1,
  }

  // 선언문이 아닌 표현식만 작성
  return(
    <div>
    <h1>Body</h1>
    <h2>{num}</h2>
    <h2>{num % 2 ? '짝수':'홀수'}</h2>
    </div>
  )

  // 조건부 렌더링
  return(
    <>
      <h1>Body</h1>
      {num % 2 === 0 ? <div>{num}는 짝수입니다.</div>:<div>{num}은 홀수입니다.</div>}
    </>
  )
}
```

- JSX 문법 규칙
1.  닫는 태그(</>)를 꼭 사용
2.  return하는 모든 값들은 최상위 부모 요소안에 작성(빈 태그도 사용가능)

- JSX 스타일링
```js
// 태그 안에 직접 작성하는 방법
export default function Body(){

  return(
    <div style = {{
      backgroundColor: 'green',
    }}>
      <h1>body</h1>
    </div>
  )
}

// css 파일 import
import './body.css'

export default function Body(){

  return(
    <div className="body"> // JS와 HTML의 혼용이기 때문에 className으로 작성해야함
      <h1>body</h1>
    </div>
  )
}
```
