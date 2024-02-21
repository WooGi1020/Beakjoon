import { useReducer } from 'react'
import './App.css'
import Input from './components/Input'
import LoginBtn from './components/LoginBtn'
import Title from './components/Title'

function Reducer(state, action) {
  switch(action.type){
    case "CHANGE":
      return [...state, action.data];
  }
}

function App() {

  const [value, dispatch] = useReducer(Reducer, []);

  const onChangeInput = (e) => {
    dispatch({
      type: "CHANGE",
      data: e.target.value
    })
  }

  const onClick = (inputValue) => {
    dispatch({
      type:"CLICK",
      data: inputValue
    })
  }

  return (
    <div className="login-page">
      <Title />
      <form>
        <Input onChangeInput={onChangeInput}/>
        <LoginBtn onClick={onClick}/>
      </form>
    </div>
  )
}

export default App
