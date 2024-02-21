---
tistoryBlogName: coding-woogi
tistoryTitle: useReducer
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "56"
tistoryPostUrl: https://coding-woogi.tistory.com/56
---
컴포넌트 외부에 State 관리 로직 분리✅

- 로직
useState()와 거의 동일
```JSx
import { useReducer, useState } from "react"

function Reducer(state, action) { // Reducer 함수
  if(action.type === "DECREASE"){
    return state - action.data;
  }
  else if(action.type === "INCREASE"){
    return state + action.data;
  }
}

export default function B() {
  // count는 State값, dispatch는 type과 data와 같은 action값
  const [count, dispatch] = useReducer(Reducer, 0);

  return (<div>
    <div>
      <h4>{count}</h4>
      <div>
        <button onClick={() => {
          dispatch({
            type: "INCREASE",
            data: 1
          })
        }}>+</button>
        <button onClick={() => {
          dispatch({
            type: "DECREASE",
            data: 1
          });
        }}>-</button>
      </div>
    </div>
  </div>)
}
```

-> count를 통해 ==State==값을 전달받고, Dispatch()를 통해 type과 data와 같은 ==action==값을 전달
-> Reducer()로 값들을 받아와 로직 실행