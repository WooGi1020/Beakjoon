import './body.css'
import { useRef, useState } from 'react';



export default function Body(){

  const [state, setState] = useState({
    name:'',
    gender:'',
    bio:''
  })

  const nameRef = useRef() // 특정 DOM 요소를 참조

  function onChange(e) {
    setState({
      ...state,
      [e.target.name] : e.target.value,
    })
  }

  function onSubmit (){
    if(state.name == ''){
      nameRef.current.focus();
      return;
    }
    alert(`${state.name}님! 회원가입을 축하합니다.`)
  }

  return(
    <div className="body">
      <div>
        <input ref={nameRef} name={'name'} value={state.name} onChange={onChange} maxLength={100} placeholder='입력하세요'/>
      </div>
      <div>
        <select name={'gender'} value={state.gender} onChange={onChange}>
          <option value="none">밝히지않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <textarea name={'bio'} value={state.bio} onChange={onChange}/>
      <div>
        <button onClick={onSubmit}>회원가입</button>
      </div>
    </div> 
  )
}