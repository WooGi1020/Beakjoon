---
tistoryBlogName: coding-woogi
tistoryTitle: Event Handling
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "51"
tistoryPostUrl: https://coding-woogi.tistory.com/51
---
Event(웹에서 일어나는 사용자의 행동) + Handling(다루다, 처리하다) = 웹 사용자의 행동 처리

- 이벤트 핸들러
```JSX
export default function Button({color, text, children}) {

  return(
    <button className="Button" 
    onClick={() => { // vanila JS와 거의 동일(이벤트 핸들러 형식)
      alert('clicked!');
    }}
    style={{
      backgroundColor: color
    }}>
      {children}
    </button>
  )
}

export default function Button({color, text, children}) {

  const onClick = () => {
	  alert('clicked!');
  }

  return(
    <button className="Button" 
    onClick={onClick} // 함수 자체를 불러오기 때문에 정확한 함수명만 기
    style={{
      backgroundColor: color
    }}>
      {children}
    </button>
  )
}
```

- 이벤트 객체
이벤트 핸들러를 통해 이벤트를 받아오는 과정에서 ==합성 이벤트 객체==로서 매개변수를 받아옴
합성 이벤트 객체 -> 모든 브라우저들의 이벤트를 하나로 통합
```JSX
export default function Button({color, text, children}) {

  const onClick = (e) => {
	  console.log(e) // 매개변수 e(이름은 상관X)를 통해 이벤트 리스트를 받아
  }

  return(
    <button className="Button" 
    onClick={onClick} // 함수 자체를 불러오기 때문에 정확한 함수명만 기
    style={{
      backgroundColor: color
    }}>
      {children}
    </button>
  )
}
```
