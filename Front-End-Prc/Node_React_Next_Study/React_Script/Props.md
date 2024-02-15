---
tistoryBlogName: coding-woogi
tistoryTitle: Props
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "50"
tistoryPostUrl: https://coding-woogi.tistory.com/50
---

- props
React앱에서 자식 컴포넌트에게 데이터를 보내주고자 할 때 사용하는 문법
```jsx
// 여러개의 버튼에 각기 다른 텍스트를 적용하고 싶은 경우
return(
    <div className="body">
      <h1>body</h1>
      <Button text={"1번 버튼"}/> <!-- 다른 텍스트 적용 -->
      <Button/>
      <Button/>
    </div>
	)

// 자식 컴포넌트에 요소를 추가할 경우 props프로퍼티로 이를 받아옴
export default function Button(props) {
	const {color, text} = props
	return(
		<button className="Button"
		style = {{
		backgroundColor={"props.color"}}
		>
		{"props.text"}</button>
	)
}
```

-> 객체 형태로 넘어오기 때문에, 구조분해할당도 적용(더 간단하게)
```jsx
export default function Button({color, text}) {
	return(
		<button className="Button"
		style={{
		backgroundColor={"color"}}
		>{text}</button>
	)
}
```

-> 객체 프로퍼티로 넘어가는 형식이기 때문에, 아예 객체로 정의하여 사용도 가능
```jsx
export default function Body(){

  const buttonProps = {
    text: "1번 버튼",
    color: "red",
    a:1,
    b:2,
    c:3,
  }

  return(
    <div className="body">
      <h1>body</h1>
      <Button {...buttonProps}> <!-- 전개 연산자 -->
        <div>버튼</div>  <!-- children이라는 이름으로 넘어감 -->
      </Button>
      <Button text={"2번 버튼"}/> <!-- children 미포함 -->
      <Button text={"3번 버튼"}/>
    </div> 
  )
}

export default function Button({color, text, children}) { // 매개변수 children 추가

  return(
    <button className="Button" style={{
      backgroundColor: color
    }}>
      {children} <!-- text가 아닌 children을 받았으므로 다른 버튼엔 적용X -->
    </button>
  )
}
```
