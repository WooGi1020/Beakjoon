```markdown
npx=create-next-app@latest .
- npx는 직접 설치하는 것이 아닌 설치없이 불러와 이용한다는 명령어
```

- 초기 세팅
기본적으로 Next만의 Page Router를 이용하여 Component를 렌더링
```JSX
// pages/_app.js
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  // Props로 Components를 내보내고 자식들로부터 pageProps를 받아와 렌더링
  // 리액트의 App 컴포넌트와 유사
  return <Component {...pageProps} />;
}
```
```markdown
- 리액트의 라우터 개념
 기존의 Router 코드 작성과 달리, Pages 폴더 안에 렌더링할 컴포넌트를 작성하고 URL Parameter
 를 통해 컴포넌트들을 불러옴 (default = index.js)
 
 -> 기존의 CSR렌더링 방식을 보완하여 초기 페이지, 변경할 페이지들의 렌더링 속도 모두 상향
```

```JSX
// pages/_document.js

// HTML 파일과 유사한 기
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```
```markdown
- 기존의 폰트 스크립트, css 파일 임포트, 메타태그 설정 등의 HTML 파일의 기능을 수행
```



