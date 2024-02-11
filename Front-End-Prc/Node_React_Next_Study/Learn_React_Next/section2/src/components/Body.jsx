import './body.css'
import Button from './button'

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
      <Button {...buttonProps}>
        <div>버튼</div>  
      </Button>
      <Button text={"2번 버튼"}/>
      <Button text={"3번 버튼"}/>
    </div> 
  )
}