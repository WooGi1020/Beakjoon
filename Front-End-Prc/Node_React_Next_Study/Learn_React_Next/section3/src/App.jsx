import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import Even from './components/Even'
import { useState } from 'react'
import { useEffect } from 'react'
import useUpdate from './hooks/useUpdate'
import useInput from './hooks/useInput'
// 1. 마운트 : 탄생(컴포넌트 작성 및 최초 렌더링)
// 2. 업데이트 : 변화(리렌더)
// 3. 언마운트 : 죽음(컴포넌트 제거)

function App() {

  const [count, setCount] = useState(0);
  const [text, onChangeText] = useInput();

  useUpdate(() => {
    console.log('APP 컴포넌트 업데이트');
  });

  useEffect(() => {
    console.log('마운트');
  }, [])

  const onClickBtn = (value) => {
    setCount(count + value);
  }

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
}

export default App
