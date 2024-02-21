---
tistoryBlogName: coding-woogi
tistoryTitle: React Custom Hooks
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "55"
tistoryPostUrl: https://coding-woogi.tistory.com/55
---
🚫 React Hooks는 일반 함수에서 호출할 수 없다.
-> ==Component 내부== or ==또다른 React Hook(Custom Hook 제작 후 로직 분리)==에서만 가능

```JSX
// Custom Hook 만드는법

// 이름 앞에 use를 붙여 Custom Hook으로 인지시키기

// useInput.js
import { useState } from "react";

export default function Input(){
  const [value, setValue] = useState(); // 부모로부터 value와 onChangeText를 받아옴

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  return [value, onChangeValue];
}

// App.jsx
import useInput from './hooks/useInput' // custom Hooks를 만들고 불러와 사용
 return (
    <div className='APP'>
      <h1 className='title'>심플 카운터</h1>
      <section>
        <input value={text} onChange={onChangeText} /> 
      </section>
      <section>
        <Viewer count={count}></Viewer>
        {count % 2 == 0 && <Even />}
      </section>

      <section>
      <Controller onClickBtn = {onClickBtn}></Controller>
      </section>
      
    </div>
  )
```