---
tistoryBlogName: coding-woogi
tistoryTitle: State
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "52"
tistoryPostUrl: https://coding-woogi.tistory.com/52
---
지속적으로 변화하는 값(컴포넌트 내에서 변화를 주도)

```JSX
import { useState } from 'react';

export default function Body(){

  const [Light, setLight] = useState('OFF'); // 새로운 State 생성, 문자열"OFF"생성(초기값)
  // Light = state 값, setLight = 상태변화함수(state 값의 변화)
  return(
    <div className="body">
      <h1>body</h1>
      {Light}
      <button
      onClick={() => {
        setLight("ON"); // 상태변화함수 호출 후, state값의 문자열 변경(인수 전달)
      }}
      >켜기</button>
      <button
      onClick={() => {
        setLight("OFF"); // 위와 동일
      }}
      >끄기</button>
    </div> 
}
```

-> 이렇게 값이 변경 가능한 이유 :  ==리액트가 컴포넌트의 값이 바뀔 때마다 렌더링을 다시하기 때문==
-> 반대로 리액트의 RE렌더링 조건은 컴포넌트 내의 ==State값==이 변경되었을 경우에 한정

# State & Props

Props 문법을 통해 State 값을 컴포넌트로 내려보내는 것 또한 가능
```JSX
// State 값을 매개변수로 전달받아 조작
function Lightbulb({Light}) {

  return <>
    {Light === 'ON' ? <div style={{backgroundColor:'orange'}}>ON</div> : <div
    style={{backgroundColor:"grey"}}>OFF</div>}
  </>
}

function StaticLightbulb () {
  return <div style={{ backgroundColor: "gray"}}>OFF</div>
}


export default function Body(){

  const [Light, setLight] = useState('OFF'); // 새로운 State 생성 후 문자열 "OFF" 생성(초기값)

  return(
    <div className="body">
      <h1>body</h1>

      <Lightbulb Light={Light} />

      <button
      onClick={() => {
        setLight("ON"); // 상태변화함수 호출 후, state값의 문자열 변경(인수 전달)
      }}
      >켜기</button>
      <button
      onClick={() => {
        setLight("OFF"); // 상태변화함수 호출 후, state값의 문자열 변경(인수 전달)
      }}
      >끄기</button>
    </div> 
  )
}
```

- 리액트의 렌더링
Props로 내려보낸 두 함수 중 StaticLightbulb는 변경되는 값이 없어 렌더링이 되지 않아야 함에도 불구하고 ==부모가 렌더링== 되므로 같이 렌더링 진행

-> 과한 렌더링은 성능 저하를 유발하므로, 렌더링되는 부모 컴포넌트 밑의 렌더링이 필요없는 자식 컴포넌트들은 따로 빼는 등의 처리를 지향(최적화)


