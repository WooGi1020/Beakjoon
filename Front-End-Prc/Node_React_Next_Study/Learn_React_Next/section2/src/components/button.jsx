import './Button.css'

export default function Button({color, text, children}) {

  return(
    <button className="Button" style={{
      backgroundColor: color
    }}>
      {children}
    </button>
  )
}