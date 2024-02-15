import './Controller.css'

export default function Controller({onClickBtn}) {
  return(
    <div className='Btn'>
      <button onClick ={() => {
        onClickBtn(-1)
      }}>-1</button>
      <button onClick ={() => {
        onClickBtn(-10)
      }}>-10</button>
      <button onClick ={() => {
        onClickBtn(-100)
      }}>-100</button>
      <button onClick ={() => {
        onClickBtn(100)
      }}>+100</button>
      <button onClick ={() => {
        onClickBtn(10)
      }}>+10</button>
      <button onClick ={() => {
        onClickBtn(1)
      }}>+1</button>
    </div>
  )
}