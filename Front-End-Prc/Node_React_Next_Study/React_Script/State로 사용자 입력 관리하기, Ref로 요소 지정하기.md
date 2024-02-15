---
tistoryBlogName: coding-woogi
tistoryTitle: State로 사용자 입력 관리하기, Ref로 요소 지정하기
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "53"
tistoryPostUrl: https://coding-woogi.tistory.com/53
---

```JSX
export default function Body(){

  const [name, setName] = useState(""); // 빈 문자열 초기값으로 지정

  function onChangeName(e) {
    setName(e.target.value); // input 태그가 변경되는 이벤트가 호출될 함수 호출
  }

  return(
    <div className="body">
      <input value={name} onChange={onChangeName} />
    </div> 
  )
}
```

useState를 사용하여 각각의 value값 지정 및 입력값 관리
```JSX
export default function Body(){

  const [name, setName] = useState(""); 
  const [gender, setGender] = useState("");
  const [bio, setBio] = useState(""); // 각각의 입력폼마다 useState 지정

  function onChangeName(e) {
    setName(e.target.value);
  }

  function onChangeGender(e) {
    setGender(e.target.value);
  }

  function onChangeBio(e) {
    setBio(e.target.value); // 입력폼마다 이벤트 핸들러 지정
  }

  return(
    <div className="body">
      <div>
        <input value={name} onChange={onChangeName} maxLength={100} placeholder='입력하세요'/>
      </div>
      <div>
        <select value={gender} onChange={onChangeGender}>
          <option value="none">밝히지않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <textarea value={bio} onChange={onChangeBio}/>
    </div> 
  )
}
```

-> 위 방법은 복잡하고 다양한 웹페이지 제작 시 문제 야기

따라서, State를 통합한 객체 형태로 지정하여 사용
```JSX
export default function Body(){

  const [state, setState] = useState({ // 각각의 입력폼 State를 객체로 통합
    name:'',
    gender:'',
    bio:''
  })

  function onChangeName(e) {
    setState({
      ...state, // 통합한 객체의 알맞는 프로퍼티를 가져오기 위해 전개연산자 사용
      name: e.target.value,
    });
  }

  function onChangeGender(e) {
    setState({
      ...state,
      gender: e.target.value,
    });
  }

  function onChangeBio(e) {
    setState({
      ...state,
      bio: e.target.value,
    });
  }

  return(
    <div className="body">
      <div>
        <input value={state.name} onChange={onChangeName} maxLength={100} placeholder='입력하세요'/>
      </div>
      <div>
        <select value={state.gender} onChange={onChangeGender}>
          <option value="none">밝히지않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <textarea value={state.bio} onChange={onChangeBio}/>
    </div> 
  )
}
```

-> 비슷한 함수끼리도 묶어 더욱 간결하게
```JSX
export default function Body(){

  const [state, setState] = useState({
    name:'',
    gender:'',
    bio:''
  })

  function onChange(e) {
    setState({
      ...state,
      [e.target.name] : e.target.value, // 계산된 프로퍼티 문법(key)
    })
  }

  return(
    <div className="body">
      <div>
        <input name={'name'} value={state.name} onChange={onChange} maxLength={100} placeholder='입력하세요'/>
      </div>
      <div>
        <select name={'gender'} value={state.gender} onChange={onChange}>
          <option value="none">밝히지않음</option>
          <option value="female">여성</option>
          <option value="male">남성</option>
        </select>
      </div>
      <textarea name={'bio'} value={state.bio} onChange={onChange}/>
    </div> 
  )
}
```


# Ref

리액트에서 특정 요소에 접근하기 위해 사용하는 객체

```JSX
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
        <input ref={nameRef} name={'name'} value={state.name} onChange={onChange}  maxLength={100} placeholder='입력하세요'/>
      </div>

    </div> 
  )
}
```

DOM 요소 안에 ref={사용자 지정 Ref}를 삽입하여 요소를 가리키도록 지정, 후에 여러가지 이벤트를 호출하여 사용