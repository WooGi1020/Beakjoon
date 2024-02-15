import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller'
import { useState } from 'react'

function App() {

  const [count, setCount] = useState(0);

  const onClickBtn = (value) => {
    setCount(count + value);
  }

  return (
    <div className='APP'>
      <h1 className='title'>심플 카운터</h1>

      <section>
        <Viewer count={count}></Viewer>
      </section>

      <section>
      <Controller onClickBtn = {onClickBtn}></Controller>
      </section>
      
    </div>
  )
}

export default App
