import './Button.css'

export default function Button({color, text, children}) {

  const onClick = (e) => {
    console.log(e.pageX);
  }

  return(
    <button className="Button" 
    onClick={onClick}
    style={{
      backgroundColor: color
    }}>
      {text}
    </button>
  )
}