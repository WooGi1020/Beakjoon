import './Input.css'

export default function Input(onChangeInput) {



  return <div className="login-input">
    <input onChange= onChangeInput type="text" placeholder="ID를 입력하세요."/>
    <input  type="password" placeholder="PW를 입력하세요"/>
    <input type="email" placeholder="E-mail을 입력하세요"/>
  </div>
}