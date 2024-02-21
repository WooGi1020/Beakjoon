import { useState, useRef } from 'react'
import './TodoEditor.css'

export default function TodoEditor({onCreate}) {

  const [content, setContent] = useState("");
  const inputRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  }

  const onClick = () => {
    if(content === ""){
      inputRef.current.focus();
      return ;
    }
    onCreate(content);
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onClick();
    }
  }

  return <div className="TodoEditor">
    <input 
    ref={inputRef}
    value={content}
    onKeyDown={onKeyDown}
    onChange={onChangeContent}
    placeholder='오늘의 할일 ... '/>
    <button onClick={onClick}>추가</button>
  </div>
}