import style from './SearchBar.module.css'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchBar({q}) {

  const [search, setSearch] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    setSearch(q);
  },[q])

  const onChangeSearch =(e) =>{
    setSearch(e.target.value);
  }

  const onClick = () => {
    if(search !== ""){
      nav(`/search?q=${search}`);
    }
  }

  const onKeyDown = (e) => {
    if(e.keyCode === 13){
      onClick();
    }
  }

  return <div className={style.container}>
    <input type="text" 
    onChange={onChangeSearch}
    onKeyDown={onKeyDown}
    placeholder='찾고 싶은 나라를 입력하세요'/>
    <button
    onClick={onClick}
    >검색</button>
  </div>
}