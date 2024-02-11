---
tistoryBlogName: coding-woogi
tistoryTitle: React 실행 과정 이해
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "47"
tistoryPostUrl: https://coding-woogi.tistory.com/47
---
### Module을 통한 요소 생성

- npm
vite 라이브러리를 활용해 react APP 생성에 필요한 추가적인 파일들을 다운받는 것이 기본 구성

```markdown
< 과정 >

npm create vite@latest > 가장 최신 버전으로 vite 설치
npm install > package-lock.json 및 node_modules 설치
npm run dev > package.json의 script에 작성되어있는 dev(개발자용 vite APP)를 실행
```

- ESM 형식으로 module 불러오기
일반적으로 index.html에 root로 사용하는 div태그 하나만 작성
-> jsx 형식의 다른 파일들을 ESM 형식으로 root로 불러와 활용(빠른 업데이트를 제공하기 위함)

```markdown
import React from 'react';
import ReactDom from 'react-dom'

ex) 같은 폴더 경로상의 jsx 파일안의 함수를 불러오기 할 경우
import function from "/file.jsx";

ex) jsx 파일 자체를 불러오기 할 경우
import 'file.jsx';
```

### 브라우저 화면 렌더링

- React 컴포넌트 확인
특정 함수가 html 태그를 return 하고 있는 형태를 컴포넌트라고 지칭(무조건 첫글자는 대문자)

```js
function App() {
	<p></p>
} // == App Component
```

App 컴포넌트는 export default로 선언된 기본 모듈
-> 다른 함수를 렌더링하기 위해 App 컴포넌트에 ==자식 컴포넌트==로 지정

```js
function App() {
	<>
		<Child/>
		<p></p>
	</>
}

function Child() {
	<p></p>
}
```
```markdown
< 관계도 : 계층구조 >

App -> Child1 -> ChildofChild(1) -> ...
	   Child2
	   ...
-> 요소의 렌더링을 위한 기본 뼈대(root로 렌더링하는 main에 작성한 것이 App이기 때문)
```

